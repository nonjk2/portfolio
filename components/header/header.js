import React, { useCallback } from "react";
import { useRouter } from "next/router";
import StepConnector from "@mui/material/StepConnector";
import { Step, StepLabel, Stepper } from "@mui/material";
import { CircleOutlined } from "@mui/icons-material";
import { Button, Link, Typography } from "@material-ui/core";
import { HeaderLayout } from "../../style/layout";
import { useAppContext } from "../appprovider";
import { QontoStepIconRoot, useStyles } from "../../style/headerStyle/header_style";

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
  const classes = useStyles();

  const StateHandle = useCallback(
    (index) => {
      setActiveStep(index);
    },
    [router],
  );
  const setOnclick = useCallback(() => {
    setThemeDark((prev) => !prev);
  }, []);
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
      </Stepper>
      <div className={classes.DarkModeButtonLayOut}>
        <Button onClick={setOnclick}>asdasdasd</Button>
      </div>
    </HeaderLayout>
  );
};
export default Header;
