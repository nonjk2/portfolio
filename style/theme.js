import { createTheme } from "@material-ui/core";

const createMyTheme = (themeLight) => {
  const theme = createTheme({
    palette: {
      type: themeLight ? "light" : "dark",
      primary: {
        main: themeLight ? "#000" : "#fff", // your primary color for light and dark mode
      },
      background: {
        default: themeLight ? "#ffffff" : "#303030", // your background color for light and dark mode
      },
    },
    typography: {
      h2: { color: themeLight ? "#000" : "fff", fontfamily: "'Black Han Sans', sans-serif" },
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
