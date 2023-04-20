import React, { useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Outer } from "../style/layout";
import { Nextbutton } from "../style/utilComponentStyle/button";
import { useAppContext } from "./appprovider";
import useHandleKeyDown from "../hooks/useHandlekeyDown";
import useWheelHandler from "../hooks/useHandleScroll";
import createMyTheme from "../style/theme";
import useSmoothScroll from "../hooks/useSmoothScroll";

const AppLayout = ({ children }) => {
  const { activeStep, setActiveStep, themeLight } = useAppContext();
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const theme = createMyTheme({ themeLight, activeStep });

  useHandleKeyDown(setActiveStep, Pages);
  useWheelHandler(outerDivRef, Pages);
  useSmoothScroll();

  const handleRouting = useCallback(() => {
    if (Pages[activeStep]) {
      router.push(`${Pages[activeStep]}`, undefined, { scroll: false });
    }
  }, [activeStep]);

  useEffect(() => {
    handleRouting();
  }, [activeStep]);

  return (
    <Outer ref={outerDivRef}>
      {children}
      {activeStep !== 3 ? (
        <Nextbutton theme={theme} onClick={() => setActiveStep(activeStep + 1)}>
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
      {/* {children} */}
    </Outer>
  );
};

export default AppLayout;
