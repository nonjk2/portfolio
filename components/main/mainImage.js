import React, { forwardRef } from "react";
import { useTheme } from "@material-ui/core";
import { Typography } from "@mui/material";
import { InnerImageDiv, MainImageLayout } from "../../style/layout";
import { StyledTypist } from "../../style/utilComponentStyle/text";
import MainBackground from "./mainback";
import MainBackgroundTwo from "./mainbackSec";
import { useAppContext } from "../appprovider";

const MainImage = forwardRef((props, ref) => {
  const sentences2 = [`삐용삐용삐용 삐용`, `예이예이예이예이`, `신입 프론트엔드 개발자`];
  const { activeStep, setActiveStep, themeLight } = useAppContext();
  const muiTheme = useTheme();
  return (
    <MainImageLayout id="Main" ref={ref} themeLight={themeLight}>
      {themeLight ? <MainBackground /> : <MainBackgroundTwo />}
      <InnerImageDiv>
        <div>
          <Typography variant="h2">안녕하세요</Typography>
          <br />
          <StyledTypist sentences={sentences2} loop={false} />
          <br />
          <Typography>최은석입니다</Typography>
        </div>
      </InnerImageDiv>
    </MainImageLayout>
  );
});

export default MainImage;
