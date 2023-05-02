import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { AddLocation } from "@mui/icons-material";
import {
  FrontAboutMeOne,
  FrontAboutMeTwo,
  MyAboutAddContainer,
  MyAboutSmallPaper,
  MyAboutSmallPaperContainer,
  Paper,
  SmallpaperContainer,
} from "../../styles/abotmeStyle/about_style";
import { myinfoCompo } from "../../utils/utilfunction";

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
                    flex: 1,
                  }}
                >
                  <Typography className="InfoName" variant="h2" color="#fff">
                    Adress
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 4,
                    flexDirection: "column",
                    margin: "0 auto",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {myinfoCompo(AddLocation, "주소", "서울시 영등포구 문래동")}
                </div>
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
