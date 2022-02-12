import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'
import pro4 from '../assets/pro4.png'
import { ReactComponent as ProjectIcon } from '../assets/project.svg'
import { Card } from 'react-bootstrap';

const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e => {
    setIsDarkTheme(e.matches);
  });

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
}

function ProjectLine() {
  const isDarkTheme = useThemeDetector();
  let projectIconStyles = { background: "#ff8300" };
  return (
    <div className="neo" id="projects">
      <h3 className="projectsTitle">Some of my <label className="projectscolor">projects</label></h3>
      <VerticalTimeline className="project">
        <VerticalTimeline></VerticalTimeline>
        <VerticalTimelineElement
          key={0}
          dateClassName="date"
          iconStyle={projectIconStyles}
          icon={<ProjectIcon />}
        >

          <Card bg={isDarkTheme ? "dark" : "light"} variant={isDarkTheme ? "dark" : "light"}>
            <a rel="noopener noreferrer" target="_blank" href="https://eventify-manager.netlify.app/">
              <Card.Img variant="top" src={pro4} />
            </a>
            <Card.Footer>
              <small ><a rel="noopener noreferrer" target="_blank" href="https://eventify-manager.netlify.app/">Eventify</a></small>
            </Card.Footer>
          </Card>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          key={0}
          dateClassName="date"
          iconStyle={projectIconStyles}
          icon={<ProjectIcon />}
        >
          <Card bg={isDarkTheme ? "dark" : "light"} variant={isDarkTheme ? "dark" : "light"}>
            <a rel="noopener noreferrer" target="_blank" href="https://phone-kart.netlify.app/">
              <Card.Img variant="top" src={pro1} />
            </a>
            <Card.Footer>
              <small ><a rel="noopener noreferrer" target="_blank" href="https://phone-kart.netlify.app/">E-commerce Frontend</a></small>
            </Card.Footer>
          </Card>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          key={1}
          dateClassName="date"
          iconStyle={projectIconStyles}
          icon={<ProjectIcon />}
        >
          <Card bg={isDarkTheme ? "dark" : "light"} variant={isDarkTheme ? "dark" : "light"}>
            <a target="_blank" rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1_kVcYLL2T4wJN83qSvq_J12tO3KRtATC/view?usp=sharing"
            >
              <Card.Img variant="top" src={pro2} />
            </a>
            <Card.Footer>
              <small ><a target="_blank" rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1_kVcYLL2T4wJN83qSvq_J12tO3KRtATC/view?usp=sharing"
              >E-logistics Dashboard (Freelance)</a></small>
            </Card.Footer>
          </Card>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          key={3}
          dateClassName="date"
          iconStyle={projectIconStyles}
          icon={<ProjectIcon />}
        >
          <Card bg={isDarkTheme ? "dark" : "light"} variant={isDarkTheme ? "dark" : "light"}>
            <a target="_blank" rel="noopener noreferrer" href="https://cov-19tracker.netlify.app/">
              <Card.Img variant="top" src={pro3} />
            </a>
            <Card.Footer>
              <small ><a rel="noopener noreferrer" target="_blank" href="https://cov-19tracker.netlify.app/">Corona Tracker</a></small>
            </Card.Footer>
          </Card>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default ProjectLine
