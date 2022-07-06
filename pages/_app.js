/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../style/global.css";
import { useRouter } from "next/router";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const setSmoothScroll = (isSmooth) => {
  document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
};
function Portpolio({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" key="title" />
        <title>최은석's 포트폴리오</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

Portpolio.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default Portpolio;
