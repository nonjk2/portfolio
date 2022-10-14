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
export const Nextbutton = styled.button`
  position: fixed;
  display: flex;
  background-color: Transparent;
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
