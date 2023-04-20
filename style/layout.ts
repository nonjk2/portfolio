import styled, { keyframes } from "styled-components";

/// / 전체영역 ////

export const Outer = styled.div`
  ${({ theme }) => `
    background: ${theme.palette.background.outer};
    transition: background 1.2s;
  `}
  margin: 0;
`;

/// // 헤더영역 /////////// 헤더영역 /////////// 헤더영역 //////
export const LogoLayout = styled.div`
  float: left;
`;

export const HeaderLayout = styled.header`
  position: fixed;
  /* display: flex; */
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectLayout = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;

  align-items: center;
  justify-content: center;
  /* line-height: 100vh; */
`;

export const SkillsLayout = styled.div`
  height: 100vh;
  text-align: center;
  /* line-height: 100vh; */
  /* background: rgb(226, 242, 253); */
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
