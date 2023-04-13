import React from "react";
import { AboutmeLayout } from "../../style/layout";
import { useAppContext } from "../appprovider";
import { useStyles } from "../../style/abotmeStyle/about_style";
import AboutmeMyImg from "./aboutmeMyImg";
import AboutmeMyInfo from "./aboutmeMyInfo";
import AboutmeAdress from "./aboutmeAdress";

const AboutMe = () => {
  const { activeStep, setActiveStep, themeLight } = useAppContext();
  const classes = useStyles();

  return (
    <div id="Aboutme">
      <AboutmeLayout themeLight={themeLight}>
        <div className={classes.Container} key={activeStep}>
          <AboutmeMyImg classes={classes} />
          <AboutmeMyInfo classes={classes} />
          <AboutmeAdress classes={classes} />
        </div>
      </AboutmeLayout>
    </div>
  );
};
export default AboutMe;
