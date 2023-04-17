import React, { useCallback } from "react";
import { useRouter } from "next/router";

import { CircleOutlined } from "@mui/icons-material";

import { Button, Link, Step, StepLabel, Typography } from "@mui/material";
import { HeaderLayout } from "../../style/layout";
import { useAppContext } from "../appprovider";
import { QontoStepIconRoots, StepConnectorStyle, Steppler } from "../../style/headerStyle/header_style";

const QontoStepIcon = (props) => {
  const { completed, active } = props;

  return (
    <QontoStepIconRoots ownerstate={{ active }}>
      {completed ? (
        <CircleOutlined className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoots>
  );
};

const Header = () => {
  const { activeStep, setActiveStep, themeLight, setThemeDark } = useAppContext();
  const router = useRouter();
  const steps = ["#Main", "#Aboutme", "#Project", "#Skills"];

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
      <Steppler activeStep={activeStep} connector={<StepConnectorStyle />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
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
      </Steppler>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Button onClick={setOnclick}>{themeLight ? "어둡게" : "밝게"}</Button>
      </div>
    </HeaderLayout>
  );
};
export default Header;
