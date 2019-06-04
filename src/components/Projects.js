import React from "react";
import { ProjectWrapper } from "../ui";
import ChatApp from "./projects/ChatApp";
import Fileup from "./projects/Fileup";
import More from "./More";

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
