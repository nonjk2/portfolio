import { createTheme } from "@mui/material";

const createMyTheme = (themeLight: any, activeStep: any) => {
  const backgrounds = ["rgb(36, 39, 63)", "rgb(100, 100, 100)", "rgb(176, 170, 170)", "rgb(226, 242, 253)"];
  const theme = createTheme({
    palette: {
      type: themeLight ? "light" : "dark",
      primary: {
        main: themeLight ? "#000" : "#fff", // your primary color for light and dark mode
      },
      background: {
        default: themeLight ? "rgb(226, 242, 253)" : "rgb(36, 39, 63)",
        outer: backgrounds[activeStep],
      },
    },

    typography: {
      h2: {
        fontFamily: "'Black Han Sans', sans-serif",
        color: themeLight ? "#000" : "#fff", // 폰트 색상을 설정합니다.
      },
      h3: {
        fontfamily: "'Montserrat', sans-serif",
        color: themeLight ? "#000" : "#fff", // 폰트 색상을 설정합니다.
      },
      h6: { fontfamily: "'Montserrat', sans-serif" },
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
