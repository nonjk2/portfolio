import React from "react";

import Button from "@mui/material/Button";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import { createGlobalStyle } from "styled-components";
import { css, styled, Link, Step, StepLabel, Stepper, Typography, StepConnector } from "@mui/material";

const Steppler = styled(Stepper)`
  padding: 2% 30%;
  background: rgba(0, 0, 0, 0);
  top: 10;
`;

const StyledButton = styled(Button)`
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StepConnectorStyle = styled(StepConnector)`
  ${({ completed, disabled }) => css`
    &.${stepConnectorClasses.alternativeLabel} {
      top: 10;
      left: calc(-50% + 16px);
      right: calc(50% + 16px);
    }

    &.${stepConnectorClasses.disabled} {
      & .${stepConnectorClasses.line} {
        opacity: 0;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 100px #03e9f4;
        animation: scaleXRever 0.5s;
      }
    }

    ${completed &&
    css`
      & .${stepConnectorClasses.line} {
        border-color: #03e9f4;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 100px #03e9f4;
        animation: scaleX 0.5s backwards;
      }
    `}

    & .${stepConnectorClasses.line} {
      border-top-width: 3;
      border-radius: 1;
      border-color: ${disabled ? "#03e9f4" : "currentColor"};
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 100px #03e9f4;
      animation: scaleX 0.5s backwards;
    }
  `}
`;
const QontoStepIconRoots = styled("div")(({ ownerstate }) => ({
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerstate && {
    color: "#F8FEB5DD",
    animation: "scale .5s forwards",
  }),

  "& .QontoStepIcon-completedIcon": {
    zIndex: 1,
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 0 25px #F8FEB5, 0 0 25px #F8FEB5 , 0 0 100px #F8FEB5",
    animation: "scale .5s reverse",
  },
  "& .QontoStepIcon-circle": {
    width: 12,
    height: 12,
    border: "none",
    borderRadius: "50%",
    backgroundColor: "currentColor",
    boxShadow: "0 0 25px #F8FEB5, 0 0 25px #F8FEB5 , 0 0 100px #F8FEB5",
    animation: "scale .5s reverse",
  },
}));
const ThemeButton = styled(Button)`
  position: absolute;
  right: 0;
  background-color: #fff;
  color: #fff;
`;

export { QontoStepIconRoots, Steppler, StyledButton, StepConnector, ThemeButton, StepConnectorStyle };
