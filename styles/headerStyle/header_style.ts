import Button from "@mui/material/Button";
import { Stepper, StepConnector } from "@mui/material";
import styled from "styled-components";
import { Link } from "@studio-freight/compono";

interface LinkTypographyProps {
  active: number;
  index: number;
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

const LinkTypography = styled(Link)<LinkTypographyProps>`
  opacity: ${(props) => (props.active === props.index ? 1 : 0.5)};
  font-size: ${(props) => (props.active === props.index ? "2rem" : "1rem")};
  transition: font-size 0.5s;
  font-weight: bold;
  text-decoration-line: none;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  @media only screen and (max-width: 600px) {
    /* Apply mobile styles */
    font-size: 0.5rem;
  }
`;

export { Steppler, StyledButton, StepConnector, LinkTypography };
