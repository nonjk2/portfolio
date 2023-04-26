import React, { useEffect, useMemo, useRef } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { GetStaticProps } from "next";
import AppLayout from "../components/appLayout";
import { useAppContext } from "../components/appprovider";

import Header from "../components/header/header";
import { getDataBase } from "./api/notion";

import useHandleKeyDown from "../hooks/useHandlekeyDown";

import { useIntersectionSetActiveStep } from "../hooks/useIntersectionObserver";
import MainImageSection from "../sections/mainSection";
import AboutMeSections from "../sections/aboutmeSection";
import ProjectSection from "../sections/projectSection";
import SkillsSection from "../sections/skillsSection";
import createMyTheme from "../styles/theme";

const Home = () => {
  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const { themeLight, activeStep, setActiveStep } = useAppContext();
  const theme = useMemo(
    () => createTheme(createMyTheme({ themeLight, activeStep })),
    [themeLight, activeStep],
  );
  useHandleKeyDown(setActiveStep, Pages);
  const sectionRefs = Pages.map(() => useRef<HTMLDivElement | null>(null));
  useIntersectionSetActiveStep(setActiveStep, sectionRefs);
  useEffect(() => {
    if (Pages[activeStep]) {
      window.history.pushState(null, null, Pages[activeStep]);
      // router.replace(Pages[activeStep], undefined, { shallow: true, scroll: true });
    }
  }, [activeStep]);

  // useSmoothScroll(500, "easeInOutCubic");
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <AppLayout>
          <MainImageSection ref={sectionRefs[0]} />
          <AboutMeSections ref={sectionRefs[1]} />
          <ProjectSection ref={sectionRefs[2]} />
          <SkillsSection ref={sectionRefs[3]} />
        </AppLayout>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const { notionDataBase } = await getDataBase();
  if (!notionDataBase) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      notionDataBase,
    },
  };
};

export default Home;
