import { createContext } from "react";
import { DynamicThemeProviderProps } from "./types";
import { Theme } from "dynawind";

const DynamicThemeContext = createContext<Theme>({});

const DynamicThemeProvider = ({
  children,
  theme,
}: DynamicThemeProviderProps) => {
  return (
    <DynamicThemeContext.Provider value={theme}>
      {children}
    </DynamicThemeContext.Provider>
  );
};

export default DynamicThemeProvider;
