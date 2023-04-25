import React, { MutableRefObject, forwardRef, useRef } from "react";
import {
  AboutmeLayout,
  InnerImageDiv,
  InnerImageDivContainer,
  MainbackImage,
  MainbackImageMe,
} from "../style/layout";
// import AboutmeMyImg from "../components/about/aboutmeMyImg";
// import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
// import AboutmeAdress from "../components/about/aboutmeAdress";
import { useAppContext } from "../components/appprovider";
import aboutme from "../public/aboutmeback.jpg";
import useScrollOpacity from "../hooks/useScrollStyle";
import choieunseok from "../public/choieunseok.png";

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
          <MainbackImage alt="main" src={aboutme} quality={100} fill />
          <MainbackImageMe alt="eun" src={choieunseok} quality={100} />
          {/* <AboutmeMyImg />
          <AboutmeMyInfo />
          <AboutmeAdress /> */}
        </InnerImageDivContainer>
      </InnerImageDiv>
      {/* </Container> */}
    </AboutmeLayout>
  );
});
export default AboutMeSections;
