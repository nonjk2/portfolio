import React, { useEffect, useRef } from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { NextArrowbutton, PreArrowbutton } from "../../style/utilComponentStyle/button";
import { ProjectContainer } from "../../style/layout";
import { StyledSlider } from "../../style/projectStyle/project_style";
import ProjectCard from "./projectCard";
import useHandleProjectArrow from "../../hooks/useHandleProjectArrow";
import { useAppContext } from "../appprovider";

export const MyProject = ["마이헬스", "트리플랜", "포트폴리오 웹"];

const ProjectCarousel = ({ notionDataBase }) => {
  const { themeLight } = useAppContext();
  const slideRef = useRef();
  const muiTheme = useTheme();
  useHandleProjectArrow(slideRef);
  useEffect(() => {
    console.log("ProjectPage : ", notionDataBase);
  }, [notionDataBase]);
  const NextArrow = (prop) => {
    const { className, style, onClick } = prop;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <NextArrowbutton onClick={onClick} type="button" themeLight={themeLight}>
          <KeyboardArrowRight fontSize="large" />
        </NextArrowbutton>
      </div>
    );
  };
  /** 이전 버튼 */
  const PrevArrow = (prop) => {
    const { className, style, onClick } = prop;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <PreArrowbutton onClick={onClick} type="button" themeLight={themeLight}>
          <KeyboardArrowLeft fontSize="large" />
        </PreArrowbutton>
      </div>
    );
  };
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  /// //박스가 여러개///

  return (
    <ProjectContainer>
      <StyledSlider {...settings} ref={slideRef} muiTheme={muiTheme}>
        {notionDataBase &&
          notionDataBase.map((val, idx) => (
            <div className="project" key={val}>
              <ProjectCard projectname={val} idx={idx} />
            </div>
          ))}
        {/* {MyProject} */}
      </StyledSlider>
    </ProjectContainer>
  );
};

export default ProjectCarousel;