import React from "react";
import { Chip, Link } from "@material-ui/core";
import { GitHub } from "@mui/icons-material";
import { MyProject } from "./projectItem";

const ProjectCard = (prop) => {
  const { idx, projectname } = prop;

  const AboutMyProject = [
    {
      projectname: "마이헬스",
      projectAbout:
        "여행 계획을 세우는데 어려움을 겪는 사람들을 위해 \n 쉽고 빠르게 여행 계획을 세울 수있도록 도와주는 앱",
      projectAboutUtil: `✔ 지도에서 위치등록을 통해 한눈에 동선을 파악할 수 있어요! \n
      ✔ 체크리스트를 통해 여행에 필요한 물품들을 꼼꼼하게 확인할 수 있어요! \n
      ✔ 여행에 소비한 경비와 간단한 메모작성을 통해 여행 경비 정산을 쉽게 할 수 있어요! \n
      ✔ 친구와 함께 여행일정 공유를 할 수 있어요!
      `,
    },
  ];

  return (
    <div className="projectBox">
      <div className="projectimgBox">
        <image src="/myhealth.png" width="100%" height="100%" alt="Eunseokimg" />
      </div>
      <div className="projectinfoBox">
        <div style={{ flex: 1, width: "100%", paddingBottom: "5px" }}>
          <a style={{ fontSize: 40, textAlign: "center", fontFamily: "'Dongle', sans-serif" }}>
            {MyProject[idx]}
          </a>
        </div>
        <div
          style={{
            flex: 8,
            borderTop: "1.5px solid rgba(0,0,0,0.15)",
            margin: "0 15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 0.5, marginTop: 10 }}>
            <a style={{ lineHeight: 1, fontSize: 28, fontFamily: "'Dongle', sans-serif" }}>
              {AboutMyProject[0].projectAbout}
            </a>
          </div>
          <div style={{ flex: 1.3, display: "flex" }}>
            <div style={{ flex: 1, textAlign: "left" }}>
              <a style={{ fontSize: 11 }}>{AboutMyProject[0].projectAboutUtil}</a>
            </div>
            <div style={{ flex: 1, textAlign: "left", paddingLeft: 10, wordBreak: "break-all" }}>
              <a style={{ fontSize: 15, lineHeight: 2 }}>
                ✅ 기간 : 2021.11 ~ 2022.03 (3개월) <br />
                ✅ 프로젝트 종류 : 사이드 프로젝트 (4인) <br />
              </a>
              <div style={{ backgroundColor: "red" }}>
                <a>*작업 부분* </a>
                <br />
                <a>레이아웃구성</a>
                <br />
                <a>레이아웃구성</a>
                <br />
                <a>레이아웃구성</a>
              </div>
            </div>
          </div>

          {/* 사용스텍 */}

          <div style={{ flex: 1, display: "flex" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <div style={{ marginTop: 5 }}>
                <Chip label="프론트엔드" size="small" sx={{ marginRight: 0.5 }} />
                <Chip label="기획" size="small" sx={{ marginRight: 0.5 }} />
              </div>
              <div style={{ marginTop: 5 }}>
                <Chip label="React-Native" size="small" color="primary" sx={{ marginRight: 0.5 }} />
                <Chip label="Typescript" size="small" sx={{ marginRight: 0.5 }} />
              </div>
            </div>

            {/* 프로젝트 경로 아이콘 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.13)",
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Link
                  href="https://github.com"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/200px-Notion-logo.svg.png?20220918151013"
                    alt="노션"
                    width="30px"
                    height="30px"
                  />
                </Link>
              </div>
              <div
                style={{
                  flex: 1,
                }}
              >
                <Link
                  href="https://github.com/nonjk2"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <GitHub style={{ fontSize: "30", color: "#000" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
