import React, { useRef, forwardRef } from "react";

import { SkillsLayout } from "../style/layout";

const Skills = forwardRef((props, ref) => {
  const { setActiveStep, themeLight } = props;
  return (
    <SkillsLayout id="Skills" ref={ref} themeLight={themeLight}>
      Skills
    </SkillsLayout>
  );
});

export default Skills;
