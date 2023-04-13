import React, { useRef, forwardRef, useEffect } from "react";
import { ProjectLayout } from "../style/layout";
import ProjectCarousel from "./project/projectItem";
import { useAppContext } from "./appprovider";

function Project(props) {
  const { setActiveStep, themeLight, activeStep } = useAppContext();
  const proJectDivRef = useRef(0);

  return (
    <ProjectLayout ref={proJectDivRef} id="Project" themeLight={themeLight}>
      <div key={activeStep} style={{ width: "70%" }}>
        <ProjectCarousel themeLight={themeLight} />
      </div>
    </ProjectLayout>
  );
}

export default Project;
