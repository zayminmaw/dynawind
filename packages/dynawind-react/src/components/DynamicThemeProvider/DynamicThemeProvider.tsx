import { createContext } from "react";
import { DynamicThemeProviderProps } from "./types";
import { Theme } from "dynawind";

export const DynamicThemeContext = createContext<Theme | undefined>(undefined);

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
