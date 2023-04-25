import React, { useRef, ReactNode } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Outer } from "../style/layout";
import { Nextbutton } from "../style/utilComponentStyle/button";
import { useAppContext } from "./appprovider";

import createMyTheme from "../style/theme";

interface AppLayoutProps {
  children: ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { activeStep, setActiveStep, themeLight } = useAppContext();
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const Pages = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const theme = createMyTheme({ themeLight, activeStep });

  return (
    <ReactLenis root options={{}}>
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
      </Outer>
    </ReactLenis>
  );
};

export default AppLayout;
