import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiGithubLine } from "react-icons/ri";
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

export default function App() {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const { experience, skills, contact } = CONFIG;

  useEffect(() => {
    document.title = CONFIG.siteTitle;
  }, []);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">
          {CONFIG.name}
        </a>
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
          <img
            className={`hero-photo ${photoLoaded ? "loaded" : ""}`}
            src={CONFIG.photo}
            alt={CONFIG.name}
            onLoad={() => setPhotoLoaded(true)}
          />
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