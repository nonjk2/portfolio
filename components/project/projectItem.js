import React, { useRef } from "react";
import Slider from "react-slick";
import { Image } from "next";
import { KeyboardArrowRight, KeyboardArrowLeft, GitHub } from "@mui/icons-material";
import { Chip, Link } from "@mui/material";
import styled from "styled-components";
import { height } from "@mui/system";
import { useTheme } from "@material-ui/styles";
import { NextArrowbutton, PreArrowbutton } from "../../style/utilComponentStyle/button";
import { ProjectContainer } from "../../style/layout";
import { StyledSlider } from "../../style/projectStyle/project_style";
import ProjectCard from "./projectCard";
import useHandleProjectArrow from "../../hooks/useHandleProjectArrow";
import { useAppContext } from "../appprovider";

export const MyProject = ["마이헬스", "트리플랜", "포트폴리오 웹"];
const ProjectImg = [
  // require("./.next/static/images/myhealth_0-8f256d7aa83256e91de70694be15862e.png"),
  // require("../../util/data/triplan/triplan.png"),
  // require("../../util/data/myhealth/myhealth_2.png"),
];

const ProjectCarousel = (props) => {
  const { themeLight, activeStep } = useAppContext();
  const slideRef = useRef();
  const muiTheme = useTheme();
  useHandleProjectArrow(slideRef);

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
    <ProjectContainer timing={0.5}>
      <StyledSlider {...settings} ref={slideRef} muiTheme={muiTheme}>
        {MyProject.map((val, idx) => (
          <div className="project" key={val}>
            <ProjectCard projectname={val} idx={idx} />
          </div>
        ))}
      </StyledSlider>
    </ProjectContainer>
  );
};

export default ProjectCarousel;
