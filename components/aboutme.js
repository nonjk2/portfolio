/* eslint-disable react/button-has-type */
import React, { useRef, forwardRef, useCallback, useState, useEffect, useLayoutEffect } from "react";
import { Avatar, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import styled, { keyframes } from "styled-components";
import { LocationOn, Face, Mail, GitHub, PermContactCalendar, Phone } from "@mui/icons-material/";
import { Link } from "@mui/material";
import { AboutmeLayout, MyAboutSmallPaperTwo, PaperContainer } from "../style/layout";
import { Nextbutton } from "../style/button";

function AboutMe(props) {
  const [toggle, setToggle] = useState(false);
  const [OnMouse, setOnMouse] = useState(0);
  const [aboutpage, setaboutpage] = useState([false, false, false]);
  const { activeStep, setActiveStep } = props;
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5162, 126.8968);
    const mapOptions = {
      center: location,
      zoom: 13,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    const marker = new naver.maps.Marker({
      position: location,
      map,
    });
  }, [activeStep]);
  const useStyles = makeStyles((theme) => ({
    Container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paperContainer: {
      perspective: "1000px",
      width: "40vw",
      height: "60vh",
      "&:hover , &:focus": {
        "& $paper": { transform: "rotateY(180deg)" },
      },
      // margin: "5px",
    },
    SmallpaperContainer: {
      perspective: "1000px",
      flex: "1",
      "&:hover , &:focus": {
        "& $paper": { transform: "rotateY(180deg)" },
      },
      // margin: "5px",
    },
    paper: {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.13)",
      // backdropFilter: "blur(2px)",
      border: "2px solid rgba(255,255,255,0.1)",
      boxShadow: "0 0 40px rgba(8,7,16,0.1)",
      borderRadius: 15,
      transition: "transform 0.3s ease-in-out",
      transformStyle: "preserve-3d",
      transform: "rotateY(0deg)",

      // zIndex: "3",
    },
    /** 카드 플립효과 */
    frontAboutMeOne: {
      backfaceVisibility: "hidden",
      MozBackfaceVisibility: "hidden",
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: "2",
    },
    /** 카드 플립효과 뒷면 */
    frontAboutMeTwo: {
      backfaceVisibility: "hidden",
      MozBackfaceVisibility: "hidden",
      borderRadius: 15,
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: "1",
      transform: "rotateY(180deg)",
    },
    eunImg: {
      objectFit: "cover",
      borderRadius: 15,
    },
    myAboutPaperContainer: {
      width: "20vw",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
    },
    myAboutAddContainer: {
      width: "30vw",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
    },
    myAboutPaper: {
      borderRadius: 15,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    myAboutSmallPaperContainer: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    myAboutSmallPaper: {
      // height: "25%",
      flex: "1",
      // margin: "5px",
      display: "flex",
      lineHeight: "50%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },

    bottompaper: {
      flex: "0.15",
      borderRadius: "30",
      marginTop: "5px",
      backgroundColor: "rgba(255, 255, 255, 0.13)",
      // backdropFilter: "blur(2px)",
      border: "2px solid rgba(255,255,255,0.1)",
      boxShadow: "0 0 40px rgba(8,7,16,0.1)",
      display: "flex",
      justifyContent: "center",
    },
  }));
  const myinfoCompo = (Imo, up, down) => {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          width: "100%",
          margin: "0 auto",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ paddingRight: "10px" }}>
          <Imo />
        </div>
        <div style={{ lineHeight: "150%" }}>
          <div style={{ fontWeight: "700" }}>{up}</div>
          <div style={{ fontWeight: "200" }}>{down}</div>
        </div>
      </div>
    );
  };
  const classes = useStyles();

  return (
    <div id="Aboutme">
      <AboutmeLayout>
        <div className={classes.Container} key={activeStep}>
          <PaperContainer className={classes.paperContainer} timing={2.1}>
            <div elevation={3} className={classes.paper}>
              <div className={classes.frontAboutMeOne}>
                <img
                  src="https://eundolhealth.s3.ap-northeast-2.amazonaws.com/undongs/1663595285111_IMG_6645.JPG"
                  width="100%"
                  height="100%"
                  alt="Eunseokimg"
                  className={classes.eunImg}
                />
              </div>
              <div className={classes.frontAboutMeTwo}>
                <Paper elevation={2} className={classes.myAboutPaper}>
                  <div>1234</div>
                </Paper>
              </div>
            </div>
          </PaperContainer>

          <div className={classes.myAboutPaperContainer}>
            <div className={classes.myAboutSmallPaperContainer}>
              <div className={classes.SmallpaperContainer}>
                <MyAboutSmallPaperTwo className={classes.paper} timing={1.3}>
                  <div className={classes.frontAboutMeOne}>
                    <div className={classes.myAboutSmallPaper}>
                      <div
                        style={{
                          lineHeight: "200%",
                        }}
                      >
                        <h1 style={{ fontWeight: "bold" }}>INFO</h1>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          // width: "100%",
                          margin: "0 auto",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {myinfoCompo(Face, "이름", "최은석")}
                        {myinfoCompo(Mail, "이메일", "trgf456@naver.com")}
                        {myinfoCompo(PermContactCalendar, "생년월일", "1994 . 05. 30")}
                        {myinfoCompo(Phone, "전화", "010 - 9637 - 8406")}
                      </div>
                    </div>
                  </div>
                  <div className={classes.frontAboutMeTwo}>
                    <img
                      width="100%"
                      height="100%"
                      src="https://eundolhealth.s3.ap-northeast-2.amazonaws.com/undongs/1665731167456_C38992CC-0D97-4ED8-BA2F-C84866C4E337.jpg"
                      alt="카카오톡"
                      className={classes.eunImg}
                    />
                  </div>
                </MyAboutSmallPaperTwo>
              </div>
              <MyAboutSmallPaperTwo className={classes.bottompaper} timing={1.3}>
                <Link
                  href="https://github.com/nonjk2"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <GitHub style={{ fontSize: "30" }} />
                </Link>
                <Link
                  href="https://github.com/nonjk2"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191.94">
                    <g>
                      <polygon
                        className="cls-1"
                        points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49"
                      />
                      <path
                        className="cls-1"
                        d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"
                      />
                    </g>
                  </svg>
                </Link>
              </MyAboutSmallPaperTwo>
            </div>
          </div>
          {/* 주소 paper */}
          <div className={classes.myAboutAddContainer}>
            <div className={classes.myAboutSmallPaperContainer}>
              <div className={classes.SmallpaperContainer}>
                <MyAboutSmallPaperTwo className={classes.paper} timing={1.1}>
                  <div className={classes.frontAboutMeOne}>
                    <div className={classes.myAboutSmallPaper}>
                      <LocationOn />
                      <h2>주소</h2>
                    </div>
                  </div>
                  <div className={classes.frontAboutMeTwo}>
                    <div ref={mapElement} style={{ minHeight: "100%", borderRadius: 15 }} />
                  </div>
                </MyAboutSmallPaperTwo>
              </div>
            </div>
          </div>
        </div>
      </AboutmeLayout>
    </div>
  );
}

export default AboutMe;
