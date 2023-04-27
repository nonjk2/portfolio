import React from "react";

import { Link } from "react-scroll";
import { HeaderLayout } from "../../styles/layout";
import { useAppContext } from "../appprovider";
import { LinkTypography } from "../../styles/headerStyle/header_style";

const Header = () => {
  const { activeStep } = useAppContext();
  const steps = ["#Main", "#Aboutme", "#Project", "#Skills"];

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
    </HeaderLayout>
  );
};
export default Header;
