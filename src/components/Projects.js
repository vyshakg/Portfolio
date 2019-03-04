import React from "react";
import { ProjectWrapper } from "../ui";
import ChatApp from "./projects/ChatApp";
import Fileup from "./projects/Fileup";

function Projects() {
  return (
    <ProjectWrapper>
      <Fileup />
      <ChatApp />
    </ProjectWrapper>
  );
}

export default Projects;
