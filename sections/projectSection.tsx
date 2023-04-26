import React, { MutableRefObject, forwardRef, useRef } from "react";
import { useAppContext } from "../components/appprovider";
import { InnerImageDiv, InnerImageDivContainer, MainbackImage, ProjectLayout } from "../styles/layout";
// import ProjectCarousel from "../components/project/projectItem";
// import { ProjectPaper } from "../style/projectStyle/project_style";
import useScrollOpacity from "../hooks/useScrollStyle";
import projectback from "../public/projectback.jpg";

const ProjectSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollOpacity(ref, innerRef, containerRef, 2);

  return (
    <ProjectLayout id="Project" ref={ref} activeStep={activeStep}>
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <MainbackImage alt="main" src={projectback} quality={100} fill />
        </InnerImageDivContainer>
      </InnerImageDiv>
    </ProjectLayout>
  );
});

export default ProjectSection;
