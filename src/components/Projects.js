import React from "react";
import { ProjectWrapper } from "../ui";
import Fileup from "./projects/Fileup";

function Projects({ projectRef }) {
  return (
    <ProjectWrapper>
      <Fileup projectRef={projectRef} />
    </ProjectWrapper>
  );
}

export default Projects;
