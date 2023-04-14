import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import MainImage from "./main/mainImage";
import AboutMe from "./about/aboutme";
import Project from "./project/project";
import Skills from "./skills";
import { Outer } from "../style/layout";
import { Nextbutton } from "../style/utilComponentStyle/button";
import { useAppContext } from "./appprovider";
import useHandleKeyDown from "../hooks/useHandlekeyDown";
import useWheelHandler from "../hooks/useHandleScroll";
import createMyTheme from "../style/theme";
import useSmoothScroll from "../hooks/useSmoothScroll";

const AppLayout = ({ children }) => {
  const outerDivRef = useRef(0);
  const router = useRouter();
  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const { activeStep, setActiveStep, themeLight, setThemeDark } = useAppContext();
  const theme = createMyTheme(themeLight);
  useHandleKeyDown(setActiveStep, Pages);
  useWheelHandler(outerDivRef, Pages);
  useSmoothScroll();

  useEffect(() => {
    router.push(`${Pages[activeStep]}`, undefined, { scroll: false, shallow: true });
  }, [activeStep]);
  return (
    <Outer ref={outerDivRef}>
      <MainImage />
      <AboutMe />
      <Project />
      <Skills />
      {activeStep !== 3 ? (
        <Nextbutton theme={theme} onClick={() => setActiveStep((prev) => prev + 1)}>
          <a style={{ fontSize: 18 }}>{Pages[activeStep + 1].match(/\w/g)}</a>
          <KeyboardArrowDownIcon sx={{ opacity: 0.5 }} fontSize="large" />
        </Nextbutton>
      ) : (
        <Nextbutton theme={theme} onClick={() => setActiveStep(0)}>
          <a style={{ fontSize: 18 }}>{Pages[0].match(/\w/g)}</a>
          <KeyboardDoubleArrowUpIcon sx={{ opacity: 0.5 }} fontSize="large" />
        </Nextbutton>
      )}

      <div id="about" />
      {children}
    </Outer>
  );
};

export default AppLayout;
