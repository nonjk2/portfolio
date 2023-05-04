import React, { MutableRefObject, forwardRef, useRef } from "react";

import { InnerImageDiv, InnerImageDivContainer, MainbackImage, SkillsLayout } from "../styles/layout";
import { useAppContext } from "../components/appprovider";

import useScrollOpacity from "../hooks/useScrollStyle";
import simplepurple from "../public/simplepurple.jpg";

const SkillsSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollOpacity(ref, innerRef, containerRef);

  return (
    <SkillsLayout ref={ref} id="Skills" activeStep={activeStep}>
      {/* <ProjectPaper> */}
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <MainbackImage alt="main" src={simplepurple} quality={100} fill />
        </InnerImageDivContainer>
      </InnerImageDiv>
      {/* </ProjectPaper> */}
    </SkillsLayout>
  );
});

export default SkillsSection;
