import React, { MutableRefObject, forwardRef } from "react";
import { AboutmeLayout } from "../style/layout";
import { Container } from "../style/abotmeStyle/about_style";
import AboutmeMyImg from "../components/about/aboutmeMyImg";
import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
import AboutmeAdress from "../components/about/aboutmeAdress";

const AboutMeSections = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  return (
    <AboutmeLayout id="Aboutme" ref={ref}>
      <Container>
        <AboutmeMyImg />
        <AboutmeMyInfo />
        <AboutmeAdress />
      </Container>
    </AboutmeLayout>
  );
});
export default AboutMeSections;
