import React, { useRef } from "react";
import Slider from "react-slick";
import { KeyboardArrowRight, KeyboardArrowLeft, GitHub } from "@mui/icons-material";
import { Chip, Link } from "@mui/material";
import styled from "styled-components";
import { height } from "@mui/system";
import { NextArrowbutton, PreArrowbutton } from "../../style/button";
import { ProjectContainer } from "../../style/layout";

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

const MyProject = ["마이헬스", "트리플랜", "포트폴리오 웹"];
const ProjectImg = [
  require("../../util/data/myhealth/myhealth_0.png"),
  require("../../util/data/triplan/triplan.png"),
  require("../../util/data/myhealth/myhealth_2.png"),
];

const StyledSlider = styled(Slider)`
  /* height: 100%;
  width: 100%; */
  padding: 0;
  /* position: relative; */
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-center .project {
    opacity: 1;
    height: 80vh;
    width: 100%;
  }
  .project {
    opacity: 0;
  }
  .projectBox {
    display: flex;
    /* justify-content: center; */
    padding: 20px;
  }
  .projectimgBox {
    flex: 1;
    margin: 50px;
    height: 70vh;
    padding: 5px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  }
  .projectinfoBox {
    flex: 2;
    margin: 50px;
    height: 70vh;
    padding: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  }
`;

function ProjectCarousel(props) {
  const { themeLight, activeStep } = props;
  const slideRef = useRef();
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  /** 다음 버튼 */
  function NextArrow(prop) {
    const { className, style, onClick } = prop;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <NextArrowbutton onClick={onClick} type="button" themeLight={themeLight}>
          <KeyboardArrowRight fontSize="large" />
        </NextArrowbutton>
      </div>
    );
  }
  /** 이전 버튼 */
  function PrevArrow(prop) {
    const { className, style, onClick } = prop;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <PreArrowbutton onClick={onClick} type="button" themeLight={themeLight}>
          <KeyboardArrowLeft fontSize="large" />
        </PreArrowbutton>
      </div>
    );
  }

  /// //박스가 여러개///
  function ProjectCard(prop) {
    const { idx, projectname } = prop;
    return (
      <div className="projectBox">
        <div className="projectimgBox">
          <img src={ProjectImg[idx]} width="100%" height="100%" alt="Eunseokimg" style={{}} />
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
  }

  return (
    <ProjectContainer timing={0.5}>
      <StyledSlider {...settings} ref={slideRef}>
        {MyProject.map((val, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="project" key={idx}>
            <ProjectCard projectname={val} idx={idx} />
          </div>
        ))}
      </StyledSlider>
    </ProjectContainer>
  );
}

export default ProjectCarousel;
