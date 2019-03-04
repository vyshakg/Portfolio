import React from "react";
import chatapp from "../../images/project-img/Chatapp_home.png";
import { ProjectContainer } from "../../ui";

function ChatApp() {
  return (
    <ProjectContainer>
      <div className="desc-project">
        <h1>chatapp</h1>
      </div>
      {/* <img src={fileup} alt="fileup_home" className="fileup_home_img" /> */}
      <div className="content" data-aos="fade-left" data-aos-delay="200" data-aos-offset="100">
        <a href="https://chat-app-graphql.netlify.com/" target="_blank" rel="noopener noreferrer">
          <div className="content-overlay" />
          <img className="content-image fileup_home_img" alt="fileup_home" src={chatapp} />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Click for The Demo</h3>
          </div>
        </a>
      </div>
    </ProjectContainer>
  );
}

export default ChatApp;
