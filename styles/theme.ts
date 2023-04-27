import { createTheme, Theme } from "@mui/material";

interface MyThemeOptions {
  themeLight: boolean;
  activeStep: number;
}

const createMyTheme = ({ themeLight, activeStep }: MyThemeOptions): Theme => {
  const backgrounds = ["rgb(36, 39, 63)", "rgb(100, 100, 100)", "rgb(176, 170, 170)", "rgb(226, 242, 253)"];
  const theme = createTheme({
    palette: {
      primary: {
        main: themeLight ? "#000" : "#fff",
      },
      background: {
        default: backgrounds[activeStep],
      },
    },

    typography: {
      h2: {
        fontFamily: "'Black Han Sans', sans-serif",
        color: "#000",
      },
      h3: {
        fontFamily: "'Montserrat', sans-serif",
        color: "#000",
      },
      h4: {
        fontFamily: "'Black Han Sans', sans-serif",
        color: "#000",
      },
      h5: {
        fontFamily: "'Montserrat', sans-serif",
        color: "#000",
      },
      h6: {
        fontFamily: "'Montserrat', sans-serif",
        color: "#000",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  return theme;
};

export default createMyTheme;
