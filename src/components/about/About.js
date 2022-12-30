import React from "react";
import "./about.css";
import ME from "../../assets/ME.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" className="ME2" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
          I have been working in the real estate industry for the last few years, working in all specializations: property management,
           real estate appraisal and sales brokerage. I made the decision to rearrange 4 years ago and during this period I have had many trainings,
            webinars, online courses and participated in projects related to training in the IT industries. Analyzing my hard knowledge in the field 
            of IT and knowing my interpersonal communication and analytical skills confirmed in the real estate industry, I'm sure I made the right decision, 
            and I am very eager to expand my knowledge through training and mentoring in testing and coding.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
