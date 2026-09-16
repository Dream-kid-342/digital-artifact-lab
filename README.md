# Professional Portfolio

# BUILD A PROFESSIONAL, ANIMATED SOFTWARE DEVELOPER PORTFOLIO

Build a **production-quality personal portfolio website** for:

**MITCHEL NDINDA MARTIN**
**Software Developer | Full-Stack Web Developer | Computer Science Student**

The goal is to create a portfolio that looks like it was built by a serious software developer, not a generic portfolio template.

The site must be **responsive, fast, accessible, visually polished, animation-rich without being excessive, and technically realistic**.

Do not invent technologies, libraries, APIs, services, projects, achievements, clients, statistics, or professional experience that are not provided.

If something is not known, create a clearly marked placeholder that I can replace later.

---

# 1. CORE DESIGN DIRECTION

Create a modern professional visual identity somewhere between:

* premium software engineering portfolio
* modern technology company website
* developer case-study platform
* clean editorial portfolio

Do NOT make it:

* completely black
* neon cyberpunk
* overly futuristic
* covered in glowing effects
* extremely minimalist to the point of looking empty
* filled with unnecessary animations
* a template with giant gradients everywhere

The website should have **depth and personality**, but remain professional.

### Color direction

Use a balanced palette such as:

* deep navy / charcoal for primary sections
* off-white or very light gray for readable surfaces
* muted blue as the primary accent
* subtle cyan/indigo accents where appropriate
* dark text on light sections
* light text on dark sections

The site should alternate naturally between light and darker sections where appropriate.

Do not make the entire website dark.

Avoid excessive gradients.

Avoid bright saturated colors.

Use color primarily for:

* buttons
* links
* active navigation states
* small highlights
* icons
* project tags
* subtle background effects

The result should feel professional enough for recruiters, clients, internships, software companies, and technical collaborators.

---

# 2. TECHNOLOGY REQUIREMENTS

Use a realistic and maintainable technology stack.

Preferred stack:

### Frontend

* React
* TypeScript
* Vite
* HTML5
* CSS3
* standard React components

### Animation

Use **Framer Motion / Motion for React** only if needed and use it properly.

Animations should include:

* page entrance animations
* section reveal animations
* navigation transitions
* project card interactions
* subtle hover effects
* image transitions
* scroll-based reveals

Do not animate every element independently.

### Icons

Use a real established icon library such as:

* Lucide React

Do not create fake icon package names.

### Styling

Use either:

* normal CSS / CSS Modules

or

* Tailwind CSS if it is already configured and appropriate.

Do not introduce unnecessary styling frameworks.

### Backend

Only introduce a backend if a real backend feature is actually required.

Do not create a fake backend simply to make the project appear more advanced.

For a contact form, use a real service or a small backend API that can actually process submissions.

---

# 3. IMPORTANT DEVELOPMENT RULE

Do not use imaginary libraries.

Do not use:

* fake npm packages
* invented APIs
* fictional animation libraries
* nonexistent UI frameworks
* fake AI services
* fake deployment platforms
* fake contact APIs

Before adding a dependency, make sure it is a real, maintained package that works with the chosen React/Vite/TypeScript setup.

Keep dependencies minimal.

The website should be understandable by another developer who opens the repository.

---

# 4. WEBSITE STRUCTURE

Create these main sections/pages:

1. Home
2. About
3. Skills
4. Experience
5. Projects
6. Project Details
7. Resume
8. Contact

Use either:

* a single-page application with section navigation

or

* React Router for dedicated project/detail pages.

For the project case studies, I strongly prefer dedicated routes such as:

```text
/
 /about
 /projects
 /projects/jkuat-events-portal
 /projects/academic-management-system
 /resume
 /contact
```

The navigation should feel like a real website rather than a long scrolling template.

---

# 5. NAVIGATION

Create a professional sticky navigation bar.

Desktop:

```text
MITCHEL NDINDA MARTIN

About   Skills   Experience   Projects   Resume   Contact
```

Include a strong CTA:

**Let's Talk**

Navigation requirements:

* transparent or subtly blurred when at the top
* becomes solid/slightly elevated after scrolling
* active section/page indicator
* smooth transitions
* mobile hamburger menu
* accessible keyboard navigation
* proper focus states
* menu closes after selecting a mobile navigation item

Do not make the navigation oversized.

---

# 6. HERO SECTION

The hero is the first major impression.

Create a split-screen composition.

LEFT:

Small label:

```text
SOFTWARE DEVELOPER · NAIROBI, KENYA
```

Large heading:

```text
Building software
that solves real problems.
```

Supporting text:

```text
I'm Mitchel Ndinda Martin, a Computer Science student and
full-stack software developer focused on building practical,
responsive, and maintainable digital products.
```

Buttons:

**View My Work**

**Download Resume**

Secondary text link:

**Get in Touch →**

RIGHT:

A professional portrait/photo area.

The image should be presented professionally, not as a circular LinkedIn-style profile picture.

Use a rectangular or slightly rounded portrait frame with:

* subtle border
* tasteful shadow
* small decorative elements
* restrained animation

Allow the actual image to be replaced easily through:

```text
/public/images/profile.jpg
```

Do not generate a fake person.

If no photo is available, use a clearly marked placeholder.

---

# 7. HERO ANIMATION

The hero should have a sophisticated entrance sequence.

Example:

1. navigation fades in
2. small location/role label appears
3. heading reveals smoothly
4. description follows
5. buttons appear
6. portrait slides/fades into position
7. subtle background movement begins

Keep animation around 600–1000ms per major transition.

Do not make the page feel slow.

Respect:

```text
prefers-reduced-motion
```

Users who disable animation should still get a polished experience.

---

# 8. PROFESSIONAL INTRO / ABOUT SECTION

Create an About section that explains the developer without sounding like a generic AI-generated biography.

Heading:

```text
About Me
```

Content should communicate:

* Computer Science student at JKUAT
* 4+ years of hands-on programming experience
* full-stack development focus
* interest in solving practical problems
* experience across frontend, backend, databases, APIs, and deployment
* continuous technical development

Do not use exaggerated phrases such as:

* "visionary developer"
* "coding ninja"
* "digital wizard"
* "passionate tech guru"
* "world-class developer"

Keep it credible.

Include a compact timeline or technical journey:

```text
2022
Started building software projects

2023–2024
Expanded into full-stack web development

2025+
Building larger practical applications and exploring
AI/ML, automation, cybersecurity and cloud technologies
```

Only use dates that are actually supported by the CV.

---

# 9. SKILLS SECTION

Do NOT create percentage bars.

Do NOT write:

```text
Python 95%
JavaScript 90%
React 85%
```

Those numbers are arbitrary and unprofessional.

Instead create grouped technical capabilities.

### Programming

Python
Java
JavaScript
C++
C#
SQL

### Frontend

React
HTML5
CSS3
Bootstrap
Responsive Design
DOM Manipulation

### Backend

Python
Flask
Django
Java
REST APIs
Authentication
API Integration

### Databases

PostgreSQL
MySQL
SQLite
Relational Database Design
SQL
CRUD

### Software Engineering

Object-Oriented Programming
Data Structures & Algorithms
Debugging
Testing
Software Architecture
Git

Each skill can have a small icon or clean typographic treatment.

Keep the layout compact.

---

# 10. EXPERIENCE SECTION

Create a professional timeline.

## SOFTWARE DEVELOPER

**Independent Web & Software Developer · Remote**

**2022 – Present**

Description:

```text
Designing and developing personal, academic, and independent
software projects with a focus on practical web applications,
backend services, database systems, and reliable user experiences.
```

Accomplishments should be presented as meaningful engineering work.

Use bullets such as:

* Developed full-stack applications from initial requirements and interface design through backend implementation, database integration, testing, and deployment.
* Designed relational PostgreSQL database structures for users, courses, departments, registrations, and academic records.
* Developed REST APIs for communication between frontend applications, backend services, and databases.
* Implemented authentication, authorization, validation, CRUD workflows, search, filtering, and pagination.
* Built responsive interfaces using React, JavaScript, HTML, CSS, and Bootstrap.
* Diagnosed frontend, backend, database, and integration issues during development.
* Used Git and GitHub for source control and organized development workflows.
* Deployed applications and configured environments for production use.

Make these visually strong but not oversized.

---

# 11. PROJECTS SECTION

This should be one of the **most important sections of the portfolio**.

Do not simply show:

```text
Project Name
React
Python
PostgreSQL
```

Instead, every project card should communicate:

**Problem → Solution → Technology → Result**

Create large project cards with:

* project screenshot
* project title
* short description
* technology tags
* project category
* GitHub button if available
* Live Demo button if available
* Case Study button

Example:

---

## JKUAT EVENTS & OPPORTUNITIES PORTAL

**Full-Stack Web Application**

A platform designed to help JKUAT students discover events, internships, scholarships, competitions, and technology opportunities in one place.

Technology:

```text
HTML5
CSS3
JavaScript
Bootstrap
Python
```

Key capabilities:

* searchable opportunity listings
* event registration
* administrator management
* responsive interface
* filtering
* structured content management

Buttons:

**View Case Study →**

**Live Demo →**

**GitHub →**

Do not show a button if the corresponding link does not exist.

---

# 12. ACADEMIC MANAGEMENT SYSTEM PROJECT

Create a second major project card.

## ACADEMIC MANAGEMENT WEB APPLICATION

**Full-Stack Web Application**

A database-driven application designed to organize students, courses, departments, registrations, and academic records.

Technology:

```text
React
Python
PostgreSQL
REST API
JavaScript
```

Key capabilities:

* relational PostgreSQL database
* REST API architecture
* authentication
* CRUD operations
* form validation
* search
* filtering
* pagination
* responsive interface
* student and administrator workflows

Buttons:

**View Case Study →**

**Live Demo →**

**GitHub →**

Again, only display links that actually exist.

---

# 13. PROJECT CASE STUDY PAGES

This is extremely important.

When the user clicks:

**View Case Study**

open a dedicated project page.

Do not simply enlarge the project card.

The case study should contain:

### Project Overview

Explain what the project does.

### Problem

Explain what problem the application was intended to solve.

### Solution

Explain how the application addresses the problem.

### My Role

Clearly explain what was personally developed.

### Architecture

Show a simple architecture diagram.

Example:

```text
React Frontend
       ↓
REST API
       ↓
Python Backend
       ↓
PostgreSQL
```

Use an actual SVG/CSS diagram or a simple visual diagram.

Do not use a random third-party diagram library unless necessary.

### Key Features

Show important functionality.

### Technical Implementation

Explain:

* frontend architecture
* backend architecture
* database design
* authentication
* API communication
* validation
* deployment

### Challenges & Decisions

Include realistic engineering decisions.

For example:

```text
Challenge:
Managing related academic records while keeping the
database structure maintainable.

Decision:
Use relational PostgreSQL tables with defined relationships
rather than storing academic information in a single structure.
```

### Screenshots

Create a gallery showing:

* desktop interface
* mobile interface
* important feature screens
* dashboard
* forms
* database/API architecture where appropriate

Images should be stored locally.

---

# 14. PROJECT PDF DOCUMENTATION

The project section MUST support PDF documents.

Each project can optionally contain:

```text
/project-documents/
```

For example:

```text
public/
 ├── images/
 │    ├── profile.jpg
 │    ├── jkuat-portal/
 │    │    ├── dashboard.png
 │    │    ├── opportunities.png
 │    │    └── mobile.png
 │    └── academic-system/
 │         ├── dashboard.png
 │         └── records.png
 │
 └── documents/
      ├── jkuat-events-portal.pdf
      └── academic-management-system.pdf
```

On the project page create:

**Project Documentation**

```text
[ View PDF ]    [ Download PDF ]
```

The browser should be able to open the PDF.

Use a normal HTML link to the PDF.

Do not build a complicated custom PDF viewer unless there is a real reason.

The PDF should open in a new browser tab.

---

# 15. RESUME PAGE

Create a dedicated Resume page.

Display:

```text
MITCHEL NDINDA MARTIN
Software Developer | Full-Stack Web Developer
```

Include:

* professional summary
* technical skills
* experience
* selected projects
* education
* certifications

Buttons:

**Download PDF Resume**

**Print Resume**

The PDF should be an actual file supplied by the developer.

Do not generate fake PDF content dynamically unless specifically requested.

Use:

```text
/public/documents/Mitchel-Ndinda-Martin-Resume.pdf
```

---

# 16. CONTACT PAGE

The Contact page should feel complete, not like a form thrown at the bottom of the page.

Create a two-column layout.

LEFT:

```text
Let's build something useful.

Have a project, opportunity, collaboration,
or technical question?

I'd be happy to hear from you.
```

Contact information:

**Email**
[mitchndinda@gmail.com](mailto:mitchndinda@gmail.com)

**Phone**
0741 453 093

**Location**
Nairobi, Kenya

Social links:

* GitHub
* LinkedIn
* Portfolio if applicable

RIGHT:

Create a professional contact form.

Fields:

```text
Name
Email
Subject
Message
```

Button:

**Send Message**

---

# 17. CONTACT FORM BEHAVIOR

Do not create a fake form that displays:

```text
Message sent successfully!
```

without actually sending anything.

The form must either:

1. connect to a real email/contact service, or
2. connect to a real backend endpoint.

If no backend/service credentials are available, implement the frontend validation and clearly structure the integration point so it can be connected later.

Validation:

* name required
* valid email required
* subject required
* message required
* useful error messages
* loading state
* success state
* failure state

Never expose private API keys in frontend source code.

---

# 18. FOOTER

Create a clean footer.

Include:

```text
MITCHEL NDINDA MARTIN

Software Developer · Nairobi, Kenya

GitHub
LinkedIn
Email

© 2026 Mitchel Ndinda Martin
```

Add a small:

**Back to top ↑**

Do not make the footer huge.

---

# 19. ANIMATION SYSTEM

Animations should feel intentional.

Implement:

### Page transitions

Subtle fade/slide when changing routes.

### Scroll reveal

Sections should reveal as the user scrolls.

Use subtle movement:

```text
opacity: 0 → 1
translateY: 20px → 0
```

Avoid dramatic movements.

### Project cards

On hover:

* slight elevation
* image scale around 1.02–1.04
* border/accent transition
* arrow movement

Do NOT make cards rotate.

### Buttons

Use subtle:

* background transition
* arrow movement
* shadow/elevation

### Navigation

Animate:

* mobile menu
* active indicator
* scroll state

### Images

Use subtle reveal effects.

Do not add constant animations to everything.

---

# 20. BACKGROUND DESIGN

Use subtle visual depth.

Possible elements:

* soft radial gradients
* faint grid
* very subtle dots
* blurred geometric shapes
* thin lines
* subtle noise texture

Keep opacity low.

The background should never compete with the content.

Avoid:

* moving star fields
* excessive particles
* giant glowing circles
* Matrix rain
* hacker code constantly falling
* excessive glassmorphism

This is a professional developer portfolio, not a gaming landing page.

---

# 21. RESPONSIVENESS

The website MUST work properly on:

### Mobile

320px+

### Tablet

768px+

### Desktop

1024px+

### Large desktop

1440px+

Test:

* navigation
* hero
* portrait
* project cards
* project galleries
* tables/architecture diagrams
* forms
* footer
* PDF buttons

No horizontal scrolling.

Text must remain readable.

Buttons must remain easy to tap.

Images must not overflow.

---

# 22. ACCESSIBILITY

Implement:

* semantic HTML
* proper heading hierarchy
* alt text for meaningful images
* keyboard navigation
* visible focus states
* sufficient color contrast
* accessible form labels
* accessible mobile navigation
* reduced-motion support
* buttons for actions
* links for navigation

Do not use `

` elements for everything.

---

# 23. PERFORMANCE

Keep the website fast.

Use:

* optimized images
* lazy loading where appropriate
* responsive images where appropriate
* minimal dependencies
* code splitting where useful
* compressed assets
* no unnecessary third-party scripts

Do not load huge animation libraries for simple CSS effects.

Do not load a library simply because it looks impressive.

---

# 24. SEO

Add proper:

```text
@gmail.com](mailto:mitchndinda@gmail.com)**

Phone:

**0741 453 093**

Education:

**Jomo Kenyatta University of Agriculture and Technology (JKUAT)**

Degree:

**Bachelor of Science in Computer Science**

Expected graduation:

**2027**

Experience:

**Independent Web & Software Developer**

Period:

**2022 – Present**

Technical areas:

Python
Java
JavaScript
C++
C#
SQL
HTML5
CSS3
React
Bootstrap
Flask
Django
PostgreSQL
MySQL
SQLite
REST APIs
Git
GitHub
Docker
Linux

Projects:

### JKUAT Events & Opportunities Portal

Platform for students to discover:

* university events
* internships
* scholarships
* competitions
* technology opportunities

Features:

* JavaScript search
* filtering
* event registration
* administrator management
* responsive interface
* accessibility/usability considerations

### Academic Management Web Application

Manages:

* students
* courses
* departments
* registrations
* academic records

Features:

* PostgreSQL database
* REST API
* authentication
* CRUD operations
* validation
* search
* filtering
* pagination
* responsive frontend

---

# 30. DO NOT INVENT

This is extremely important.

Do NOT invent:

* company employment
* client names
* salaries
* user counts
* revenue
* awards
* certifications
* GitHub stars
* number of users
* performance percentages
* artificial metrics
* fake testimonials
* fake reviews
* fake employers
* fake project statistics

If a metric is not provided, do not create one.

A realistic portfolio is better than an impressive-looking fake one.

---

# 31. FINAL VISUAL STANDARD

Before considering the project finished, compare the result against the following question:

> Would this portfolio look credible if a recruiter from a serious software company opened it?

It should feel:

**Professional**
**Technical**
**Modern**
**Human**
**Confident**
**Responsive**
**Fast**
**Well-engineered**

It should NOT feel:

**Template-like**
**AI-generated**
**Overly dark**
**Neon**
**Childish**
**Over-animated**
**Full of buzzwords**

---

# 32. FINAL QUALITY CHECK

Before finishing:

### Functionality

* [ ] All navigation links work
* [ ] Mobile menu works
* [ ] Project routes work
* [ ] Project details work
* [ ] PDF links work
* [ ] Resume download works
* [ ] Contact form validates correctly
* [ ] External links work
* [ ] Missing links are hidden rather than broken

### Responsive

* [ ] 320px mobile
* [ ] 375px mobile
* [ ] 768px tablet
* [ ] 1024px laptop
* [ ] 1440px desktop

### Accessibility

* [ ] Keyboard navigation
* [ ] Focus states
* [ ] Semantic HTML
* [ ] Image alt text
* [ ] Form labels
* [ ] Reduced motion

### Performance

* [ ] Images optimized
* [ ] No unnecessary dependencies
* [ ] No console errors
* [ ] No broken imports
* [ ] No unused packages
* [ ] No fake APIs
* [ ] No exposed secrets

### Code quality

* [ ] TypeScript types are clean
* [ ] Components are reusable
* [ ] Project data is separated from UI
* [ ] No giant component containing the entire website
* [ ] No duplicated project markup
* [ ] Clear folder structure
* [ ] Environment variables used for private configuration

---

# 33. DELIVERABLE

Produce the complete working portfolio.

Include:

```text
package.json
src/
public/
README.md
vite.config.*
tsconfig.*
```

The README must explain:

1. how to install dependencies
2. how to run locally
3. how to build for production
4. where to replace the profile photo
5. where to replace project screenshots
6. where to add project PDFs
7. where to update project information
8. where to configure the contact form
9. how to deploy

Use normal commands such as:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Do not invent commands that do not exist.

---

# FINAL INSTRUCTION

Take your time designing the interface before writing the implementation.

Do not rush into generating components.

First establish:

* visual hierarchy
* color system
* typography
* spacing
* navigation
* page structure
* project presentation
* responsive behavior
* animation system

Then implement the website cleanly.

The final result should look like a **real software developer's professional portfolio**, with the projects being the centerpiece of the site and the design supporting the developer's credibility rather than distracting from it.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/36761e4d-0a17-4e74-be0d-fd0cb8ac4e28).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
