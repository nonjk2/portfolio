import React, { forwardRef } from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

import { InnerImageDiv, MainImageLayout } from "../../style/layout";
import MainBackground from "./mainback";
import MainBackgroundTwo from "./mainbackSec";
import { useAppContext } from "../appprovider";

const StyledTypist = styled(Typography)`
  font-size: 4rem;
  color: ${({ themeLight }) => (themeLight ? "#000" : "#fff")};
`;

const MainImage = forwardRef((props, ref) => {
  const sentences2 = [`ㅁㄴㅇㄹㅁㄴㅇㄹ`, `모르는 것을 알고싶은`, `프론트엔드 개발자`];
  const { activeStep, setActiveStep, themeLight } = useAppContext();

  return (
    <MainImageLayout id="Main" ref={ref} themeLight={themeLight}>
      {/* {themeLight ? <MainBackground /> : <MainBackgroundTwo />} */}
      <MainBackground />
      <InnerImageDiv>
        <div>
          <Typography variant="h2">안녕하세요</Typography>
          <br />
          {/* <StyledTypist strings={sentences2} typeSpeed={40} backSpeed={50} loop themeLight={themeLight} /> */}
          <br />
          <Typography variant="h3">최은석입니다</Typography>
        </div>
      </InnerImageDiv>
    </MainImageLayout>
  );
});

export default MainImage;
