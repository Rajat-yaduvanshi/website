import React from "react";
import { FaFileDownload } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import pdf from "./pdf/Resume.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { data } from "./utils";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={
          <a href={pdf} download="Resume.pdf" className="resume_pdf">
            <FaFileDownload size={40} />
          </a>
        }
      />

      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experience_header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{
                  background : 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                date="2020 - Present"
                icon={<MdWork/>}
                iconStyle={{
                  background: "#181818",
                  color : 'var(--yellow-theme-main-color)'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  
                </div>
                <p className="vertical-timeline-element-title-wrapper-desciprtion">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline_education">
          <h3 className="timeline_education_header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{
                  background : 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                date="2020 - Present"
                icon={<MdWork/>}
                iconStyle={{
                  background: "#181818",
                  color : 'var(--yellow-theme-main-color)'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-desciprtion" > {item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
