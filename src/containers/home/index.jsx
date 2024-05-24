import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello , I'm Rajat
          <br />
          Software Engineer
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      // delay={.5}
      start={{
        transform : 'translateY(550px)'
      }}
      end={{
        transform : 'translatex(0px)'
      }}   
      >
        <div className="home_contact-me">
          <button className="left" onClick={handleNavigateToContactMePage}>
            Hire Me
          </button>
          {/* <button className="right">Resume Download</button> */}
        </div>
      </Animate>
    </section>
  );
};

export default Home;
