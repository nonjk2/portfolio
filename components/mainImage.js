import React, { forwardRef } from "react";
import { useTheme } from "@material-ui/core";
import { InnerImageDiv, MainImageLayout } from "../style/layout";
import { StyledTypist, TypographyMain } from "../style/utilComponentStyle/text";
import MainBackground from "./backgorund/mainback";
import MainBackgroundTwo from "./backgorund/mainbackSec";
import { useAppContext } from "./appprovider";

const MainImage = forwardRef((props, ref) => {
  const sentences2 = [`삐용삐용삐용 삐용`, `예이예이예이예이`, `신입 프론트엔드 개발자`];
  const { activeStep, setActiveStep, themeLight } = useAppContext();
  const muiTheme = useTheme();
  return (
    <MainImageLayout id="Main" ref={ref} themeLight={themeLight} muiTheme={muiTheme}>
      {themeLight ? <MainBackground /> : <MainBackgroundTwo />}
      <InnerImageDiv muiTheme={muiTheme}>
        <div>
          <TypographyMain muiTheme={muiTheme} variant="h2">
            안녕하세요
          </TypographyMain>
          <br />
          <StyledTypist muiTheme={muiTheme} sentences={sentences2} loop={false} />
          <br />
          <TypographyMain muiTheme={muiTheme} variant="h2">
            최은석입니다
          </TypographyMain>
        </div>
      </InnerImageDiv>
    </MainImageLayout>
  );
});

export default MainImage;
