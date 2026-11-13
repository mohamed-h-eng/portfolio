export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Full-Stack MERN' | 'Fintech & Security' | 'AI & Automation' | 'Database & Frontend';
  period: string;
  featured: boolean;
  liveUrl?: string;
  repoUrl: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  summary: string;
}

export interface CapabilityGroup {
  number: string;
  title: string;
  items: string[];
}

export interface TechItem {
  id: string;
  name: string;
  tag: string;
}

export const PROFILE = {
  welcomeText: 'Welcome to my world!',
  tabInfo: 'mohamed.info',
  tabWork: 'work.done',
  name: 'Mohamed Hany',
  role: 'Full-Stack Developer',
  statusText: 'Open to new work',
  location: 'Cairo, Egypt',
  timezone: 'Africa/Cairo',
  experienceLabel: '3+ years of experience',
  languagesLabel: 'Arabic, English',
  email: 'mohamedhany1615@gmail.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/57901178?v=4',
  avatarFallbackUrl: 'https://github.com/mohamed-h-eng.png',
  cvPath: '/Mohamed-Hany-Resume.pdf',
  cvDownloadName: 'Mohamed-Hany-Full-Stack-Developer-Resume.pdf',
  githubUrl: 'https://github.com/mohamed-h-eng',
  linkedinUrl: 'https://www.linkedin.com/in/mohamed-h-eng',
  sinceYear: '2023',
  sidebarBio:
    "I'm a Full-Stack Developer building clean, reliable web applications with React, Node.js, Express, and MongoDB — with a sharp focus on secure APIs and data integrity.",
  heroTitleWhite: 'Full-Stack Software',
  heroTitleMuted: 'Developer',
  heroSubtitle:
    'Focused on secure APIs, relational & document data integrity, and responsive React interfaces — I build end-to-end web platforms and AI-driven workflows that turn complex requirements into dependable software.',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nefru',
    title: 'Nefru — Egypt Tour Guide Platform',
    shortTitle: 'Nefru — Tour Guide Platform',
    category: 'Full-Stack MERN',
    period: 'Aug 2026',
    featured: true,
    liveUrl: 'https://nefru.vercel.app',
    repoUrl: 'https://github.com/mohamed-h-eng/Nefru',
    summary:
      'Full-stack tourism and trip-booking platform connecting travelers with verified professional tour guides across Egypt.',
    highlights: [
      'Discovery engine for browsing curated Egyptian itineraries by category, landmark, or local guide.',
      'Dedicated role dashboards for Tourists (bookings & trip history) and Guides (trip listings & ratings).',
      'Layered Node.js, Express, and Mongoose backend separating routes, controllers, business services, and auth middleware.',
    ],
    stack: ['React 19', 'Vite', 'React Router 7', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'paychat',
    title: 'PayChat — P2P Ledger Digital Wallet',
    shortTitle: 'PayChat — P2P Digital Wallet',
    category: 'Fintech & Security',
    period: 'Jan – Feb 2026',
    featured: true,
    repoUrl: 'https://github.com/mohamed-h-eng/PayChat',
    summary:
      'Peer-to-peer digital wallet and real-time chat system engineered for concurrent transaction integrity and atomic transfers.',
    highlights: [
      'Designed a double-entry ledger with atomic MongoDB transactions to prevent balance inconsistencies under concurrency.',
      'Implemented IBAN-based transfers, configurable spending limits, JWT authentication, token blacklisting, and RBAC.',
      'Deployed a 20+ endpoint RESTful API with Joi schema validation alongside live Socket.IO peer messaging.',
    ],
    stack: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
  },
  {
    id: 'quizrush',
    title: 'QuizRush — AI Batch Quiz Platform',
    shortTitle: 'QuizRush — AI Quiz Engine',
    category: 'AI & Automation',
    period: 'May – Jun 2026',
    featured: true,
    repoUrl: 'https://github.com/mohamed-h-eng/QuizRush',
    summary:
      'AI-powered MERN assessment platform transforming raw text and uploaded documents into shareable, step-by-step interactive quizzes.',
    highlights: [
      'Architected the Rush batch-generation feature as an independently hosted n8n AI workflow decoupled from the core backend.',
      'Built a document-ingestion and chunking pipeline to process large files cleanly within LLM context-window limits.',
      'Interactive one-question-at-a-time player (/quiz/share/:slug) with progress bar, review mode, and public share links.',
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'n8n AI'],
  },
  {
    id: 'cms',
    title: 'Event CMS — Role-Based Ticketing',
    shortTitle: 'Event CMS — Ticketing System',
    category: 'Full-Stack MERN',
    period: 'May 2026',
    featured: true,
    repoUrl: 'https://github.com/mohamed-h-eng/CMS',
    summary:
      'Full-stack Event Content Management System separating Admin event/ticket orchestration from public attendee discovery.',
    highlights: [
      'Role-based access control separating Admin event CRUD and ticket management from public attendee browsing.',
      'Clean Express architecture structured into dedicated route, controller, service, and Mongoose model layers.',
      'Responsive React client consuming REST endpoints for live event publishing and ticket tier display.',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
  },
  {
    id: 'ewallet',
    title: 'E-Wallet — Money Transfer & Chat',
    shortTitle: 'E-Wallet — Transfer & Chat',
    category: 'Fintech & Security',
    period: 'Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/mohamed-h-eng/E-wallet',
    summary:
      'Full-stack wallet environment supporting validated peer fund transfers, filtered transaction history, and admin account governance.',
    highlights: [
      'Atomic fund transfers with balance verification and self-transfer protection.',
      'Admin control surface to audit global transactions, adjust balances, and activate or block user accounts.',
      'Integrated user-to-user messaging alongside sent/received transaction filtering.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
  },
  {
    id: 'hospital-sql',
    title: 'Hospital Management System — SQL',
    shortTitle: 'Hospital Management SQL',
    category: 'Database & Frontend',
    period: 'Jul 2026',
    featured: false,
    repoUrl: 'https://github.com/mohamed-h-eng/Hospital-Management-System-SQL',
    summary:
      'Normalized MySQL relational database digitizing patient admissions, doctor shifts, prescriptions, lab orders, and financial billing.',
    highlights: [
      'Relational schema enforcing primary/foreign key constraints across patients, departments, appointments, rooms, and invoices.',
      'Complex JOIN, aggregation, and reporting queries powering financial summaries and clinical record lookups.',
    ],
    stack: ['MySQL', 'SQL', 'Database Design', 'DDL & DML'],
  },
  {
    id: 'e-plant',
    title: 'Paradise Nursery — e-Plant Storefront',
    shortTitle: 'Paradise Nursery Storefront',
    category: 'Database & Frontend',
    period: 'Jun 2026',
    featured: false,
    repoUrl: 'https://github.com/mohamed-h-eng/e-plantShopping',
    summary:
      'Interactive botanical e-commerce web app with categorized plant collections and Redux Toolkit shopping cart state.',
    highlights: [
      'Centralized Redux Toolkit slices managing dynamic cart quantities, item removal, and live order totals.',
      'Multi-category catalog browsing across Air Purifying, Aromatic, and Insect-Repellent plant lines.',
    ],
    stack: ['React', 'Redux Toolkit', 'JavaScript', 'CSS3'],
  },
  {
    id: 'csrf-ssrf',
    title: 'CSRF & SSRF Security Hardening Lab',
    shortTitle: 'CSRF & SSRF Security Lab',
    category: 'Fintech & Security',
    period: 'Jun 2026',
    featured: false,
    repoUrl: 'https://github.com/mohamed-h-eng/-CSRF_-_SSRF_Demo_App',
    summary:
      'Backend security reference app demonstrating attack vectors and production defenses against CSRF and SSRF exploits.',
    highlights: [
      'Hardened Express endpoints using Helmet security headers, rate limiting, cookie-scoped JWT verification, and outbound URL validation.',
    ],
    stack: ['Node.js', 'Express', 'JWT', 'Helmet', 'Rate Limiting', 'EJS'],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    period: 'Sep 2026 - Nov 2026',
    role: 'Full-Stack Developer (Training)',
    organization: 'Egyptian Space Agency (EgSA)',
    summary:
      'Contributed to an internal AI engineering platform — integrating React interfaces with backend services, external AI model providers, permissions, and persistent chat storage.',
  },
  {
    period: 'Dec 2025 - Sep 2026',
    role: 'Software Development Trainee',
    organization: 'Digilians Initiative (NTI)',
    organizationUrl: 'https://digilians.gov.eg/',
    summary:
      'Intensive Associate-level track covering full-stack web engineering, relational & NoSQL databases, cloud/DevOps, AI workflow automation, and secure coding.',
  },
  {
    period: '2023 - present',
    role: 'Independent Full-Stack Developer',
    organization: 'MERN & AI Web Systems',
    summary:
      'Designing and shipping end-to-end web applications including Nefru, PayChat double-entry wallet, QuizRush n8n batch engine, and role-based CMS platforms.',
  },
  {
    period: '2023 - 2024',
    role: 'Software Engineering Program',
    organization: 'ALX Africa',
    summary:
      'Built strong systems engineering fundamentals across low-level C programming, Linux shell automation, Git workflows, algorithms, and web architecture.',
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    number: '1',
    title: 'Frontend Engineering',
    items: [
      'React 19 & Vite SPAs',
      'TypeScript & modern ES6+',
      'Tailwind CSS & responsive layouts',
      'Component & state architecture',
      'Role-aware client routing',
      'Clean, accessible UI interactions',
    ],
  },
  {
    number: '2',
    title: 'Backend & Secure APIs',
    items: [
      'Node.js & Express RESTful APIs',
      'JWT auth & token blacklisting',
      'Role-based access control (RBAC)',
      'Route / Controller / Service design',
      'Real-time Socket.IO messaging',
      'Input validation & API hardening',
    ],
  },
  {
    number: '3',
    title: 'Databases, AI & Cloud',
    items: [
      'MongoDB & Mongoose modeling',
      'MySQL & relational SQL schemas',
      'Double-entry & atomic operations',
      'n8n AI workflow orchestration',
      'Document ingestion & chunking',
      'AWS Cloud & Git/GitHub CI flows',
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  { id: 'react', name: 'React', tag: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', tag: 'Language' },
  { id: 'javascript', name: 'JavaScript', tag: 'Language' },
  { id: 'nodejs', name: 'Node.js', tag: 'Runtime' },
  { id: 'express', name: 'Express.js', tag: 'Backend' },
  { id: 'mongodb', name: 'MongoDB', tag: 'NoSQL DB' },
  { id: 'mysql', name: 'MySQL', tag: 'SQL DB' },
  { id: 'tailwind', name: 'Tailwind CSS', tag: 'Styling' },
  { id: 'aws', name: 'AWS', tag: 'Cloud' },
  { id: 'git', name: 'Git & GitHub', tag: 'Workflow' },
  { id: 'n8n', name: 'n8n & AI', tag: 'Automation' },
  { id: 'security', name: 'JWT & RBAC', tag: 'Security' },
];

export const INDEX_SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About me' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'What I do' },
  { id: 'stack', label: 'Tech stack' },
  { id: 'contact', label: 'Contact me' },
] as const;
