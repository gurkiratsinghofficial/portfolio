// ============================================================
// Edit this file to change what appears on the website.
// Nothing in App.js needs to change when you add or remove items.
// ============================================================

import photo from "./new.png";
import cv from "./assets/GurkiratSingh.pdf";

export const CONFIG = {
  // Browser tab title
  siteTitle: "Gurkirat Singh",

  // Top bar and hero
  name: "Gurkirat Singh",
  headline: "I am Gurkirat Singh",
  intro:
    "Technologically savvy and goal oriented. Driven and motivated to help organisations thrive. Skilled in prioritizing and completing tasks independently. Good problem solving skills and attention to details.",
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
        title: "Associate Software Engineer",
        place: "VT Netzwelt Pvt Ltd, India",
        url: "https://www.vtnetzwelt.com",
        date: "April 2021 – Present",
        points: [
          "Participate in software development using Agile/Scrum development process.",
          "Implement various features on ongoing projects, my main tech stack being MERN stack.",
        ],
      },
      {
        type: "work",
        title: "Associate Trainee (Fullstack)",
        place: "VT Netzwelt Pvt Ltd, India",
        url: "https://www.vtnetzwelt.com",
        date: "Oct 2020 – April 2021",
        points: [
          "Underwent a 3 months web development boot-camp where I built multiple applications using MERN stack with best coding practices.",
          "Developed an application, with a team-mate, to measure growth of employees of the organization.",
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
      "I am working on technologies across the whole stack (MongoDB, Express, React, NodeJS). Experience building complete web applications with backend API systems.",
    groups: [
      { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Other", items: ["C++", "Photoshop"] },
    ],
  },

  contact: {
    title: "Contact me",
    formAction: "https://formspree.io/meqrwjdw",
    submitLabel: "Send message",
  },

  footer: "Made with love & caffeine by Gurkirat Singh.",
};