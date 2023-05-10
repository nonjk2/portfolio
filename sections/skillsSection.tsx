import React, { MutableRefObject, forwardRef, useRef } from "react";

import Link from "next/link";
import { InnerImageDiv, InnerImageDivContainer, MainbackImage, SkillsLayout } from "../styles/layout";
import { useAppContext } from "../components/appprovider";

import useScrollOpacity from "../hooks/useScrollStyle";
import simplepurple from "../public/simplepurple.jpg";
import StudyCard from "../components/study/StudyCard";
import { NotionPage } from "../pages/api/notion";
import { CardContainer, StudyCardListContainer } from "../styles/skillStyle/Skill_style";

const SkillsSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep, notionStudyDataBase } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollOpacity(ref, innerRef, containerRef);
  const StudyArray = notionStudyDataBase.filter((e) => e.properties["태그"].multi_select[0].name === "Study");
  return (
    <SkillsLayout ref={ref} id="Study&Skill" activeStep={activeStep}>
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <MainbackImage alt="main" src={simplepurple} quality={100} fill />
          <div style={{ flex: 1, backgroundColor: "#fff" }} />
          <StudyCardListContainer>
            {StudyArray.map((e: NotionPage) => (
              <CardContainer key={e.id}>
                <Link href={e.url} passHref legacyBehavior>
                  <a target="_blank">
                    <StudyCard study={e} />
                  </a>
                </Link>
              </CardContainer>
            ))}
          </StudyCardListContainer>
        </InnerImageDivContainer>
      </InnerImageDiv>
    </SkillsLayout>
  );
});

export default SkillsSection;
