import React, { MutableRefObject, forwardRef, useRef } from "react";
import { InnerImageDiv, InnerImageDivContainer, MainImageLayout, MainbackImage } from "../styles/layout";
import { useAppContext } from "../components/appprovider";
import mainback from "../public/mainback.jpg";
import useScrollOpacity from "../hooks/useScrollStyle";

const MainImageSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  const { activeStep } = useAppContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefone = useRef<HTMLSpanElement>(null);
  const textReftwo = useRef<HTMLSpanElement>(null);

  useScrollOpacity(ref, innerRef, containerRef);
  return (
    <MainImageLayout id="Main" ref={ref} activeStep={activeStep}>
      <InnerImageDiv ref={innerRef}>
        <InnerImageDivContainer ref={containerRef}>
          <MainbackImage alt="main" src={mainback} quality={100} fill />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <span ref={textRefone}>안녕하세요</span>
            <span ref={textReftwo}>최은석입니다</span>
          </div>
        </InnerImageDivContainer>
      </InnerImageDiv>
    </MainImageLayout>
  );
});

export default MainImageSection;
