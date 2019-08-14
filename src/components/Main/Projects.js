import React from "react";
import { ProjectWrapper } from "../../ui";
import More from "./More";
import ChatApp from "./projects/ChatApp";
import Fileup from "./projects/Fileup";

function Projects() {
  return (
    <ProjectWrapper>
      <Fileup />
      <ChatApp />
      <More />
    </ProjectWrapper>
  );
}

export default Projects;
