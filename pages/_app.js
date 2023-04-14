/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import "../style/global.css";
import "../style/slickslide.css";
import "../style/slick-theme.css";
import { CssBaseline } from "@mui/material";
import useSmoothScroll from "../hooks/useSmoothScroll";

const Portpolio = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="title" />
        <title>최은석's 포트폴리오</title>
        <Script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=idk2vbhrq4"
        />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default Portpolio;
