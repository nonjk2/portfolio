/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../style/global.css";
import "../style/slickslide.css";
import "../style/slick-theme.css";
import { useRouter } from "next/router";
import useSmoothScroll from "../hooks/useSmoothScroll";

const Portpolio = ({ Component, pageProps }) => {
  useSmoothScroll();

  return (
    <>
      <Head>
        <meta charSet="utf-8" key="title" />
        <title>최은석's 포트폴리오</title>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=idk2vbhrq4"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Portpolio;
