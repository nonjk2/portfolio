import React, { useCallback } from "react";

import { HeaderLayout } from "../../styles/layout";
import { useAppContext } from "../appprovider";
import { LinkTypography } from "../../styles/headerStyle/header_style";

const Header = () => {
  const { activeStep, setActiveStep } = useAppContext();
  const steps = ["#Main", "#Aboutme", "#Project", "#Skills"];

  const onRouteChange = useCallback((index) => {
    setActiveStep(index);
  }, []);

  // const handleScroll = useCallback(() => {}, []);
  return (
    <HeaderLayout>
      {steps.map((e, index) => (
        <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
          <LinkTypography
            active={activeStep}
            index={index}
            href={`${e}`}
            onClick={() => onRouteChange(index)}
          >
            {e}
          </LinkTypography>
        </div>
      ))}
    </HeaderLayout>
  );
};
export default Header;
