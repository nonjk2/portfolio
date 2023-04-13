/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useRouter } from "next/router";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { Step, StepButton, StepLabel, stepLabelClasses, Stepper } from "@mui/material";
import { Check, CircleOutlined } from "@mui/icons-material";

import { Button, Link, Typography } from "@material-ui/core";
import { HeaderLayout, HeaderLayoutTitle, LogoLayout, TitleBox } from "../style/layout";
import { useAppContext } from "./appprovider";
import { QontoStepIconRoot, ThemeButton, useStyles } from "../style/headerStyle/header_style";

const QontoStepIcon = (props) => {
  const { className, completed, active } = props;

  return (
    <QontoStepIconRoot ownerstate={{ active }} className={className}>
      {completed ? (
        <CircleOutlined className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
};

const Header = () => {
  const { activeStep, setActiveStep, themeLight, setThemeDark } = useAppContext();
  const router = useRouter();
  const steps = ["#Main", "#Aboutme", "#Project", "#Skills"];
  const [completed, setCompleted] = useState({});
  const classes = useStyles();

  const StateHandle = useCallback(
    (index) => {
      setActiveStep(index);
    },
    [router],
  );

  return (
    <HeaderLayout>
      <Stepper
        className={classes.steppler}
        activeStep={activeStep}
        connector={<StepConnector className={classes.StepConnector} />}
      >
        {steps.map((label, index) => (
          <Step className={classes.step} key={label}>
            <StepLabel className={classes.labelname} StepIconComponent={QontoStepIcon}>
              <Link
                style={{ textDecorationLine: "none", display: "flex", justifyContent: "center" }}
                href={`${label}`}
                onClick={() => StateHandle(index)}
              >
                <Typography
                  style={{
                    opacity: activeStep === index ? 1 : 0.5,
                    color: themeLight ? "#000" : "#94B9F3",
                    fontWeight: "bold",
                    textDecorationLine: "none",
                  }}
                >
                  {label.match(/\w/g)}
                </Typography>
              </Link>
            </StepLabel>
          </Step>
        ))}
        <Button onClick={() => setThemeDark((prev) => !prev)}>{themeLight ? "어둡게" : "밝게"}</Button>
      </Stepper>
    </HeaderLayout>
  );
};
export default Header;
