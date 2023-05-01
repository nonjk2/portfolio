import React, { useEffect, useMemo, useRef } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GetStaticProps } from "next";
import AppLayout from "../components/appLayout";
import { AppProvider, useAppContext } from "../components/appprovider";
import Header from "../components/header/header";
import { getDataBase, getPagesBlock } from "./api/notion";
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
    }
  }, [activeStep]);
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

const MyApp = ({ otherProps, notionDataBase, blocks }) => (
  <AppProvider notionDataBase={notionDataBase} blocks={blocks}>
    <Home {...otherProps} />
  </AppProvider>
);
export const getStaticProps: GetStaticProps = async () => {
  const { notionDataBase } = await getDataBase();
  const { PageBlocks } = await getPagesBlock();
  // const blocks = await getBlocks("d80aed9e-5301-4baa-a026-417035d114e6");
  // const blocksWithChildren = await getBlocksWithChildren(blocks as Block[]);
  if (!notionDataBase) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blocks: PageBlocks,
      notionDataBase,
    },
    revalidate: 10,
  };
};

export default MyApp;
