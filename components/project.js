import React, { useRef, forwardRef } from "react";

import { jsx, css, keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import AppLayout from "./appLayout";
import { ProjectLayout } from "../style/layout";

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const Project = forwardRef((props, ref) => {
  // const {handleOnWheel} = props;
  return (
    <ProjectLayout id="Project" ref={ref}>
      <Box {...props} sx={{ animation: `${fadeIn} 1s forwards` }}>
        <div>asdfasdfasdf</div>
      </Box>
    </ProjectLayout>
  );
});

export default Project;
