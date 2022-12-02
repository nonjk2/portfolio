import React, { useRef, forwardRef, useEffect } from "react";
import { ProjectLayout } from "../style/layout";
import ProjectCarousel from "./project/projectItem";

function Project(props) {
  const { setActiveStep, themeLight } = props;
  const proJectDivRef = useRef(0);

  return (
    <ProjectLayout ref={proJectDivRef} id="Project" themeLight={themeLight}>
      <ProjectCarousel themeLight={themeLight} />
    </ProjectLayout>
  );
}

export default Project;
