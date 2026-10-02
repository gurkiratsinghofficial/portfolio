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
import { FiChevronLeft, FiChevronRight, FiMoon, FiSun } from "react-icons/fi";
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

// How many words at the end of the intro get the typing effect
const TYPED_WORDS = 4;
// Typing runs from page load and ends when the ring finishes drawing (0.7s delay + 1s draw)
const TYPING_MS = 1700;

function Intro({ text }) {
  const words = text.split(" ");
  const head = words.slice(0, -TYPED_WORDS).join(" ") + " ";
  const tail = words.slice(-TYPED_WORDS).join(" ");
  const reduceMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const [count, setCount] = useState(reduceMotion ? tail.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= tail.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, TYPING_MS / tail.length);
    return () => clearInterval(id);
  }, [tail, reduceMotion]);

  const done = count >= tail.length;

  return (
    <p>
      {head}
      <span className="sr-only">{tail}</span>
      <span aria-hidden="true">
        {tail.slice(0, count)}
        <span className={`caret ${done ? "done" : ""}`} />
        {/* untyped part stays invisible but keeps its space, so the layout never jumps */}
        <span className="ghost">{tail.slice(count)}</span>
      </span>
    </p>
  );
}

const DEFAULT_FEATURED = {
  title: "Featured posts",
  description: "A few things I've shared on LinkedIn.",
  posts: [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6987843438515785728?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6877296230507122688?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6904083583326142464?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6933025818658889729",
  ],
};

// default embed height: 560px reduced by 15%
const EMBED_HEIGHT = 476;

// accepts "urn:li:share:123", "urn:li:ugcPost:123" or a full embed URL
function embedSrc(urn) {
  return urn.startsWith("http")
    ? urn
    : `https://www.linkedin.com/embed/feed/update/${urn}`;
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
  const scrollerRef = useRef(null);
  const { experience, skills, contact } = CONFIG;
  const featured = { ...DEFAULT_FEATURED, ...CONFIG.featured };
  const hasFeatured = featured.posts.length > 0;
  // "Featured" nav link only shows up when there are posts
  const nav = hasFeatured
    ? [
        ...CONFIG.nav.filter((n) => n.id !== "contact"),
        { id: "featured", label: "Featured" },
        ...CONFIG.nav.filter((n) => n.id === "contact"),
      ]
    : CONFIG.nav;

  useEffect(() => {
    document.title = CONFIG.siteTitle;
  }, []);

  useEffect(() => {
    // covers the case where the image was cached and loaded before React attached onLoad
    if (photoRef.current?.complete) setPhotoLoaded(true);
  }, []);

  const scrollFeatured = (dir) => {
    const el = scrollerRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

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
          {nav.map((n) => (
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
            <Intro text={CONFIG.intro} />
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

        {hasFeatured && (
          <section id="featured">
            <h2>{featured.title}</h2>
            <p className="featured-desc">{featured.description}</p>
            {featured.posts.length > 1 && (
              <div className="featured-arrows">
                <button
                  type="button"
                  aria-label="Scroll posts left"
                  onClick={() => scrollFeatured(-1)}
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  aria-label="Scroll posts right"
                  onClick={() => scrollFeatured(1)}
                >
                  <FiChevronRight />
                </button>
              </div>
            )}
            <div
              className="featured-grid"
              ref={scrollerRef}
              tabIndex={0}
              aria-label="Featured LinkedIn posts, scroll horizontally"
            >
              {featured.posts.map((post) => {
                const item = typeof post === "string" ? { urn: post } : post;
                return (
                  <div className="embed-card" key={item.urn}>
                    <iframe
                      src={embedSrc(item.urn)}
                      title={item.title || "Embedded LinkedIn post"}
                      loading="lazy"
                      allowFullScreen
                      style={{ height: item.height || EMBED_HEIGHT }}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

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