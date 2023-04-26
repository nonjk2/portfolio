import { LocationOn, PermContactCalendar, Phone, Favorite } from "@mui/icons-material/";
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line import/no-unresolved
import { useAppContext } from "../appprovider";
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
  const { activeStep } = useAppContext();
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { naver } = window as any;
    if (!mapElement.current || !naver) return;
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker = new naver.maps.Marker({
      position: location,
      map,
    });
  }, [activeStep]);

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
                  <h1 style={{ fontWeight: "bold" }}>TMI</h1>
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
                  {myinfoCompo(LocationOn, "주소", "서울시 영등포구 문래동")}
                  {myinfoCompo(Favorite, "취미", "카페에서 커피마시면서 소설읽기")}
                  {myinfoCompo(PermContactCalendar, "생년월일", "1994 . 05. 30")}
                  {myinfoCompo(Phone, "전화", "010 - 9637 - 8406")}
                </div>
              </MyAboutSmallPaper>
            </FrontAboutMeOne>
            <FrontAboutMeTwo>
              <div id="map" ref={mapElement} style={{ minHeight: "100%", borderRadius: 15 }} />
            </FrontAboutMeTwo>
          </Paper>
        </SmallpaperContainer>
      </MyAboutSmallPaperContainer>
    </MyAboutAddContainer>
  );
};
export default AboutmeAdress;
