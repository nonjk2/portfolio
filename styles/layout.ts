import Image from "next/image";
import styled, { keyframes } from "styled-components";

/// / 전체영역 ////
interface LayoutProps {
  activeStep: number;
}
export const Outer = styled.div`
  margin: 0;
`;

export const LogoLayout = styled.div`
  float: left;
`;
/// // 헤더영역 /////////// 헤더영역 /////////// 헤더영역 //////

export const HeaderLayout = styled.header`
  position: fixed;
  /* display: flex; */
  padding: 1.5rem;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0.9;
  z-index: 10;
`;

/// //메인 이미지 영역 /////////메인 이미지 영역 /////////메인 이미지 영역 ////

export const MainImageLayout = styled.div<LayoutProps>`
  /* position: ${({ activeStep }) => (activeStep === 0 ? "sticky" : "sticky")}; */
  position: relative;
  margin-bottom: -100vh;
  top: 0;
  width: 100%;
  height: 300vh;
`;

/// //소개페이지 영역 /////////소개페이지 영역 /////////소개페이지 영역 ////

export const AboutmeLayout = styled.div<LayoutProps>`
  /* position: ${({ activeStep }) => (activeStep === 1 ? "sticky" : "sticky")}; */
  position: relative;
  top: 0;
  margin-bottom: -100vh;
  /* display: flex; */
  height: 600vh;

  /* justify-content: center; */
`;
/// //프로젝트페이지 영역 /////////프로젝트페이지 영역 /////////프로젝트페이지 영역 ////
export const ProjectLayout = styled.div<LayoutProps>`
  /* position: ${({ activeStep }) => (activeStep === 2 ? "sticky" : "sticky")}; */
  position: relative;
  margin-bottom: -100vh;
  /* width: 100vw; */
  /* height: 500vh; */
`;
/// //스킬페이지 영역 /////////스킬페이지 영역 /////////스킬페이지 영역 ////
export const SkillsLayout = styled.div<LayoutProps>`
  /* position: ${({ activeStep }) => (activeStep === 3 ? "sticky" : "sticky")}; */
  position: relative;
  margin-bottom: -100vh;
  height: 300vh;
  text-align: center;
`;
export const InnerImageDivProject = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 100vh;
  /* padding: 1rem; */
  margin: 0px 0px;
  transition: all 0.2s;
`;
export const InnerImageDiv = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 100vh;
  /* padding: 1rem; */
  margin: 0px 0px;
  transition: all 0.2s;
`;
export const MainbackImageMe = styled(Image)`
  z-index: -2;
  width: 80%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: 50% 25%;
  opacity: 0.5;
  position: absolute;
  top: 20%;
  /* opacity: 0.6; */
  filter: blur(2px 10px);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4));
`;
export const MainbackImage = styled(Image)`
  /* width: 100%;
  height: 100%; */
  max-width: none;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  z-index: -3;
`;
export const InnerImageDivProjectContainer = styled.div`
  position: sticky;
  /* display: flex; */
  will-change: filter, opacity, transform;
  filter: blur(0px);
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  /* flex-direction: column; */
  flex: 1;
  /* justify-content: flex-end; */
  position: -webkit-sticky;
`;
export const InnerImageDivContainer = styled.div`
  display: flex;
  will-change: filter, opacity, transform;
  height: 100vh;

  filter: blur(0px);
  opacity: 1;
  padding: 2rem;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  /* flex-direction: column; */
  flex: 1;
  /* justify-content: flex-end; */
  position: -webkit-sticky;
  position: sticky;
  overflow: hidden;
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

export const ProjectContainer = styled.div`
  /* width: 90%; */
`;
export const Logo = styled.div`
  color: brown;
  font-size: 25px;
  font-weight: 600;
`;
