import Image from "next/image";
import styled from "styled-components";

/// 캐러셀 ///

export const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ProjectIntroContainer = styled.div`
  /* background-color: rgba(220, 230, 240, 0.3); */
  flex: 1;
  padding: 1rem;
`;
export const ProjectNameContainer = styled.div`
  position: sticky;
  top: 200px;
  bottom: 120px;
  min-width: 100px;
  -ms-grid-row-align: start;
  align-self: start;
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    bottom: 0px;
  }
`;

export const ProjectAbout = styled.div`
  position: relative;
  background-color: white;
  flex: 3;
  /* min-width: 600px; */
  /* padding: 3rem; */
  opacity: 0;
  transition: opacity 0.2s;
`;
export const ProjectWarpper = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 0px;
  padding-bottom: 100px;
`;
export const ProjectSectionDiv = styled.div`
  display: flex;
  /* -webkit-box-direction: normal; */
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;
export const Stepper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 0%;
  background-color: blue;
  height: 5px;
  transition: width 0.2s;
  z-index: 10000;
`;
export const ProjectCoverImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  transition: transform 0.2s;
`;
export const CoverImagediv = styled.div`
  width: 100%;
  height: 300px;
  .coverImg {
    width: 100%;
    height: 100%;
    position: relative !important;
  }
  position: relative;
  overflow: hidden;
  &:hover {
    .coverImage {
      transform: scale(1.3);
    }
  }
`;
