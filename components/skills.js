import React, { useRef, forwardRef } from "react";
import AppLayout from "./appLayout";
import { SkillsLayout } from "../style/layout";

const Skills = forwardRef((props, ref) => {
  // const {handleOnWheel} = props;
  return (
    <SkillsLayout id="Skills" ref={ref}>
      Skills
    </SkillsLayout>
  );
});

export default Skills;
