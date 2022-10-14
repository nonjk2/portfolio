import React, { useRef, forwardRef } from "react";

import { SkillsLayout } from "../style/layout";

const Skills = forwardRef((props, ref) => {
  const { setActiveStep } = props;
  return (
    <SkillsLayout id="Skills" ref={ref}>
      Skills
    </SkillsLayout>
  );
});

export default Skills;
