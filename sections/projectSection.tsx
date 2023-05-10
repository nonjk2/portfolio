import React, { MutableRefObject, forwardRef, useRef } from "react";
import styled from "styled-components";
import { useAppContext } from "../components/appprovider";
import { InnerImageDivProject, InnerImageDivProjectContainer, ProjectLayout } from "../styles/layout";
// import ProjectCarousel from "../components/project/projectItem";
// import { ProjectPaper } from "../style/projectStyle/project_style";
import useScrollOpacity from "../hooks/useScrollStyle";
import { NotionPage } from "../pages/api/notion";
import useScrollStepper from "../hooks/useScrollStepper";
import { Stepper } from "../styles/projectStyle/project_style";
import MynotionProject from "../components/project/MynotionProject";

const ProjectLastDiv = styled.div`
  will-change: filter, opacity, transform;
  filter: blur(0px);
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  flex: 1;
`;
const ProjectSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep, notionDataBase } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepperRef = useRef<HTMLDivElement>(null);
  useScrollOpacity(ref, innerRef, containerRef);
  useScrollStepper(ref, stepperRef);

  return (
    <ProjectLayout id="Project" ref={ref} activeStep={activeStep}>
      <InnerImageDivProject ref={innerRef}>
        <InnerImageDivProjectContainer>
          {/* <MainbackImage alt="main" src={projectback} quality={100} fill /> */}
          <Stepper ref={stepperRef} />
          {notionDataBase.map((e: NotionPage, index: number) => (
            <MynotionProject e={e} key={e.id} index={index} />
          ))}
          <ProjectLastDiv
            ref={containerRef}
            style={{ height: "100vh", position: "sticky", backgroundColor: "#fff", top: 0 }}
          />
          <div style={{ height: "100vh" }} />
        </InnerImageDivProjectContainer>
      </InnerImageDivProject>
    </ProjectLayout>
  );
});

export default ProjectSection;
