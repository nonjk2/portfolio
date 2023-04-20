import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import AppLayout from "../components/appLayout";
import { useAppContext } from "../components/appprovider";
import createMyTheme from "../style/theme";
import Header from "../components/header/header";
import { getDataBase } from "./api/notion";
import MainImage from "./mainImage";
import AboutMe from "./aboutme";
import Project from "./project";
import Skills from "./skills";
import useHandleKeyDown from "../hooks/useHandlekeyDown";

const Home = ({ notionDataBase }) => {
  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const { themeLight, activeStep, setActiveStep } = useAppContext();
  const theme = useMemo(() => createTheme(createMyTheme(themeLight, activeStep)), [themeLight, activeStep]);
  useHandleKeyDown(setActiveStep, Pages);

  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <AppLayout>
          <MainImage />
          <AboutMe />
          <Project notionDataBase={notionDataBase} />
          <Skills />
        </AppLayout>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};
export const getStaticProps = async () => {
  const { notionDataBase } = await getDataBase();
  if (!notionDataBase) {
    return {
      notfound: true,
    };
  }
  return {
    props: {
      notionDataBase,
    },
  };
};

export default Home;
