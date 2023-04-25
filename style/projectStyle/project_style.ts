import Slider from "react-slick";
import styled from "styled-components";

/// 캐러셀 ///
export const StyledSlider = styled(Slider)`
  padding: 0;
  a {
    color: ${({ muiTheme }) => muiTheme.palette.primary.main};
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-center .project {
    opacity: 1;
    height: 80vh;
    /* width: 100%; */
  }
  .project {
    opacity: 0.5;
  }
  .projectBox {
    display: flex;
    padding: 20px;
  }
  .projectimgBox {
    position: relative;
    flex: 1;
    margin: 50px;
    height: 70vh;
    width: auto;
    padding: 5px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
    img {
      width: 100%;
      height: 100%;
      position: relative !important;
      object-fit: contain;
    }
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

export const ProjectPaper = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(255, 255, 255, 0.13);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  border-radius: 15; */
  /* transition: "transform 0.2s"; */
  /* transform: "rotateY(0deg)"; */
  /* color: theme.palette.primary.main; */
`;
