import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [themeLight, setThemeDark] = useState(false);

  const value = useMemo(() => {
    return {
      activeStep,
      setActiveStep,
      themeLight,
      setThemeDark,
    };
  }, [activeStep, setActiveStep, themeLight, setThemeDark]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
