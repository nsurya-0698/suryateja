import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from './work.svg';
import { ReactComponent as SchoolIcon } from './school.svg';
import timelineElements from './timelineElements';

function App() {
  const workIconStyles = { background: '#06D6A0' };
  const schoolIconStyles = { background: '#f9c74f' };

  return (
    <div id="exp">
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === 'work';
          const showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== '';

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.role}
              </h5>
              <span className="location">{element.location}</span>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? 'workButton' : 'schoolButton'}`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
