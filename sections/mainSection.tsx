import React, { MutableRefObject, forwardRef, useRef } from "react";
import { Typography } from "@mui/material";

import { InnerImageDiv, InnerImageDivContainer, MainImageLayout, MainbackImage } from "../styles/layout";
import { useAppContext } from "../components/appprovider";
import mainback from "../public/mainback.jpg";
import useScrollOpacity from "../hooks/useScrollStyle";
import useFadeInEffect from "../hooks/useFadeInEffect";

const MainImageSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefone = useRef<HTMLSpanElement>(null);
  const textReftwo = useRef<HTMLSpanElement>(null);
  useFadeInEffect(textRefone, textReftwo);
  useScrollOpacity(ref, innerRef, containerRef, 0);
  return (
    <MainImageLayout id="Main" ref={ref} activeStep={activeStep}>
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <MainbackImage alt="main" src={mainback} quality={100} fill />
          <Typography ref={textRefone} variant="h2">
            안녕하세요
          </Typography>
          <br />
          {/* <StyledTypist strings={sentences2} typeSpeed={40} backSpeed={50} loop themeLight={themeLight} /> */}
          <br />
          <Typography ref={textReftwo} variant="h3">
            최은석입니다
          </Typography>
        </InnerImageDivContainer>
      </InnerImageDiv>
    </MainImageLayout>
  );
});

export default MainImageSection;
