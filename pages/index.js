import { useMemo } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import AppLayout from "../components/appLayout";
import { AppProvider, useAppContext } from "../components/appprovider";

import createMyTheme from "../style/theme";

import Header from "../components/header/header";

const AppContent = () => {
  const { themeLight, setThemeDark } = useAppContext();
  const theme = useMemo(() => createTheme(createMyTheme(themeLight)), [themeLight]);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppLayout />
    </ThemeProvider>
  );
};
const Home = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default Home;
