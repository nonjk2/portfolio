import { Paper } from "@mui/material";
import styled, { keyframes } from "styled-components";

/// / 전체영역 ////

export const Outer = styled.div`
  margin: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

/// // 헤더영역 /////////// 헤더영역 /////////// 헤더영역 //////
export const LogoLayout = styled.div`
  float: left;
`;

export const HeaderLayout = styled.header`
  /* display: inline-block; */
  /* background-color: red; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0.9;
  z-index: 10;
`;

/// //메인 이미지 영역 /////////메인 이미지 영역 /////////메인 이미지 영역 ////

export const MainImageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.themeLight ? "linear-gradient(rgb(226, 242, 253), 50%, rgb(226, 242, 253))" : "rgb(36, 39, 63)"};
`;

export const InnerImageDiv = styled.div`
  width: 100%;
  margin: 0px 0px;
  text-align: center;
  padding: calc(4.5rem + 4.5rem) 4rem 4rem;
`;

export const InnerTextDiv = styled.div`
  margin: 0 0;
  text-align: center;
`;

export const MainImgdiv = styled.div`
  position: absolute;
  bottom: 2rem;

  width: 100%;
  height: 3rem;
  padding: 0 4rem;
`;
/// //소개페이지 영역 /////////소개페이지 영역 /////////소개페이지 영역 ////

export const AboutmeLayout = styled.div`
  height: 100vh;
  align-items: center;
  /* line-height: 100vh; */
  /* background: linear-gradient(rgb(226, 242, 253), 40%, white); */
  /* background: rgb(36, 39, 63); */
  background: ${(props) =>
    props.themeLight ? "linear-gradient(rgb(226, 242, 253), 50%, rgb(226, 242, 253))" : "rgb(36, 39, 63)"};
`;

export const ProjectLayout = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;

  align-items: center;
  justify-content: center;
  /* line-height: 100vh; */
  background: ${(props) =>
    props.themeLight ? "linear-gradient(rgb(226, 242, 253), 50%, rgb(226, 242, 253))" : "rgb(36, 39, 63)"};
`;

export const SkillsLayout = styled.div`
  height: 100vh;
  text-align: center;
  /* line-height: 100vh; */
  /* background: rgb(226, 242, 253); */
  background: ${(props) =>
    props.themeLight ? "linear-gradient(rgb(226, 242, 253), 50%, rgb(226, 242, 253))" : "rgb(36, 39, 63)"};
`;
export const move = keyframes`
	//단계 별로 변화를 주는 코드
	from{
    transform: translateY(100vh);
  }
  to{
    transform: translateY(0px);
  }
`;
export const HeaderLayoutTitle = styled.div`
  width: 100vw;
  height: 30px;

  text-align: center;
`;
export const TitleBox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;

  background: green;
  opacity: 1;
  animation: ${move} 2s 1s;
`;

export const MyAboutSmallPaperTwo = styled(Paper)`
  flex: 1;
  /* margin: 5px; */
  animation: ${move} ${(props) => props.timing}s 0s;
`;

export const PaperContainer = styled.div`
  animation: ${move} ${(props) => props.timing}s 0s;
`;

export const ProjectContainer = styled.div`
  /* width: 90%; */
  /* padding: 0; */
  animation: ${move} ${(props) => props.timing}s 0s;
`;
