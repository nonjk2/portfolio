import React, { MutableRefObject, forwardRef, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useAppContext } from "../components/appprovider";
import { InnerImageDivProject, InnerImageDivProjectContainer, ProjectLayout } from "../styles/layout";
// import ProjectCarousel from "../components/project/projectItem";
// import { ProjectPaper } from "../style/projectStyle/project_style";
import useScrollOpacity from "../hooks/useScrollStyle";
import { NotionPage } from "../pages/api/notion";
import NotionRenderer from "../components/project/notion/notionRender";
import useScrollStepper from "../hooks/useScrollStepper";
import ProjectFrontEnd from "../components/project/ProjectInro";

const ProjectContainer = styled.div`
  position: relative;
  display: -ms-grid;
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  /* grid-column-gap: 36px; */
  /* grid-row-gap: 36px; */
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
`;
const ProjectNameContainer = styled.div`
  position: sticky;
  top: 120px;
  bottom: 120px;
  flex: 1;
  min-width: 100px;
  /* width: 15vw;
  min-width: 15vw; */

  -ms-grid-row-align: start;
  align-self: start;
`;

const ProjectAbout = styled.div`
  position: relative;
  background-color: white;
  flex: 3;
  min-width: 600px;
  /* padding: 3rem; */
`;
const ProjectWarpper = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 0px;
  padding-bottom: 100px;
`;
const ProjectSectionDiv = styled.div`
  display: flex;
  /* -webkit-box-direction: normal; */
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;
const Stepper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 0%;
  background-color: blue;
  height: 5px;
  transition: width 0.2s;
  z-index: 10000;
`;
const ProjectCoverImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  transition: transform 0.2s;
`;
const CoverImagediv = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  &:hover {
    .coverImage {
      transform: scale(1.3);
    }
  }
`;
const ProjectLastDiv = styled.div`
  will-change: filter, opacity, transform;
  filter: blur(0px);
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  /* flex-direction: column; */
  flex: 1;
`;
const ProjectSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep, notionDataBase, blocks } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepperRef = useRef<HTMLDivElement>(null);
  useScrollOpacity(ref, innerRef, containerRef);
  useScrollStepper(ref, stepperRef);
  console.log(notionDataBase);
  return (
    <ProjectLayout id="Project" ref={ref} activeStep={activeStep}>
      <InnerImageDivProject ref={innerRef}>
        <InnerImageDivProjectContainer>
          {/* <MainbackImage alt="main" src={projectback} quality={100} fill /> */}
          <Stepper ref={stepperRef} />
          {notionDataBase.map((e: NotionPage, index: number) => (
            <ProjectWarpper key={e.id}>
              <ProjectSectionDiv>
                <ProjectContainer>
                  <ProjectNameContainer>
                    <ProjectFrontEnd properties={e.properties} />
                  </ProjectNameContainer>
                  <ProjectAbout>
                    <CoverImagediv>
                      {e.cover && (
                        <ProjectCoverImage
                          src={e.cover.file.url}
                          // width={500}
                          // height={100}
                          alt=""
                          layout="fill"
                          className="coverImage"
                        />
                      )}
                    </CoverImagediv>
                    <NotionRenderer blocks={blocks[index]} />
                  </ProjectAbout>
                </ProjectContainer>
              </ProjectSectionDiv>
            </ProjectWarpper>
          ))}
          <ProjectLastDiv
            ref={containerRef}
            style={{ height: "100vh", position: "sticky", background: "red", top: 0 }}
          />
          프로젝트 모아보기
          <div style={{ height: "100vh" }} />
          <div style={{ height: "100vh" }} />
          <div style={{ height: "100vh" }} />
          공백구간 비뀌는구간
        </InnerImageDivProjectContainer>
      </InnerImageDivProject>
    </ProjectLayout>
  );
});

export default ProjectSection;
