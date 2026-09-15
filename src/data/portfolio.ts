/**
 * Single source of truth for all portfolio content.
 * Edit this file to update text, skills, experience and projects.
 *
 * Links that are not yet available are set to `null` on purpose — the UI hides
 * any button whose link is null instead of rendering a broken link.
 */

export const profile = {
  name: "Mitchel Ndinda Martin",
  role: "Software Developer | Full-Stack Web Developer",
  shortRole: "Software Developer",
  location: "Nairobi, Kenya",
  email: "mitchndinda@gmail.com",
  phone: "0741 453 093",
  phoneHref: "+254741453093",
  education: {
    school: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    degree: "Bachelor of Science in Computer Science",
    expected: "Expected graduation 2027",
  },
  /** Replace the file at public/images/profile.jpg to change the portrait. */
  photo: "/images/profile.jpg",
  /** Add the real PDF at public/documents/Mitchel-Ndinda-Martin-Resume.pdf */
  resumePdf: "/documents/Mitchel-Ndinda-Martin-Resume.pdf",
};

/** Set these to your real profile URLs. `null` hides the link everywhere. */
export const socials: { label: string; url: string | null }[] = [
  { label: "GitHub", url: null },
  { label: "LinkedIn", url: null },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science student at JKUAT and a full-stack developer. I've been writing software for more than four years, most of it self-directed: building projects, breaking them, and rebuilding them until the structure held up.",
    "My work covers the whole path of a web application — interface design, backend services, relational database design, REST APIs, testing and deployment. I care about applications that are practical to use and maintainable to read six months later.",
    "Right now I'm building larger applications and steadily widening the technical ground I work on: AI/ML, automation, cybersecurity and cloud tooling.",
  ],
  timeline: [
    {
      period: "2022",
      title: "Started building software projects",
      detail:
        "First hands-on programming work: small applications, scripts and academic projects.",
    },
    {
      period: "2023–2024",
      title: "Expanded into full-stack web development",
      detail:
        "Frontend interfaces with JavaScript and React, backend services in Python, and relational database work.",
    },
    {
      period: "2025+",
      title: "Building larger practical applications",
      detail:
        "Full-stack projects with REST APIs and PostgreSQL, while exploring AI/ML, automation, cybersecurity and cloud technologies.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Programming",
    icon: "code",
    items: ["Python", "Java", "JavaScript", "C++", "C#", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
      "DOM Manipulation",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Python",
      "Flask",
      "Django",
      "Java",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Relational Database Design",
      "SQL",
      "CRUD",
    ],
  },
  {
    title: "Software Engineering",
    icon: "gitBranch",
    items: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Debugging",
      "Testing",
      "Software Architecture",
      "Git",
    ],
  },
  {
    title: "Tools & Environments",
    icon: "terminal",
    items: ["Git", "GitHub", "Docker", "Linux"],
  },
] as const;

export const experience = [
  {
    role: "Software Developer",
    company: "Independent Web & Software Developer",
    mode: "Remote",
    period: "2022 – Present",
    summary:
      "Designing and developing personal, academic, and independent software projects with a focus on practical web applications, backend services, database systems, and reliable user experiences.",
    bullets: [
      "Developed full-stack applications from initial requirements and interface design through backend implementation, database integration, testing, and deployment.",
      "Designed relational PostgreSQL database structures for users, courses, departments, registrations, and academic records.",
      "Developed REST APIs for communication between frontend applications, backend services, and databases.",
      "Implemented authentication, authorization, validation, CRUD workflows, search, filtering, and pagination.",
      "Built responsive interfaces using React, JavaScript, HTML, CSS, and Bootstrap.",
      "Diagnosed frontend, backend, database, and integration issues during development.",
      "Used Git and GitHub for source control and organized development workflows.",
      "Deployed applications and configured environments for production use.",
    ],
  },
];

export type Screenshot = {
  /** Local path under public/images/<project>/ — replace with real screenshots. */
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  capabilities: string[];
  links: { github: string | null; demo: string | null; pdf: string | null };
  cover: string;
  overview: string;
  problem: string;
  solution: string;
  role: string[];
  architecture: string[];
  implementation: { area: string; detail: string }[];
  decisions: { challenge: string; decision: string }[];
  screenshots: Screenshot[];
};

export const projects: Project[] = [
  {
    slug: "jkuat-events-portal",
    title: "JKUAT Events & Opportunities Portal",
    category: "Full-Stack Web Application",
    tagline:
      "One place for JKUAT students to find events, internships, scholarships, competitions and technology opportunities.",
    description:
      "A platform designed to help JKUAT students discover events, internships, scholarships, competitions, and technology opportunities in one place, instead of tracking them across scattered notice boards and group chats.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Python"],
    capabilities: [
      "Searchable opportunity listings",
      "Event registration",
      "Administrator management",
      "Responsive interface",
      "Filtering by category and type",
      "Structured content management",
    ],
    links: { github: null, demo: null, pdf: "/documents/jkuat-events-portal.pdf" },
    cover: "/images/jkuat-portal/dashboard.png",
    overview:
      "The portal collects university events and student opportunities into a single searchable catalogue. Students browse and filter listings, open a detail view, and register for events. Administrators publish and maintain the listings through a management view.",
    problem:
      "Opportunity information at university is spread across notice boards, department pages, email threads and messaging groups. Students miss deadlines simply because nothing collects the information in one predictable place, and there is no reliable way to search what is currently open.",
    solution:
      "A structured catalogue with consistent fields for every listing — title, category, description, dates and deadlines — combined with client-side search and filtering so a student can narrow the list quickly. Event registration is handled in the same place as discovery, and administrators manage content through a dedicated view rather than editing static pages.",
    role: [
      "Designed the information structure for listings, categories and registrations.",
      "Built the responsive interface with HTML5, CSS3, Bootstrap and JavaScript.",
      "Implemented search, filtering and the listing detail views in JavaScript.",
      "Built the Python backend logic for serving listings and handling registrations.",
      "Implemented the administrator management workflow for publishing and editing listings.",
      "Tested the interface across mobile, tablet and desktop widths.",
    ],
    architecture: [
      "Browser UI — HTML5 / CSS3 / Bootstrap / JavaScript",
      "Search, filtering & registration logic",
      "Python backend",
      "Structured data store",
    ],
    implementation: [
      {
        area: "Frontend architecture",
        detail:
          "Bootstrap grid with a reusable listing-card pattern, progressive enhancement on top of semantic HTML, and JavaScript modules for search, filtering and the registration form.",
      },
      {
        area: "Search & filtering",
        detail:
          "Listings are filtered on the client by keyword and category so results update as the student types, with no full page reload between refinements.",
      },
      {
        area: "Backend",
        detail:
          "Python handles serving listing data, receiving registrations and validating submitted fields before they are stored.",
      },
      {
        area: "Administration",
        detail:
          "A management view for creating, editing and removing listings, keeping content maintenance separate from the public browsing experience.",
      },
      {
        area: "Responsive & accessible interface",
        detail:
          "Single-column layout on small screens, multi-column catalogue on larger screens, labelled form controls and keyboard-reachable interactive elements.",
      },
      {
        area: "Deployment",
        detail:
          "Environment configuration kept out of source control; static assets and backend served from a configured production environment.",
      },
    ],
    decisions: [
      {
        challenge:
          "Students needed to narrow a long list of mixed opportunities quickly.",
        decision:
          "Give every listing the same structured fields and category, then filter and search on the client so refinements feel immediate instead of requiring a page load each time.",
      },
      {
        challenge:
          "Content would go stale if updates required editing markup by hand.",
        decision:
          "Separate content from presentation and provide an administrator management view, so listings can be published and retired without touching the codebase.",
      },
    ],
    screenshots: [
      {
        src: "/images/jkuat-portal/dashboard.png",
        alt: "Opportunities dashboard of the JKUAT Events & Opportunities Portal",
        caption: "Dashboard — desktop",
      },
      {
        src: "/images/jkuat-portal/opportunities.png",
        alt: "Filtered opportunity listings view",
        caption: "Listings with search and filtering",
      },
      {
        src: "/images/jkuat-portal/mobile.png",
        alt: "Mobile view of the opportunity listings",
        caption: "Mobile interface",
      },
    ],
  },
  {
    slug: "academic-management-system",
    title: "Academic Management Web Application",
    category: "Full-Stack Web Application",
    tagline:
      "A database-driven application for students, courses, departments, registrations and academic records.",
    description:
      "A database-driven application designed to organize students, courses, departments, registrations, and academic records behind a REST API and a responsive React interface.",
    tech: ["React", "Python", "PostgreSQL", "REST API", "JavaScript"],
    capabilities: [
      "Relational PostgreSQL database",
      "REST API architecture",
      "Authentication",
      "CRUD operations",
      "Form validation",
      "Search, filtering and pagination",
      "Responsive interface",
      "Student and administrator workflows",
    ],
    links: {
      github: null,
      demo: null,
      pdf: "/documents/academic-management-system.pdf",
    },
    cover: "/images/academic-system/dashboard.png",
    overview:
      "The application manages the core academic entities of an institution — students, departments, courses, registrations and records — with separate workflows for students and administrators. A React frontend talks to a Python REST API backed by PostgreSQL.",
    problem:
      "Academic information tends to live in spreadsheets and disconnected documents. The same student appears in several files, course registrations are recorded by hand, and there is no single trustworthy answer to questions like which courses a student is registered for this term.",
    solution:
      "Model each entity once in a relational schema and connect them with explicit relationships, then expose them through a REST API that both workflows consume. Records are created and edited through validated forms, and lists support search, filtering and pagination so the interface stays usable as the data grows.",
    role: [
      "Designed the relational PostgreSQL schema for users, students, departments, courses, registrations and records.",
      "Built the Python REST API, including route structure, validation and error responses.",
      "Implemented authentication and authorization separating student and administrator access.",
      "Built the React frontend: routing, forms, list views, search, filtering and pagination.",
      "Implemented CRUD workflows end to end, from form submission to database write.",
      "Debugged frontend, backend, database and integration issues, and deployed the application.",
    ],
    architecture: [
      "React frontend",
      "REST API",
      "Python backend",
      "PostgreSQL",
    ],
    implementation: [
      {
        area: "Frontend architecture",
        detail:
          "React components split by concern — list views, detail views and forms — with shared request helpers so API calls, loading states and error handling stay consistent.",
      },
      {
        area: "Backend architecture",
        detail:
          "A Python REST API with resource-oriented endpoints for each entity, request validation before any write, and predictable status codes and error payloads.",
      },
      {
        area: "Database design",
        detail:
          "Normalized PostgreSQL tables with foreign keys between students, departments, courses, registrations and records, plus constraints that prevent duplicate registrations.",
      },
      {
        area: "Authentication",
        detail:
          "Login issues a session credential used on subsequent requests; endpoints check both authentication and role before returning or modifying data.",
      },
      {
        area: "API communication",
        detail:
          "The frontend consumes JSON over REST, with query parameters for search, filtering and pagination handled by the backend rather than in the browser.",
      },
      {
        area: "Validation",
        detail:
          "Validation on both sides: immediate field-level feedback in the forms, and authoritative validation in the API so invalid data cannot reach the database.",
      },
      {
        area: "Deployment",
        detail:
          "Database credentials and secrets supplied through environment variables; frontend built as static assets and served alongside the API in a configured production environment.",
      },
    ],
    decisions: [
      {
        challenge:
          "Managing related academic records while keeping the database structure maintainable.",
        decision:
          "Use relational PostgreSQL tables with defined relationships rather than storing academic information in a single structure.",
      },
      {
        challenge:
          "List views became slow and unreadable as the number of records grew.",
        decision:
          "Move search, filtering and pagination into the API so the browser only ever receives one page of results.",
      },
      {
        challenge:
          "Client-side validation alone could not guarantee data integrity.",
        decision:
          "Validate in the forms for usability and again in the API for correctness, treating the backend as the single authority.",
      },
    ],
    screenshots: [
      {
        src: "/images/academic-system/dashboard.png",
        alt: "Administrator dashboard of the academic management application",
        caption: "Administrator dashboard",
      },
      {
        src: "/images/academic-system/records.png",
        alt: "Academic records list with search and pagination",
        caption: "Academic records — search, filtering, pagination",
      },
    ],
  },
];

export const certifications: string[] = [
  // Add real certifications here, e.g. "Certification name — Issuer, Year".
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
