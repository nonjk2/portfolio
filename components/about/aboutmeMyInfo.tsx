import { Face, Mail, PermContactCalendar, Phone } from "@mui/icons-material/";
import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
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
import kakaotal from "../../public/kakaotal.jpeg";

const MyInfo = [
  { imoge: Face, tpye: "이름", value: "최은석" },
  { imoge: Mail, tpye: "이메일", value: "trgf456@naver.com" },
  { imoge: PermContactCalendar, tpye: "생년월일", value: "1994 . 05. 30" },
  { imoge: Phone, tpye: "전화", value: "010 - 9637 - 8406" },
];
const AboutmeMyInfo = () => {
  return (
    <MyAboutAddContainer className="aboutInfoPage">
      <MyAboutSmallPaperContainer>
        <SmallpaperContainer>
          <Paper className="paper">
            <FrontAboutMeOne>
              <MyAboutSmallPaper className="aboutInfo">
                <div
                  style={{
                    lineHeight: "200%",
                  }}
                >
                  <Typography className="InfoName" variant="h2" color="#fff">
                    INFO
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
                >
                  {MyInfo.map((e) => myinfoCompo(e.imoge, e.tpye, e.value))}
                </div>
              </MyAboutSmallPaper>
            </FrontAboutMeOne>
            <FrontAboutMeTwo>
              <div style={{ objectFit: "contain" }}>
                <Image alt="eunseok" src={kakaotal} fill />
              </div>
            </FrontAboutMeTwo>
          </Paper>
        </SmallpaperContainer>
      </MyAboutSmallPaperContainer>
    </MyAboutAddContainer>
  );
};
export default AboutmeMyInfo;
