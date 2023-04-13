import React from "react";
import styled, { keyframes } from "styled-components";

export const Headername = styled.div`
  color: "#94B9F3";
`;
export const LogoButoon = styled.div`
  /* margin-top: 10px; */
`;
export const MainMorebutton = styled.button`
  background-color: red;
  width: 100px;
  height: 20px;
`;
const updown = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(-10px);
  }
`;

const rightLeft = keyframes`
  from {
    transform: translateX(5px);
  }
  to {
    transform: translateX(-5px);
  }
`;
export const PreArrowbutton = styled.button`
  position: absolute;
  /* display: flex; */
  background-color: transparent;
  color: ${(props) => (props.themeLight ? "#000" : "#fff")};
  /* flex-direction: column; */
  /* align-items: center;
  justify-content: center; */
  border-width: 0px;
  cursor: pointer;
  right: 0;
  min-height: auto;
  bottom: 2vh;
  animation: ${rightLeft} 1000ms infinite alternate ease-in-out;
  &:hover {
    color: blue;
  }
`;

export const NextArrowbutton = styled.button`
  position: fixed;
  background-color: transparent;
  color: ${(props) => (props.themeLight ? "#000" : "#fff")};
  border-width: 0px;
  cursor: pointer;
  left: 0;
  min-height: auto;
  bottom: 2vh;
  animation: ${rightLeft} 1000ms infinite alternate ease-in-out;
  &:hover {
    color: blue;
  }
`;
export const Nextbutton = styled.button`
  position: fixed;
  display: flex;
  background-color: Transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 0px;
  cursor: pointer;
  width: 100px;
  bottom: 2vh;
  margin-left: 48%;
  animation: ${updown} 1000ms infinite alternate ease-in-out;
  &:hover {
    color: blue;
  }
`;
