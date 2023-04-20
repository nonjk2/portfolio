import React from "react";
import { AboutmeLayout } from "../style/layout";
import { Container } from "../style/abotmeStyle/about_style";
import AboutmeMyImg from "../components/about/aboutmeMyImg";
import AboutmeMyInfo from "../components/about/aboutmeMyInfo";
import AboutmeAdress from "../components/about/aboutmeAdress";

const AboutMe = () => {
  return (
    <div id="Aboutme">
      <AboutmeLayout>
        <Container>
          <AboutmeMyImg />
          <AboutmeMyInfo />
          <AboutmeAdress />
        </Container>
      </AboutmeLayout>
    </div>
  );
};
export default AboutMe;
