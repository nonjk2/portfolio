/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, mergeClasses, styled } from "@material-ui/styles";
import { useRouter } from "next/router";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { Step, StepButton, StepLabel, Stepper } from "@mui/material";
import { Check, CircleOutlined } from "@mui/icons-material";

import { Link, Typography } from "@material-ui/core";
import { HeaderLayout, HeaderLayoutTitle, LogoLayout, TitleBox } from "../style/layout";

const useStyles = makeStyles((theme, ownerstate) => ({
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
  },
  steppler: {
    // padding: "2rem 20rem",
    padding: "2% 30%",
    background: "rgba(0,0,0,0)",
    top: 10,
    // left: "calc(-50% + 16px)",
    // right: "calc(50% + 16px)",
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

const QontoStepIconRoot = styled("div")(({ theme, ownerstate }) => ({
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerstate.active && {
    color: "#F8FEB5DD",
    animation: "scale .5s forwards",
  }),

  "& .QontoStepIcon-completedIcon": {
    // color: "#03e9f4",
    zIndex: 1,
    // fontSize: 18,
    // opacity: 0.7,
    // borderColor: "#03e9f4",
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
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerstate={{ active }} className={className}>
      {completed ? (
        <CircleOutlined className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

export default function Header(props) {
  const { activeStep, setActiveStep } = props;
  const router = useRouter();
  const handleChange = useCallback((event, newValue) => {
    setActiveStep(newValue);
    // console.log("adsff");
    // event.preventDefault();
  });
  const StateHandle = useCallback(
    (index) => {
      setActiveStep(index);
    },
    [router],
  );

  const steps = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const [completed, setCompleted] = React.useState({});
  const classes = useStyles();
  // useEffect(() => {
  const handleStep = (step) => () => {
    setActiveStep(step);
    // router.push(`${steps[step]}`);
  };

  return (
    <HeaderLayout>
      <Stepper
        className={classes.steppler}
        alternativeLabel
        activeStep={activeStep}
        connector={<StepConnector className={classes.StepConnector} />}
      >
        {steps.map((label, index) => (
          <Step className={classes.step} key={label} completed={completed[index]}>
            <StepLabel className={classes.labelname} StepIconComponent={QontoStepIcon}>
              <Link
                style={{ textDecorationLine: "none" }}
                href={`${label}`}
                onClick={() => StateHandle(index)}
              >
                <a
                  style={{
                    opacity: activeStep === index ? 1 : 0.4,
                    color: activeStep === 0 ? "#94B9F3" : "#3f51b5",
                    fontWeight: 700,
                    textDecorationLine: "none",
                  }}
                >
                  {label.match(/\w/g)}
                </a>
              </Link>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </HeaderLayout>
  );
}
