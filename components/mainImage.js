import React, { useCallback, forwardRef } from "react";
import { Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { InnerImageDiv, MainImageLayout, MainImgdiv } from "../style/layout";
import { StyledTypist } from "../style/text";
import { MainMorebutton, Nextbutton } from "../style/button";
import MainBackground from "./backgorund/mainback";
import MainBackgroundTwo from "./backgorund/mainbackSec";

const MainImage = forwardRef((props, ref) => {
  const sentences2 = [`삐용삐용삐용 삐용`, `예이예이예이예이`, `신입 프론트엔드 개발자`];
  const { activeStep, setActiveStep, themeLight } = props;
  return (
    <MainImageLayout id="Main" ref={ref} themeLight={themeLight}>
      {themeLight ? <MainBackground /> : <MainBackgroundTwo />}
      <InnerImageDiv>
        <div>
          <Typography variant="h2">안녕하세요</Typography>
          <br />
          <StyledTypist sentences={sentences2} loop={false} />
          <br />
          <Typography variant="h2">최은석입니다</Typography>
        </div>
      </InnerImageDiv>
    </MainImageLayout>
  );
});

MainImage.propTypes = {};

export default MainImage;
