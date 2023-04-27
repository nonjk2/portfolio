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
            <FrontAboutMeOne />
            <FrontAboutMeTwo>
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
            </FrontAboutMeTwo>
          </Paper>
        </SmallpaperContainer>
      </MyAboutSmallPaperContainer>
    </MyAboutAddContainer>
  );
};
export default AboutmeAdress;
