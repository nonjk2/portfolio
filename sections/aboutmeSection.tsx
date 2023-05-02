import React, { MutableRefObject, forwardRef, useRef } from "react";

import styled from "styled-components";
import { AboutmeLayout, InnerImageDiv, InnerImageDivContainer, MainbackImageMe } from "../styles/layout";
import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
import { useAppContext } from "../components/appprovider";
import useScrollOpacity from "../hooks/useScrollStyle";
import esimgtwo from "../public/esimgtwo.png";
import useScrollStepper from "../hooks/useScrollStepper";

import AboutmeAdress from "../components/about/aboutmeAdress";

const Stepper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  background-color: blue;
  height: 5px;
  transition: width 0.2s;
`;
const Introduce = styled.div`
  position: relative;
  top: 20%;
  padding: 2rem 0;
  /* justify-content: center; */
  min-width: 400px;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 1000;
`;

const TimeTypographyContainer = styled.div`
  transition: all 0.2s;
  line-height: 2rem;
  /* overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
`;
const TimeTypography = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  position: absolute;
  white-space: pre-line;
`;
const TypographyHye = styled.h3`
  font-size: 2.3rem;
  font-weight: 400;
  white-space: pre-line;
  color: #fff;
`;
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
          {/* <MainbackImage alt="main" src={eunseoktwo} quality={100} fill /> */}
          <MainbackImageMe alt="main" src={esimgtwo} quality={100} fill />
          <Stepper ref={stepperRef} />
          <Introduce ref={introduceRef}>
            <TypographyHye style={{ whiteSpace: "pre-line" }}>
              {`안녕하세요
              프론트엔드 개발자
              최은석입니다.`}
            </TypographyHye>
            <br />
            <TimeTypographyContainer>
              <TimeTypography className="aboutmeTypo">
                {`계속 발전해 나가는 개발의세계에서 새로운기술로부터 도태되지않고 오래된 기술로부터 중요한
                필요성을 잊지않기위해 노력중입니다.`}
              </TimeTypography>
            </TimeTypographyContainer>
            <TimeTypographyContainer>
              <TimeTypography>
                {`최근 1인 웹개발을 하고싶어 항상 배움의 자세로 
              자료를 찾아보고 공부하며 하루하루 배우고 있습니다.
              아키텍쳐 구조에 관해 관심히 많고 공부할것이 
              뚜렷해지는것에기쁨을 느끼며 이를 적용시키는것에 재미를 느낍니다.
               `}
              </TimeTypography>
            </TimeTypographyContainer>
            <TimeTypographyContainer>
              <TimeTypography>
                {`프로젝트를 통해 부족함을 느끼고 모르는 부분은
                  항상 채워 넣기위해 프로젝트를 진행하고 있습니다.
                  
                  이전 프로젝트로부터 개선방향을 정해 전 프로젝트를
                  리팩토링하거나 다음프로젝트에서 적용시키고 있습니다.
               `}
              </TimeTypography>
            </TimeTypographyContainer>
          </Introduce>
          <div
            style={{
              display: "flex",
              width: "70%",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <AboutmeMyInfo />
            <AboutmeAdress />
          </div>
        </InnerImageDivContainer>
      </InnerImageDiv>
    </AboutmeLayout>
  );
});
export default AboutMeSections;
