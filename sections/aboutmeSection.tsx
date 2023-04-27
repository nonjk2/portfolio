import React, { MutableRefObject, forwardRef, useRef } from "react";

import styled from "styled-components";
import { Typography } from "@mui/material";
import {
  AboutmeLayout,
  InnerImageDiv,
  InnerImageDivContainer,
  MainbackImage,
  MainbackImageMe,
} from "../styles/layout";
import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
import { useAppContext } from "../components/appprovider";
import useScrollOpacity from "../hooks/useScrollStyle";
import simplepurple from "../public/simplepurple.jpg";
import useScrollStepper from "../hooks/useScrollStepper";
import eunseok from "../public/eunseok.png";

const WhiteBackgroundTwo = styled.div`
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 40vw;
  top: 10%;
  background: radial-gradient(#fff 10%, rgb(207, 187, 240) 60%);
  /* border: rgb(207, 187, 240); */
  right: 10%;
  z-index: -2;
`;
const WhiteBackground = styled.div`
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 40vw;
  top: 30%;
  background: radial-gradient(#fff 10%, rgb(207, 187, 240) 60%);
  /* border: rgb(207, 187, 240); */
  z-index: -2;
`;
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
  position: absolute;
  /* align-items: center; */
  left: 10%;
  width: 35vw;
  height: 50vh;
  /* background-color: red; */
  /* justify-content: center; */
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 1000;
`;

const TimeTypography = styled(Typography)`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 200;
  transition: all 0.2s;
  line-height: 2rem;
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
          <MainbackImage alt="main" src={simplepurple} quality={100} fill />
          <MainbackImageMe alt="main" src={eunseok} quality={100} />
          <Stepper ref={stepperRef} />
          <Introduce ref={introduceRef}>
            <Typography variant="h4">
              안녕하세요 <br />
              프론트엔드 개발자 최은석입니다.
            </Typography>
            <br />
            <TimeTypography className="aboutmeTypo" style={{ position: "absolute" }} variant="h5">
              {`계속 발전해 나가는 개발의세계에서 새로운기술로부터 
              도태되지않고 오래된 기술로부터 
              중요한 필요성을 잊지않기위해 노력중입니다.`}
            </TimeTypography>
            <TimeTypography style={{ position: "absolute", opacity: 0 }} variant="h6">
              {`최근 1인 웹개발을 하고싶어 항상 배움의 자세로 
              자료를 찾아보고 공부하며 하루하루 배우고 있습니다.
              아키텍쳐 구조에 관해 관심히 많고 공부할것이 
              뚜렷해지는것에기쁨을 느끼며 이를 적용시키는것에 재미를 느낍니다.
               `}
            </TimeTypography>
          </Introduce>
          <AboutmeMyInfo />
          <WhiteBackground />
          <WhiteBackgroundTwo />
        </InnerImageDivContainer>
      </InnerImageDiv>
    </AboutmeLayout>
  );
});
export default AboutMeSections;
