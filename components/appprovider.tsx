import React, { createContext, useContext, useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "../style/globalStyled";

interface AppContextType {
  activeStep: number;
  setActiveStep: (step: number | ((prev: number) => number)) => void;
  themeLight: boolean;
  setThemeDark: (dark: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [themeLight, setThemeDark] = useState<boolean>(false);

  const value = useMemo<AppContextType>(() => {
    return {
      activeStep,
      setActiveStep,
      themeLight,
      setThemeDark,
    };
  }, [activeStep, setActiveStep, themeLight, setThemeDark]);

  return (
    <AppContext.Provider value={value}>
      <GlobalStyles />
      <CssBaseline />

      {children}
    </AppContext.Provider>
  );
};
