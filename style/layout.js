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
  background: linear-gradient(rgb(226, 242, 253), 50%, rgb(226, 242, 253));
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
  background: linear-gradient(rgb(226, 242, 253), 40%, white);
`;

export const ProjectLayout = styled.div`
  height: 100vh;
  text-align: center;
  /* line-height: 100vh; */
  background: linear-gradient(white, 80%, rgb(226, 242, 253));
`;

export const SkillsLayout = styled.div`
  height: 100vh;
  text-align: center;
  /* line-height: 100vh; */
  background: rgb(226, 242, 253);
`;
const move = keyframes`
	//단계 별로 변화를 주는 코드
	from{
    transform: translateY(200px);
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
