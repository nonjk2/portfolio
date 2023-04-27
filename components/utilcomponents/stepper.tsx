// // Stepper.tsx

// import React from "react";
// import styled from "styled-components";

// const Step = styled.div<{ active: boolean }>`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: ${(props) => (props.active ? "#4CAF50" : "#E0E0E0")};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-weight: bold;
// `;

// const Connector = styled.div<{ active: boolean }>`
//   flex-grow: 1;
//   height: 2px;
//   background-color: ${(props) => (props.active ? "#4CAF50" : "#E0E0E0")};
// `;

// interface StepperProps {
//   steps: number[];
//   activeStep: number;
// }

// const Stepper: React.FC<StepperProps> = ({ ref }) => {
//   return <Container ref={ref} />;
// };

// export default Stepper;
