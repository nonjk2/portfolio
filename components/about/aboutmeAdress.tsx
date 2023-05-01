import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import {
  FrontAboutMeOne,
  FrontAboutMeTwo,
  MyAboutAddContainer,
  MyAboutSmallPaper,
  MyAboutSmallPaperContainer,
  Paper,
  SmallpaperContainer,
} from "../../styles/abotmeStyle/about_style";

const AboutmeAdress: React.FC = () => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    const location = new naver.maps.LatLng(37.5162, 126.8968);
    const mapOptions = {
      center: location,
      zoom: 13,
      zoomControl: false,
      scrollWheel: false,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker = new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  const myinfoCompo = (Imo: React.ElementType, up: string, down: string) => {
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
  return (
    <MyAboutAddContainer>
      <MyAboutSmallPaperContainer>
        <SmallpaperContainer>
          <Paper className="paper">
            <FrontAboutMeOne>
              <MyAboutSmallPaper>
                <div
                  style={{
                    lineHeight: "200%",
                  }}
                >
                  <Typography className="InfoName" variant="h2">
                    Adress
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 auto",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </MyAboutSmallPaper>
            </FrontAboutMeOne>
            <FrontAboutMeTwo>
              <div
                className="aboutInfoMap"
                id="map"
                ref={mapElement}
                style={{
                  position: "absolute",
                  // opacity: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 15,
                  transition: "all 0.2s",
                }}
              />
            </FrontAboutMeTwo>
          </Paper>
        </SmallpaperContainer>
      </MyAboutSmallPaperContainer>
    </MyAboutAddContainer>
  );
};
export default AboutmeAdress;
