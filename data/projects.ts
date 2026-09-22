import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "enterprise-document-tracking-system",
    title: "Enterprise Document Tracking System",
    role: "Full-Stack Developer",
    period: "June 2026 – July 2026",
    summary:
      "A document tracking system for managing paperwork across multiple departments, with role-based access and full audit visibility. username: admin/password: password123 ",
    highlights: [
      "JWT authentication and role-based access control across departments",
      "Document CRUD, routing between departments, and file attachments",
      "Activity logging for accountability and audit trails",
      "Search, filtering, pagination, analytics dashboards, and CSV/PDF export",
    ],
    stack: ["Node.js", "Express.js", "React", "MySQL", "Tailwind CSS"],
    category: "Full-Stack",
    image: "/images/projects/edts/cover.jpg",
    repoUrl: "https://github.com/JohanBuenaventura/dts-system",
    liveUrl: "https://edts-demo.vercel.app/",
    featured: true,
  },
  {
    slug: "pokemon-predictor",
    title: "Pokémon Predictor",
    role: "Django Developer",
    period: "April 2026 – May 2026",
    summary:
      "A machine learning web app that predicts whether a Pokémon is legendary and estimates its total base stats from its characteristics.",
    highlights: [
      "ML models built with scikit-learn, trained on Pokémon stat data",
      "Data handling and preprocessing with pandas, models persisted with joblib",
      "User input form that feeds live predictions back through the web app",
    ],
    stack: ["Python", "Django", "SQLite", "scikit-learn", "pandas"],
    category: "Python / ML",
    image: "/images/projects/pokemon-predictor/cover.jpg",
    repoUrl: "https://github.com/Paoxyz/REPLACE_ME_pokemon-predictor",
    liveUrl: "https://demoforpredictor.vercel.app/",
    featured: true,
  },
  {
    slug: "digital-event-calendar-system",
    title: "Digital Event Calendar System",
    role: "Full-Stack Developer",
    period: "Feb 2026 – May 2026",
    summary:
      "A digital calendar deployed to streamline academic and administrative event scheduling for a school.",
    highlights: [
      "Automated holiday synchronization",
      "Dynamic search filters across events",
      "Automated PDF report generation",
      "Off-white interface designed for daily use by school staff",
    ],
    stack: ["Full-Stack", "PDF Generation", "Search & Filtering"],
    category: "Full-Stack",
    image: "/images/projects/event-calendar/cover.jpg",
    repoUrl: "https://github.com/Paoxyz/REPLACE_ME_digital-event-calendar-system",
    liveUrl: "https://calendar-preview.vercel.app/",
    featured: true,
  },
  {
    slug: "online-learning-system",
    title: "Online Learning System (OLS)",
    role: "Full-Stack Developer",
    period: "Nov 2025 – Jan 2026",
    summary:
      "A web platform with distinct student and teacher portals, covering authentication and grading.",
    highlights: [
      "Separate student and teacher portal modules",
      "Secure authentication and grading modules",
      "Relational database design in PHP and MySQL for data integrity",
    ],
    stack: ["PHP", "MySQL"],
    category: "PHP",
    image: "/images/projects/ols/cover.jpg",
    repoUrl: "https://github.com/Paoxyz/OLS",
    liveUrl: "https://demo-ols.vercel.app/",
  },
  {
    slug: "administrative-loan-tracker",
    title: "Administrative Loan Tracker",
    role: "Lead Developer",
    period: "Nov 2025 – Dec 2025",
    summary:
      "A centralized system for tracking administrative loans, built for efficiency and secure access.",
    highlights: [
      "Resolved database synchronization issues for accurate financial tracking",
      "Designed a responsive, intuitive navigation interface",
    ],
    stack: ["Database Design", "Secure Access"],
    category: "Full-Stack",
    image: "/images/projects/OLS/cover.jpg",
    repoUrl: "https://github.com/Paoxyz/OLS",
    liveUrl: "https://demo-ols.vercel.app/"
  },
  {
    slug: "marine-life-explorer",
    title: "Marine Life Explorer",
    role: "Frontend Developer",
    period: "2026",
    summary:
      "An interactive front-end archive of ocean creatures, with a full-screen video hero and a hover-driven explore section.",
    highlights: [
      "Full-screen looping video background as the landing hero",
      "Hover-interactive cards for browsing marine species in the archive",
      "Smooth scroll navigation between the hero and the explore section",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    image: "/images/projects/marine-life-explorer/cover.jpg",
    repoUrl: "https://github.com/Paoxyz/marine_life_website",
    liveUrl: "https://marinelifewebsite.vercel.app/",
  },

  {
    slug: "nomad-supply-co",
    title: "Nomad Supply Co.",
    role: "Frontend Developer",
    period: "2026",
    summary:
      "A full front-end e-commerce storefront concept for an analog photography shop, with live search, filtering, and a working cart.",
    highlights: [
      "Live category, price, and keyword filtering across a 20+ item catalog",
      "Persistent shopping cart with quantity controls, built with localStorage",
      "Product detail modal and a mock checkout flow, all client-side",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    image: "/images/projects/nomad-supply-co/cover.jpg",
    repoUrl: "https://github.com/Paoxyz/ECommerceWeb",
    liveUrl: "https://ecommerceweb-demo-web.vercel.app/",
  },
];