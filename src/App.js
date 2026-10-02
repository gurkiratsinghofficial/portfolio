import React, { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiGithubLine } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
import { ReactComponent as WorkIcon } from "./assets/work.svg";
import { ReactComponent as SchoolIcon } from "./assets/school.svg";
import { CONFIG } from "./constants";
import "./App.css";

const SOCIAL_ICONS = {
  facebook: <GrFacebookOption />,
  instagram: <AiOutlineInstagram />,
  github: <RiGithubLine />,
  linkedin: <TiSocialLinkedin />,
  twitter: <AiOutlineTwitter />,
};

const ACCENT = { background: "#ff8300" };

function Socials() {
  return (
    <div className="socials">
      {CONFIG.socials.map((s) => (
        <a
          key={s.icon}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.icon}
        >
          {SOCIAL_ICONS[s.icon]}
        </a>
      ))}
    </div>
  );
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeSwitch({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className={`theme-switch ${isDark ? "on" : ""}`}
      onClick={onToggle}
    >
      <span className="knob">
        <FiSun className="icon sun" />
        <FiMoon className="icon moon" />
      </span>
    </button>
  );
}

export default function App() {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const photoRef = useRef(null);
  const { experience, skills, contact } = CONFIG;

  useEffect(() => {
    document.title = CONFIG.siteTitle;
  }, []);

  useEffect(() => {
    // covers the case where the image was cached and loaded before React attached onLoad
    if (photoRef.current?.complete) setPhotoLoaded(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <>
      <header className="topbar">
        <div className="brand-wrap">
          <a className="brand" href="#home">
            {CONFIG.name}
          </a>
          <ThemeSwitch
            theme={theme}
            onToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          />
        </div>
        <nav>
          {CONFIG.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className={`hero-photo-wrap ${photoLoaded ? "loaded" : ""}`}>
            <img
              ref={photoRef}
              className="hero-photo"
              src={CONFIG.photo}
              alt={CONFIG.name}
              onLoad={() => setPhotoLoaded(true)}
            />
            <svg className="hero-ring" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="49.4" pathLength="1" />
            </svg>
          </div>
          <div className="hero-text">
            <h1>{CONFIG.headline}</h1>
            <p>{CONFIG.intro}</p>
            <Socials />
            <a className="btn" href={CONFIG.cv.file} download>
              {CONFIG.cv.label}
            </a>
          </div>
        </section>

        <section id="experience">
          <h2>{experience.title}</h2>
          <VerticalTimeline>
            {experience.items.map((item) => (
              <VerticalTimelineElement
                key={`${item.title}-${item.date}`}
                date={item.date}
                dateClassName="date"
                iconStyle={ACCENT}
                icon={item.type === "school" ? <SchoolIcon /> : <WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.place}
                  </a>
                </h4>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        <section id="skills" className="narrow">
          <h2>{skills.title}</h2>
          <p>{skills.description}</p>
          <div className="skill-groups">
            {skills.groups.map((g) => (
              <div key={g.category}>
                <h3>{g.category}</h3>
                <ul className="badges">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="narrow">
          <h2>{contact.title}</h2>
          <form action={contact.formAction} method="POST">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />
            <button className="btn" type="submit">
              {contact.submitLabel}
            </button>
          </form>
        </section>
      </main>

      <footer>
        <Socials />
        <p>
          © {new Date().getFullYear()} {CONFIG.footer}
        </p>
      </footer>
    </>
  );
}