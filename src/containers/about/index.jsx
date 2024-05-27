import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaGitlab, FaCss3Alt ,FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { BiSolidFileJson } from "react-icons/bi";

const personalDetails = [
  {
    label: "Name",
    value: "Rajat yadav",
  },
  {
    label: "DOB",
    value: "15/09/1996",
  },
  {
    label: "Address",
    value: "Gurgaon , India",
  },
  {
    label: "Email",
    value: "015rajaty@gmail.com",
  },
  {
    label: "Contact no.",
    value: "+919315961569",
  },
];

const jobSummary =
  "Seasoned and independent Front End Developer with 3 Year of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development,proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            // delay={.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            // delay={.5}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
        <Animate
            play
            duration={1.5}
            // delay={.5}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about_content_servicesWrapper_innerContent">
            <div>
              <FaReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <TbBrandRedux size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaGitlab size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaCss3Alt size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <RiJavascriptFill
                size={60}
                color="var(--yellow-theme-main-color)"
              />
            </div>
            <div>
              <SiJquery size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <BiSolidFileJson
                size={60}
                color="var(--yellow-theme-main-color)"
              />
            </div>
            <div>
              <FaHtml5
                size={60}
                color="var(--yellow-theme-main-color)"
              />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
