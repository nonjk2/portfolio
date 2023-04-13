/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useRef, useCallback, useEffect, useState, useMemo, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import _, { debounce, throttle } from "lodash";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Button } from "@mui/material";
import Header from "./header";

import MainImage from "./mainImage";
import AboutMe from "./aboutme";
import Project from "./project";
import Skills from "./skills";
import { Outer } from "../style/layout";
import { Nextbutton } from "../style/button";
// import RalewayWoff2 from "./fonts/Raleway-Regular.woff2";
import { AppProvider, useAppContext } from "./appprovider";

function AppLayout({ children }) {
  const outerDivRef = useRef(0);
  const router = useRouter();
  const { activeStep, setActiveStep, themeLight, setThemeDark } = useAppContext();

  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];

  const handleKeyDown = useCallback(
    (event) => {
      event.preventDefault();
      if (event.key === "ArrowDown") {
        setActiveStep((prev) => (prev < Pages.length - 1 ? prev + 1 : 0));
      } else if (event.key === "ArrowUp") {
        setActiveStep((prev) => (prev > 0 ? prev - 1 : Pages.length - 1));
      }
    },
    [setActiveStep],
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  useEffect(() => {
    router.push(`${Pages[activeStep]}`);
  }, [activeStep]);

  const theme = createTheme({
    typography: {
      h2: { color: "#fff", fontfamily: "'Black Han Sans', sans-serif" },
      h6: { fontfamily: "'Montserrat', sans-serif" },
    },
    palette: {
      type: themeLight ? "light" : "dark",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Outer ref={outerDivRef}>
          <MainImage />
          <AboutMe />
          <Project />
          <Skills />
          {activeStep !== 3 ? (
            <Nextbutton onClick={() => setActiveStep((prev) => prev + 1)}>
              <a style={{ fontSize: 18 }}>{Pages[activeStep + 1].match(/\w/g)}</a>
              <KeyboardArrowDownIcon sx={{ opacity: 0.5 }} fontSize="large" />
            </Nextbutton>
          ) : (
            <Nextbutton onClick={() => setActiveStep(0)}>
              <a style={{ fontSize: 18 }}>{Pages[0].match(/\w/g)}</a>
              <KeyboardDoubleArrowUpIcon sx={{ opacity: 0.5 }} fontSize="large" />
            </Nextbutton>
          )}
          {/* <Button style={{ position: "absolute", right: 0 }} onClick={() => setThemeDark((prev) => !prev)}>
            {!themeLight ? "어둡게" : "밝게"}
          </Button> */}
          <div id="about" />
          {children}
        </Outer>
      </AppProvider>
    </ThemeProvider>
  );
}

AppLayout.propTypes = {};

export default AppLayout;
