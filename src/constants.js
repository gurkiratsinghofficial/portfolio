// ============================================================
// Edit this file to change what appears on the website.
// Nothing in App.js needs to change when you add or remove items.
// ============================================================

import photo from "./new.png";
import cv from "./assets/GurkiratSingh.pdf";

export const CONFIG = {
  // Browser tab title
  siteTitle: "Gurkirat Singh | Software Engineer",

  // Top bar and hero
  name: "Gurkirat Singh",
  headline: "I am Gurkirat Singh",
  intro:
    "Senior Software Engineer with 5+ years of experience building scalable, high-performance web apps across SaaS, e-commerce and global platforms. Full stack, with a strong frontend core: micro frontends, design systems, APIs and data-driven systems. I like crafting polished, intuitive experiences backed by clean, maintainable architecture.",
  photo: photo,
  cv: { label: "Curriculum vitae", file: cv },

  // Nav links: `id` must match a section id in App.js
  // (home, experience, skills, contact). Delete one to hide it from the nav.
  nav: [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],

  // `icon` must be one of: facebook, instagram, github, linkedin, twitter
  socials: [
    { icon: "facebook", url: "https://www.facebook.com/GurkiratSinghOfficial/" },
    { icon: "instagram", url: "https://www.instagram.com/gurkiratsinghofficial/" },
    { icon: "github", url: "https://github.com/gurkiratsinghofficial" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/gurkiratsinghofficial/" },
    { icon: "twitter", url: "https://twitter.com/gurkiratsingho" },
  ],

  // Timeline entries, shown in this order.
  // `type` is "work" or "school". `points` is a list of bullet strings.
  experience: {
    title: "Experience & education",
    items: [
      {
        type: "work",
        title: "Software Engineer II",
        place: "Klearnow.Ai, Gurgaon, India",
        url: "https://klearnow.ai",
        date: "April 2022 – Sept 2026",
        points: [
          "Architected and drove adoption of Webpack Module Federation micro frontends across the User Management, Broker Platform and Operations Panel teams, cutting the release cycle by 50% (4 weeks to 2 weeks).",
          "Bootstrapped the KlearEngine SaaS frontend: picked the stack, built a custom JWT auth module and backend-config-driven routing (React Router v6) that scales to 50+ screens.",
          "Cut CRA / Webpack 4 warm build times by ~80% (~6 min to ~1 min) with CRACO, Babel, Terser caching and ESLint optimizations, without changing runtime behavior.",
          "Built a zero-integration OCR picker that triggers native onChange events, removing custom text-insertion logic from 50+ input components with no handler changes.",
          "Helped build a design system of 30+ shared components used across 3 products.",
          "Automated shipment assignment to operators using priority logic, improving shipment filing efficiency by 20%.",
          "Pushed for normalized JSON responses across 10+ APIs, enabling direct entity lookup and cutting duplicated data-transformation code on the frontend.",
        ],
      },
      {
        type: "work",
        title: "Associate Software Engineer",
        place: "VT Netzwelt Pvt Ltd, India",
        url: "https://www.vtnetzwelt.com",
        date: "April 2021 – April 2022",
        points: [
          "Built the Next.js frontend for ARTMO, an art marketplace: reusable components, responsive UI and REST integrations. Also contributed to 4+ Node.js/Express/TypeScript microservices on MongoDB.",
          "Migrated 100K+ user records from Magento to MongoDB with Node.js scripts, preserving artwork metadata, asset mappings and user relationships.",
          "Built a media pipeline that generates multiple resolution and aspect-ratio variants per upload, served via CDN for ~20% faster image loading.",
          "Shipped a 41-language i18n framework across 11+ pages from a single codebase.",
          "Built real-time messaging with Socket.IO, plus a notification system with 10+ notification types, a WYSIWYG editor and deep links.",
          "Implemented RBAC for 5 roles (Super Admin, Admin, Artist, Seller, User) and cron-based batch emailing within AWS sending limits.",
          "Supported go-live and onboarding of 10K+ new users in the first month.",
        ],
      },
      {
        type: "work",
        title: "Associate Trainee (Fullstack)",
        place: "VT Netzwelt Pvt Ltd, India",
        url: "https://www.vtnetzwelt.com",
        date: "Oct 2020 – April 2021",
        points: [
          "Completed a 3-month web development boot-camp, building multiple applications with the MERN stack and best coding practices.",
          "Developed an application with a teammate to measure the growth of employees in the organization.",
        ],
      },
      {
        type: "school",
        title: "Bachelors of Engineering in Computer Science",
        place: "Chitkara University",
        url: "https://www.chitkara.edu.in",
        date: "2017 – 2021",
        points: ["CGPA - 8.83"],
      },
    ],
  },

  // Skills grouped by category. Add or remove freely.
  skills: {
    title: "Skills I'm working with",
    description:
      "Full stack with a frontend core. I build micro frontend architectures, design systems and API-driven apps, and I'm leaning into AI-assisted development with Cursor and Claude Code.",
    groups: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Storybook"],
      },
      {
        category: "Architecture",
        items: ["Micro Frontends", "Module Federation", "Design Systems", "Component Architecture"],
      },
      {
        category: "Backend & APIs",
        items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Webhooks", "Server-Sent Events"],
      },
      { category: "Database", items: ["MongoDB", "MySQL"] },
      {
        category: "Tooling",
        items: ["Webpack", "Babel", "ESLint", "Husky", "npm", "yarn", "Git", "GitHub", "GitLab", "Jira"],
      },
      { category: "AI Tools", items: ["Cursor", "Claude Code"] },
    ],
  },

  contact: {
    title: "Contact me",
    formAction: "https://formspree.io/meqrwjdw",
    submitLabel: "Send message",
  },

  footer: "Made with love & caffeine by Gurkirat Singh.",
};