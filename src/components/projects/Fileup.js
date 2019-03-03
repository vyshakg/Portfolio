import React from "react";
import fileup from "../../images/project-img/fileup_home.png";
import { ProjectContainer } from "../../ui";

function Fileup({ projectRef }) {
  return (
    <ProjectContainer>
      <div className="desc-project" ref={projectRef}>
        <h1>Fileup</h1>
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
