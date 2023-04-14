import React from "react";
import styled from "styled-components";
import Typist from "react-text-typist";
import { Typography } from "@mui/material";

export const Logo = styled.div`
  color: brown;
  font-size: 25px;
  font-weight: 600;
`;

export const StyledTypist = styled(Typist)`
  font-size: 4rem;
`;

// export const TitleAnimation = styled.h2`
//   font-size: 4rem;
//   color: ${({ muiTheme }) => muiTheme.palette.primary.main};
// `;

// export const TypographyMain = styled(Typography)`
//   font-size: 4rem;
//   color: ${({ muiTheme }) => muiTheme.palette.primary.main};
// `;
