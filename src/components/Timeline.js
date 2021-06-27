import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/work.svg'
import { ReactComponent as SchoolIcon } from '../assets/school.svg'
import {timelineElements} from './timelineElements'
import ReactHtmlParser from 'react-html-parser';

function Timeline() {
    let workIconStyles = { background: "#ff8300" };
    let schoolIconStyles = { background: "#ff8300" };
    return (
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {ReactHtmlParser(element.title)}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                <a target='_blank' rel="noopener noreferrer" href={element.href}>{element.location}</a>
              </h5>
              <p id="description">{ReactHtmlParser(element.description)}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    )
}

export default Timeline
