/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Head from "next/head";
import Script from "next/script";
// import "../styles/global.css";
import "../styles/slickslide.css";
import "../styles/slick-theme.css";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "../styles/globalStyled";

const Portpolio = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="title" />
        <meta name="google-site-verification" content="9cLszJkbYvMljnQmvpOTzmVGAMUoDarOafMo9z7UWF8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="안녕하세요 프론트엔드 개발자 최은석입니다. 계속 발전해 나가는 개발의세계에서 새로운기술로부터 도태되지않고 오래된 기술로부터 중요한 필요성을 잊지않기위해 노력중입니다."
        />
        <meta name="author" content="프론트엔드 개발자 최은석" />
        <title>최은석's 포트폴리오</title>
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      />
      <GlobalStyles />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default Portpolio;
