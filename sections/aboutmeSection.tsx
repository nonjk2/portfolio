import React, { MutableRefObject, forwardRef, useRef } from "react";

import { AboutmeLayout, InnerImageDiv, InnerImageDivContainer, MainbackImageMe } from "../styles/layout";
import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
import { useAppContext } from "../components/appprovider";
import useScrollOpacity from "../hooks/useScrollStyle";
import esimgtwo from "../public/esimgtwo.png";
import useScrollStepper from "../hooks/useScrollStepper";
import AboutmeAdress from "../components/about/aboutmeAdress";
import {
  AboutmeCardContainer,
  Introduce,
  Stepper,
  TimeTypography,
  TimeTypographyContainer,
  TypographyHye,
} from "../styles/abotmeStyle/about_style";

const AboutMeSections = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepperRef = useRef<HTMLDivElement>(null);
  const introduceRef = useRef<HTMLDivElement>(null);

  useScrollOpacity(ref, innerRef, containerRef);
  useScrollStepper(ref, stepperRef, introduceRef);
  return (
    <AboutmeLayout id="Aboutme" ref={ref} activeStep={activeStep}>
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <Stepper ref={stepperRef} />
          <Introduce ref={introduceRef}>
            <TypographyHye style={{ whiteSpace: "pre-line" }} variant="h3">
              {`안녕하세요
              프론트엔드 개발자
              최은석입니다.`}
            </TypographyHye>

            <TimeTypographyContainer>
              <TimeTypography>
                최근 1인 웹개발을 하고싶어 항상 배움의 자세로 자료를 찾아보고 공부하며 하루하루 배우고
                있습니다. 아키텍쳐 구조에 관해 관심히 많고 공부할것이 뚜렷해지는것에기쁨을 느끼며 이를
                적용시키는것에 재미를 느낍니다.
              </TimeTypography>
            </TimeTypographyContainer>
          </Introduce>
          <AboutmeCardContainer>
            <MainbackImageMe alt="main" src={esimgtwo} quality={100} fill />
            <AboutmeMyInfo />
            <AboutmeAdress />
          </AboutmeCardContainer>
        </InnerImageDivContainer>
      </InnerImageDiv>
    </AboutmeLayout>
  );
});
export default AboutMeSections;
