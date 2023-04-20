import Button from "@mui/material/Button";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import { css, styled, Stepper, Typography, StepConnector } from "@mui/material";

interface LinkTypographyProps {
  active: number;
  index: number;
}

interface StepConnectorStyleProps {
  completed: boolean;
  disabled: boolean;
}

interface QontoStepIconRootsProps {
  ownerstate: boolean;
}

const Steppler = styled(Stepper)`
  padding: 2% 30%;
  background: rgba(0, 0, 0, 0);
  /* top: 10; */
  @media (max-width: 768px) {
    padding: 2% 10%;
  }
`;

const StyledButton = styled(Button)`
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const LinkTypography = styled(Typography)<LinkTypographyProps>(
  ({ active, index, theme }) => `
  opacity: ${active === index ? 1 : 0.5};
  color: ${theme.palette.primary.main};
  font-weight: bold;
  text-decoration-line: none;
  @media only screen and (max-width: 600px) {
    /* Apply mobile styles */
    font-size: 0.5rem;
  }
`,
);

const StepConnectorStyle = styled(StepConnector)<StepConnectorStyleProps>`
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

const QontoStepIconRoots = styled("div")<QontoStepIconRootsProps>(({ ownerstate }) => ({
  display: "flex",
  height: 22,
  color: "#F8FEB5DD",
  alignItems: "center",
  ...(ownerstate && {
    color: "#000",
    animation: "scale .5s forwards",
  }),

  "& .QontoStepIcon-completedIcon": {
    zIndex: 1,
    color: "#fff",
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
    color: "#F8FEB5DD",
    borderRadius: "50%",
    backgroundColor: "#fff",
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

export {
  QontoStepIconRoots,
  Steppler,
  StyledButton,
  StepConnector,
  ThemeButton,
  StepConnectorStyle,
  LinkTypography,
};
