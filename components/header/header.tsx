import React, { useCallback } from "react";
import { useRouter } from "next/router";

import { Circle, CircleOutlined } from "@mui/icons-material";

import { Button, Link, Step, StepIconProps, StepLabel } from "@mui/material";
import { HeaderLayout } from "../../style/layout";
import { useAppContext } from "../appprovider";
import {
  LinkTypography,
  QontoStepIconRoots,
  StepConnectorStyle,
  Steppler,
} from "../../style/headerStyle/header_style";

const QontoStepIcon = (props: Partial<StepIconProps>) => {
  const { completed, active } = props;

  return (
    <QontoStepIconRoots ownerstate={active}>
      {completed ? (
        <Circle className="QontoStepIcon-completedIcon" />
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
    [router, setActiveStep],
  );

  const setOnclick = useCallback(() => {
    setThemeDark(themeLight);
  }, [setThemeDark]);
  return (
    <HeaderLayout>
      <Steppler activeStep={activeStep} connector={<StepConnectorStyle completed={false} disabled={false} />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Link
                style={{ textDecorationLine: "none", display: "flex", justifyContent: "center" }}
                href={`${label}`}
                onClick={() => StateHandle(index)}
              >
                <LinkTypography active={activeStep} index={index}>
                  {label.match(/\w/g)}
                </LinkTypography>
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
