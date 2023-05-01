import { Face, Mail, PermContactCalendar, Phone } from "@mui/icons-material/";
import { Box, Typography } from "@mui/material";
import React from "react";
import {
  MyAboutAddContainer,
  MyAboutSmallPaper,
  MyAboutSmallPaperContainer,
  Paper,
} from "../../styles/abotmeStyle/about_style";

const MyInfo = [
  { imoge: Face, tpye: "이름", value: "최은석" },
  { imoge: Mail, tpye: "이메일", value: "trgf456@naver.com" },
  { imoge: PermContactCalendar, tpye: "생년월일", value: "1994 . 05. 30" },
  { imoge: Phone, tpye: "전화", value: "010 - 9637 - 8406" },
];
const AboutmeMyInfo = () => {
  const myinfoCompo = (Imo: React.ElementType, up: string, down: string) => {
    return (
      <Box
        key={up}
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          width: "100%",
          margin: "0 auto",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ paddingRight: "10px", color: "#000" }}>
          <Imo />
        </div>
        <div style={{ lineHeight: "150%" }}>
          <div style={{ fontWeight: "700", color: "#000" }}>{up}</div>
          <div style={{ fontWeight: "200", color: "#000" }}>{down}</div>
        </div>
      </Box>
    );
  };

  return (
    <MyAboutAddContainer className="aboutInfoPage">
      <MyAboutSmallPaperContainer>
        <Paper className="paper">
          {/* <FrontAboutMeOne> */}

          <MyAboutSmallPaper className="aboutInfo">
            <div
              style={{
                lineHeight: "200%",
              }}
            >
              <Typography className="InfoName" variant="h2">
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
          {/* </FrontAboutMeOne> */}
        </Paper>
      </MyAboutSmallPaperContainer>
    </MyAboutAddContainer>
  );
};
export default AboutmeMyInfo;
