import React, { useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import Typist from "react-text-typist";
import Link from "next/link";

import { Typography } from "@material-ui/core";
import Header from "./header";
import { InnerImageDiv, MainImageLayout, MainImgdiv } from "../style/layout";
import { Mainimg1 } from "../style/image";
import { StyledTypist } from "../style/text";

import { MainMorebutton } from "../style/button";
import MainBackground from "./mainback";

const MainImage = forwardRef((props, ref) => {
  const sentences2 = [`삐용삐용삐용 삐용`, `예이예이예이예이`, `신입 프론트엔드 개발자`];

  return (
    <MainImageLayout id="Main" ref={ref}>
      <MainBackground />
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
