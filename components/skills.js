import React, { useRef, forwardRef } from "react";

import { SkillsLayout } from "../style/layout";
import { useAppContext } from "./appprovider";

const Skills = forwardRef((props, ref) => {
  const { setActiveStep, themeLight } = useAppContext();
  return (
    <SkillsLayout id="Skills" ref={ref} themeLight={themeLight}>
      Skills
    </SkillsLayout>
  );
});

export default Skills;
