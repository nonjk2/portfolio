/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useRef, useCallback, useEffect, useState, useMemo, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import _, { debounce, throttle } from "lodash";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import Header from "./header";
import MainImage from "./mainImage";
import AboutMe from "./aboutme";
import Project from "./project";
import Skills from "./skills";
import { Outer } from "../style/layout";
// import RalewayWoff2 from "./fonts/Raleway-Regular.woff2";

function AppLayout({ children }) {
  const outerDivRef = useRef(0);
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const delay = useCallback(
    _.throttle(
      (page) => {
        page === "down"
          ? setActiveStep((prev) => (prev === 3 ? 3 : prev + 1))
          : setActiveStep((prev) => (prev === 0 ? 0 : prev - 1));
      },
      1000,
      { trailing: false },
    ),
    [],
  );

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      if (deltaY > 0) {
        delay("down");
      } else if (deltaY < 0) {
        delay("up");
      }
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
      // fontFamily: "Raleway, Arial",
      h2: { color: "#fff", fontfamily: "'Black Han Sans', sans-serif" },
      h6: { fontfamily: "'Montserrat', sans-serif" },
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
      <Outer ref={outerDivRef}>
        <Header Pages={Pages} activeStep={activeStep} setActiveStep={setActiveStep} />
        <MainImage activeStep={activeStep} />
        <AboutMe />
        <Project />
        <Skills />
        <div id="about" />
        {children}
      </Outer>
    </ThemeProvider>
  );
}

AppLayout.propTypes = {};

export default AppLayout;
