import React, { MutableRefObject, forwardRef } from "react";
import { useAppContext } from "../components/appprovider";
import { ProjectLayout } from "../style/layout";
import ProjectCarousel from "../components/project/projectItem";

const ProjectSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();

  return (
    <ProjectLayout id="Project" ref={ref}>
      <div key={activeStep} style={{ width: "100vw" }}>
        <ProjectCarousel />
      </div>
    </ProjectLayout>
  );
});

export default ProjectSection;
