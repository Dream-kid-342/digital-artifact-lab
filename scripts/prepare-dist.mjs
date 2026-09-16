import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const outputPublicDir = path.join(rootDir, '.output', 'public');
const distDir = path.join(rootDir, 'dist');

console.log('--- Preparing dist directory for Render Static Site ---');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy everything from .output/public to dist if it exists
if (fs.existsSync(outputPublicDir)) {
  fs.cpSync(outputPublicDir, distDir, { recursive: true });
  console.log('✓ Copied .output/public files to dist/');
} else if (fs.existsSync(path.join(rootDir, 'public'))) {
  fs.cpSync(path.join(rootDir, 'public'), distDir, { recursive: true });
  console.log('✓ Copied public/ files to dist/');
}

// Ensure _redirects file exists for SPA routing on Render Static Site
const redirectsPath = path.join(distDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200\n', 'utf8');
console.log('✓ Created dist/_redirects for SPA client routing');

// If index.html doesn't exist in dist, create a clean static bootstrapper
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  // Find the primary entry js and css from dist/assets
  const assetsDir = path.join(distDir, 'assets');
  let scriptTags = '';
  let styleTags = '';

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const cssFiles = files.filter(f => f.endsWith('.css'));
    const jsFiles = files.filter(f => f.endsWith('.js'));

    for (const css of cssFiles) {
      styleTags += `    <link rel="stylesheet" href="/assets/${css}">\n`;
    }
    // Main client entry in TanStack Start typically has client or app or index
    const clientEntry = jsFiles.find(f => f.includes('client') || f.includes('main') || f.includes('app')) || jsFiles[0];
    if (clientEntry) {
      scriptTags += `    <script type="module" src="/assets/${clientEntry}"></script>\n`;
    }
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mitchel Ndinda Martin — Software Developer</title>
    <meta name="description" content="Portfolio of Mitchel Ndinda Martin, Full-Stack Software Developer based in Nairobi, Kenya." />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
${styleTags}  </head>
  <body class="bg-[#080e1b] text-slate-100 min-h-screen">
    <div id="root"></div>
${scriptTags}  </body>
</html>`;

  fs.writeFileSync(indexPath, htmlContent, 'utf8');
  console.log('✓ Generated dist/index.html');
}

console.log('✓ Render dist preparation complete!');
