import React from "react";
import docker from "../../images/icons/docker.svg";
import expressjs from "../../images/icons/express-js.svg";
import jest from "../../images/icons/jest.svg";
import nodejs from "../../images/icons/nodejs.svg";
import postgresql from "../../images/icons/postgresql.svg";
import reactrouter from "../../images/icons/react-router.svg";
import react from "../../images/icons/react.svg";
import redis from "../../images/icons/redis.svg";
import redux from "../../images/icons/redux.svg";
import stripe from "../../images/icons/stripe.svg";
import typescript from "../../images/icons/typescript.svg";
import fileup from "../../images/project-img/fileup_home.png";
import { ProjectContainer } from "../../ui";

function Fileup() {
  return (
    <ProjectContainer>
      <div className="desc-project">
        <h1 className="project-title">
          Fileup
          <a
            href="https://github.com/vyshakg/FileUp"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
            style={{ float: "right" }}
          >
            <span className="project-link-helper">Source Code:</span>
            <i className="fab fa-github" style={{ color: "white", marginRight: "20px", fontSize: "28px" }} />
          </a>
        </h1>
        <p className="project-para">
          Its a app silimar to google photos... where user can upload a photo save it on the cloud and view a photo
          whenever they want.
        </p>
        <span className="hero-link-helper" style={{ marginBottom: "13px" }}>
          Technologies used:
        </span>
        <div className="tech-icosns-holder">
          <div className="tooltip">
            <img src={nodejs} alt="nodejs-icn" className="icons-style " />
            <span className="tooltiptext">Nodejs</span>
          </div>
          <div className="tooltip">
            <img src={expressjs} alt="react-router-icn" className="icons-style" />

            <span className="tooltiptext">Express</span>
          </div>
          <div className="tooltip">
            <img src={typescript} alt="typesct-icn" className="icons-style" />
            <span className="tooltiptext">Typescript</span>
          </div>
          <div className="tooltip">
            <img src={postgresql} alt="postgresql-icn" className="icons-style" />
            <span className="tooltiptext">Postgresql</span>
          </div>
          <div className="tooltip">
            <img src={redis} alt="react-icn" className="icons-style" />
            <span className="tooltiptext">Redis</span>
          </div>
          <div className="tooltip">
            <img src={react} alt="react-icn" className="icons-style" />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img src={reactrouter} alt="react-router-icn" className="icons-style" />
            <span className="tooltiptext">React router</span>
          </div>
          <div className="tooltip">
            <img src={redux} alt="redux-icn" className="icons-style" />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <img src={jest} alt="jest-icn" className="icons-style" style={{ width: "5%" }} />
            <span className="tooltiptext">Jest</span>
          </div>
          <div className="tooltip">
            <img src={stripe} alt="stripe-icn" className="icons-style" />
            <span className="tooltiptext">Stripe</span>
          </div>
          <div className="tooltip">
            <img src={docker} alt="docker-icn" className="icons-style" style={{ width: "8%" }} />
            <span className="tooltiptext">Docker</span>
          </div>
        </div>
      </div>
      {/* <img src={fileup} alt="fileup_home" className="fileup_home_img" /> */}
      <div className="content" data-aos="fade-left" data-aos-delay="200" data-aos-offset="100">
        <a href="https://fast-coast-19533.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="content-overlay" />
          <img className="content-image fileup_home_img" alt="fileup_home" src={fileup} />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Click for The Demo</h3>
          </div>
        </a>
      </div>
    </ProjectContainer>
  );
}

export default Fileup;
