import React from "react";
import { AboutmeLayout } from "../../style/layout";
import { useAppContext } from "../appprovider";
import { Container } from "../../style/abotmeStyle/about_style";
import AboutmeMyImg from "./aboutmeMyImg";
import AboutmeMyInfo from "./aboutmeMyInfo";
import AboutmeAdress from "./aboutmeAdress";

const AboutMe = () => {
  const { activeStep, setActiveStep, themeLight } = useAppContext();

  return (
    <div id="Aboutme">
      <AboutmeLayout themeLight={themeLight}>
        <Container key={activeStep}>
          <AboutmeMyImg />
          <AboutmeMyInfo />
          <AboutmeAdress />
        </Container>
      </AboutmeLayout>
    </div>
  );
};
export default AboutMe;
