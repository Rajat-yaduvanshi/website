import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import Myresume from "./pdf/Resume.pdf";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { data } from "./utils";
import { MdWork } from "react-icons/md";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "./index.css";
import "./indexDefault.css";


const Resume = () => {
  const [pdfFile, setpdfFile] = useState(null);
  const [viewpdf, setviewpdf] = useState(Myresume);

  const fileType = ["application/pdf"];
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setpdfFile(e.target.result);
        };
      } else {
        setpdfFile(null);
      }
    } else {
      console.log("please Select pdf ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setviewpdf(pdfFile);
    } else {
      setviewpdf(null);
    }
  };

  const newplugin = defaultLayoutPlugin();

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={
          <a href={Myresume} download="Resume.pdf" className="resume_pdf">
            <IoMdDownload size={40} />
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
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
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
                <p className="vertical-timeline-element-title-wrapper-desciprtion">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="form-control"
              onChange={handleChange}
            />
            <button type="submit" className="btn-success">
              View Resume
            </button>
          </form>
          <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              {viewpdf && (
                <>
                  <Viewer fileUrl={viewpdf} plugins={[newplugin]} />
                </>
              )}
              {!viewpdf && <> Upload Resume </>}
            </Worker>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
