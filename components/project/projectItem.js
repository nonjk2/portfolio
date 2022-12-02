import React, { useCallback, useState } from "react";
import Slider from "react-slick/lib/slider";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Button, Card } from "@mui/material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NextArrowbutton, Nextbutton, PreArrowbutton } from "../../style/button";

const MyProject = ["Triplan", "Myhealth", "EsPortPolio", "ETC", "ETC22"];

function ProjectCarousel(props) {
  const { themeLight } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const handleBeforeChange = useCallback((current, next) => {
    // setSlideIndex(next);
    // console.log(next);
  }, []);

  const settings = {
    centerMode: true,
    touchThreshold: 2000,
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    speed: 100,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: handleBeforeChange,
  };

  const StyledSlider = styled(Slider)`
    height: 100%;
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
      opacity: 0;
      display: none;
    }
    /* .slick-slide div {
      //슬라이더  컨텐츠
      cursor: pointer;
      height: 100%;
    } */
    .slide {
      transform: scale(0.8);
      transition: transform 300ms;
      opacity: 0.5;
    }

    .activeSlide {
      transform: scale(1.1);
      opacity: 1;
    }
  `;
  function ProjectCard(prop) {
    const { idx, projectname } = prop;
    return (
      <Box sx={{ minWidth: 275, padding: "10px" }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {idx}
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {idx}
            </Typography>
            <Typography variant="body2">
              <h1>{projectname}</h1>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
  function NextArrow(prop) {
    const { className, style, onClick } = prop;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <NextArrowbutton onClick={onClick} type="button" themeLight={themeLight}>
          <KeyboardArrowRight />
        </NextArrowbutton>
      </div>
    );
  }
  function PrevArrow(prop) {
    const { className, style, onClick } = prop;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <PreArrowbutton onClick={onClick} type="button" themeLight={themeLight}>
          <KeyboardArrowLeft />
        </PreArrowbutton>
      </div>
    );
  }

  return (
    <div style={{ width: "90%" }}>
      <StyledSlider {...settings}>
        {/* {MyProject.map((val, idx) => ( */}
        <div className="slide activeSlide">
          <h1>''11111</h1>
        </div>
        <div className="slide activeSlide">
          <h1>''22222</h1>
        </div>
        <div className="slide activeSlide">
          <h1>''33333</h1>
        </div>
        <div className="slide activeSlide">
          <h1>''4444</h1>
        </div>
        {/* ))} */}
      </StyledSlider>
    </div>
  );
}

export default ProjectCarousel;
