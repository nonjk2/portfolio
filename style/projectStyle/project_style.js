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
