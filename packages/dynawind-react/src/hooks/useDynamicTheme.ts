import { useContext } from "react";
import { Theme } from "dynawind";
import { DynamicThemeContext } from "../components/DynamicThemeProvider/DynamicThemeProvider";

export const useDynamicTheme = (): Theme => {
  const context = useContext(DynamicThemeContext);
  if (!context) {
    throw new Error(
      "useDynamicTheme must be used within a DynamicThemeProvider"
    );
  }
  return context;
};
