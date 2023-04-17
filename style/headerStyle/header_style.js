import { makeStyles, styled } from "@material-ui/styles";
import { Button, stepConnectorClasses } from "@mui/material";

export const useStyles = makeStyles((theme, ownerstate) => ({
  "@global": {
    "@keyframes scaleXRever": {
      from: {
        width: "100%",
        opacity: "1",
      },

      to: {
        width: "0",
        opacity: "0",
      },
    },

    "@keyframes scale": {
      from: {
        transform: "scale(1.0)",
      },
      to: {
        transform: "scale(1.5)",
      },
    },

    "@keyframes scaleX": {
      from: {
        width: "0",
      },
      to: {
        width: "100%",
      },
    },
    [`MuiStepLabel-labelContainer`]: {
      marginTop: 0,
    },
  },
  steppler: {
    // padding: "2rem 20rem",
    padding: "2% 30%",
    background: "rgba(0,0,0,0)",
    top: 10,
    // left: "calc(-50% + 16px)",
    // right: "calc(50% + 16px)",
  },
  DarkModeButtonLayOut: {
    position: "abosolute",
    right: 0,
    background: "red",
  },
  button: {
    color: "#fff",
    "&:hover": {},
  },
  labelname: {
    color: "#fff",
  },
  StepConnector: {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },

    [`&.${stepConnectorClasses.disabled}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        opacity: "0",
        boxShadow: "0 0 5px #03e9f4, 0 0 25px #03e9f4 , 0 0 100px #03e9f4",
        animation: "scaleXRever .5s",
      },
    },

    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#03e9f4",
        boxShadow: "0 0 5px #03e9f4, 0 0 25px #03e9f4 , 0 0 100px #03e9f4",
        animation: "scaleX .5s backwards",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: 3,
      borderRadius: 1,
      borderColor: "#03e9f4",
      boxShadow: "0 0 5px #03e9f4, 0 0 25px #03e9f4 , 0 0 100px #03e9f4",
      animation: "scaleX .5s backwards",
    },
  },
}));

export const ThemeButton = styled(Button)`
  position: absolute;
  right: 0;
  background-color: "#fff";
  color: "#fff";
`;

export const QontoStepIconRoot = styled("div")(({ ownerstate }) => ({
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerstate.active && {
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
    borderRadius: "50%",
    backgroundColor: "currentColor",
    boxShadow: "0 0 25px #F8FEB5, 0 0 25px #F8FEB5 , 0 0 100px #F8FEB5",
    animation: "scale .5s reverse",
  },
}));
