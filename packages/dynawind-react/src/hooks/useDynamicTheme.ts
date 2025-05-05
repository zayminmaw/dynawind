import { useContext } from "react";
import { Theme } from "dynawind";
import { DynamicThemeContext } from "../components/DynamicThemeProvider/DynamicThemeProvider";

/**
 * Custom hook to access the current Dynawind theme from context.
 *
 * @returns The current Dynawind `theme` object.
 *
 * @throws Error if used outside of a <DynamicThemeProvider>, ensuring
 * the theme context is properly provided.
 */
export const useDynamicTheme = (): Theme => {
  const context = useContext(DynamicThemeContext);
  if (!context) {
    throw new Error(
      "useDynamicTheme must be used within a DynamicThemeProvider"
    );
  }
  return context;
};
