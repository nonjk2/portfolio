import React, { MutableRefObject, forwardRef } from "react";

import { SkillsLayout } from "../style/layout";

const SkillsSection = forwardRef((props, ref: MutableRefObject<HTMLDivElement>) => {
  return (
    <SkillsLayout ref={ref} id="Skills">
      Skills
    </SkillsLayout>
  );
});

export default SkillsSection;
