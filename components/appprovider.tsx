import React, { createContext, useContext, useMemo, useState } from "react";
import { NotionPage } from "../pages/api/notion";

interface AppContextType {
  activeStep: number;
  setActiveStep: (step: number | ((prev: number) => number)) => void;
  themeLight: boolean;
  setThemeDark: (dark: boolean) => void;
  notionDataBase: NotionPage[];
  blocks: any;
  repositories: any;
  notionStudyDataBase: any;
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
  notionDataBase: NotionPage[];
  blocks: any;
  repositories: any;
  notionStudyDataBase: any;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  notionDataBase,
  blocks,
  repositories,
  notionStudyDataBase,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [themeLight, setThemeDark] = useState<boolean>(false);

  const value = useMemo<AppContextType>(() => {
    return {
      activeStep,
      setActiveStep,
      themeLight,
      setThemeDark,
      notionDataBase,
      blocks,
      repositories,
      notionStudyDataBase,
    };
  }, [
    activeStep,
    setActiveStep,
    themeLight,
    setThemeDark,
    notionDataBase,
    blocks,
    repositories,
    notionStudyDataBase,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
