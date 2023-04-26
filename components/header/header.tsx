import React, { useCallback } from "react";
import { Button } from "@mui/material";

import { Link } from "react-scroll";
import { HeaderLayout } from "../../styles/layout";
import { useAppContext } from "../appprovider";
import { LinkTypography } from "../../styles/headerStyle/header_style";

const Header = () => {
  const { activeStep, themeLight, setThemeDark } = useAppContext();
  const steps = ["#Main", "#Aboutme", "#Project", "#Skills"];

  const setOnclick = useCallback(() => {
    setThemeDark(themeLight);
  }, [setThemeDark]);
  return (
    <HeaderLayout>
      {steps.map((e, index) => (
        <Link
          // style={{ textDecorationLine: "none" }}
          to={`${e}`}
          smooth
          offset={50}
          duration={500}
          key={e}
        >
          <LinkTypography active={activeStep} index={index}>
            {e}
          </LinkTypography>
        </Link>
      ))}

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
