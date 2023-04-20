import React from "react";
import { Typography } from "@mui/material";
import { InnerImageDiv, MainImageLayout } from "../style/layout";

const MainImage = () => {
  return (
    <MainImageLayout id="Main">
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
};

export default MainImage;