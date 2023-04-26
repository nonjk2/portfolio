import React, { MutableRefObject, forwardRef, useRef } from "react";
import { Typography } from "@mui/material";
import { AboutmeLayout, InnerImageDiv, InnerImageDivContainer, MainbackImage } from "../styles/layout";
import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
import { useAppContext } from "../components/appprovider";
import useScrollOpacity from "../hooks/useScrollStyle";
import simplepurple from "../public/simplepurple.jpg";

const AboutMeSections = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollOpacity(ref, innerRef, containerRef, 1);
  return (
    <AboutmeLayout id="Aboutme" ref={ref} activeStep={activeStep}>
      {/* <Container activeStep={activeStep}> */}
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <MainbackImage alt="main" src={simplepurple} quality={100} fill />
          <div style={{ flex: 1 }}>
            <Typography variant="h2">안녕하세요 주니어 개발자 최은석입니다.</Typography>
          </div>
          <AboutmeMyInfo />
        </InnerImageDivContainer>
      </InnerImageDiv>
      {/* </Container> */}
    </AboutmeLayout>
  );
});
export default AboutMeSections;
