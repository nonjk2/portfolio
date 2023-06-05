import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Stepper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  background-color: blue;
  height: 5px;
  transition: width 0.2s;
  z-index: 10000;
`;
export const Introduce = styled.div`
  background-color: rgba(200, 200, 200, 0.7);
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  min-width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 1000;
  width: 30%;
`;

export const TimeTypographyContainer = styled.div`
  line-height: 2rem;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TimeTypography = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  white-space: nowrap;
  white-space: pre-line;
`;
export const TypographyHye = styled(Typography)`
  font-size: 2.3rem;
  font-weight: 400;
  white-space: pre-line;
  /* color: #fff; */
`;
export const AboutmeCardContainer = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SmallpaperContainer = styled.div`
  perspective: 1000px;
  flex: 1;
  &:hover,
  &:focus {
    & .paper {
      transform: rotateY(180deg);
    }
  }
`;

export const Paper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.13);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  border-radius: 15px;
  transition: transform 0.2s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const PaperContainer = styled.div`
  position: sticky;
  perspective: 1000px;
  width: 40vw;
  height: 60vh;
  &:hover,
  &:focus {
    & .paper {
      transform: rotateY(180deg);
    }
  }
`;

export const FrontAboutMeOne = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const FrontAboutMeTwo = styled.div`
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  border-radius: 15px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  transform: rotateY(180deg);
`;

export const MyAboutPaperContainer = styled.div`
  width: 20vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const MyAboutAddContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 20vw;
  min-width: 200px;
  width: 20vw;
  height: 50vh;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  transition: all 0.3s;
`;

export const MyAboutPaper = styled(Paper)`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyAboutSmallPaperContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyAboutSmallPaper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Bottompaper = styled.div`
  flex: 0.15;
  border-radius: 30px;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.13);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  display: flex;
  justify-content: center;
`;
