import { Theme } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
overflow-x: hidden;
  body{
    background: rgb(17,17,17);
  }
  @keyframes scaleXRever {
    from {
      width: 100%;
      opacity: 1;
    }

    to {
      width: 0;
      opacity: 0;
    }
  }

  @keyframes scale {
    from {
      transform: scale(1.0);
    }
    to {
      transform: scale(1.5);
    }
  }

  @keyframes scaleX {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .MuiStepLabel-labelContainer {
    margin-top: 0;
  }
`;
