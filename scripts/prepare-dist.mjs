import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const rootDir = process.cwd();
const outputPublicDir = path.join(rootDir, '.output', 'public');
const serverEntry = path.join(rootDir, '.output', 'server', 'index.mjs');
const distDir = path.join(rootDir, 'dist');

console.log('--- Preparing dist directory for Render Deployment ---');

// 1. Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 2. Copy static assets from .output/public or public/ to dist/
if (fs.existsSync(outputPublicDir)) {
  fs.cpSync(outputPublicDir, distDir, { recursive: true });
  console.log('✓ Copied .output/public files to dist/');
} else if (fs.existsSync(path.join(rootDir, 'public'))) {
  fs.cpSync(path.join(rootDir, 'public'), distDir, { recursive: true });
  console.log('✓ Copied public/ files to dist/');
}

// 3. Ensure _redirects file exists for SPA routing on Render Static Sites & Netlify
const redirectsPath = path.join(distDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200\n', 'utf8');
console.log('✓ Created dist/_redirects for SPA routing');

// 4. Ensure _headers file exists for security & optimal caching
const headersPath = path.join(distDir, '_headers');
const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
fs.writeFileSync(headersPath, headersContent, 'utf8');
console.log('✓ Created dist/_headers');

// 5. Discover project routes
const routes = ['/', '/about', '/contact', '/experience', '/projects', '/resume', '/skills'];

// Dynamically discover project slugs from src/data/portfolio.ts
const portfolioFile = path.join(rootDir, 'src', 'data', 'portfolio.ts');
if (fs.existsSync(portfolioFile)) {
  const content = fs.readFileSync(portfolioFile, 'utf8');
  const slugMatches = content.matchAll(/slug:\s*["']([^"']+)["']/g);
  for (const match of slugMatches) {
    const slug = match[1];
    const projectRoute = `/projects/${slug}`;
    if (!routes.includes(projectRoute)) {
      routes.push(projectRoute);
    }
  }
}

// 6. Prerender all routes by starting the built Nitro server and capturing full SSR HTML
async function prerenderRoutes() {
  if (!fs.existsSync(serverEntry)) {
    console.warn('⚠️ Server entry not found at .output/server/index.mjs; skipping SSR prerender.');
    return;
  }

  const port = process.env.PRERENDER_PORT || 4173;
  const baseUrl = `http://127.0.0.1:${port}`;

  console.log(`Starting Nitro server on port ${port} for static prerendering...`);
  const server = spawn(process.execPath, [serverEntry], {
    env: {
      ...process.env,
      PORT: String(port),
      HOST: '127.0.0.1',
      NODE_ENV: 'production',
    },
    stdio: 'pipe',
  });

  // Wait for server to start responding
  let ready = false;
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      const res = await fetch(`${baseUrl}/`);
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch {
      // Server not ready yet, continue polling
    }
  }

  if (!ready) {
    console.warn('⚠️ Nitro server did not respond in time; skipping static prerendering.');
    server.kill();
    return;
  }

  console.log('✓ Nitro server is ready. Prerendering routes...');

  for (const route of routes) {
    try {
      const res = await fetch(`${baseUrl}${route}`);
      if (res.ok) {
        const html = await res.text();
        if (route === '/') {
          fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
        } else {
          const relPath = route.replace(/^\//, '');
          const routeDir = path.join(distDir, relPath);
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
          fs.writeFileSync(path.join(distDir, `${relPath}.html`), html, 'utf8');
        }
        console.log(`  ✓ Prerendered ${route} (${html.length} bytes)`);
      } else {
        console.warn(`  ⚠️ Failed to prerender ${route}: HTTP ${res.status}`);
      }
    } catch (err) {
      console.warn(`  ⚠️ Error fetching ${route}:`, err.message);
    }
  }

  // Prerender 404 page
  try {
    const notFoundRes = await fetch(`${baseUrl}/404-not-found`);
    const notFoundHtml = await notFoundRes.text();
    fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
    console.log('  ✓ Prerendered 404.html');
  } catch (err) {
    console.warn('  ⚠️ Could not prerender 404.html:', err.message);
  }

  // Gracefully stop the server
  server.kill('SIGTERM');
  console.log('✓ Prerendering complete. Nitro server stopped.');
}

try {
  await prerenderRoutes();
} catch (err) {
  console.error('Error during prerendering:', err);
  process.exitCode = 1;
}

