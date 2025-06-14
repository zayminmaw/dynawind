"use client";

import { createContext } from "react";
import { DynamicThemeProviderProps } from "./types";
import { Theme } from "dynawind";

// Create a React context for the theme, defaulting to undefined
export const DynamicThemeContext = createContext<Theme | undefined>(undefined);

/**
 * DynamicThemeProvider is a React context provider component
 * that supplies a Dynawind `theme` object to its descendant components.
 *
 * @param children - The nested React elements that can access the theme context
 * @param theme - The Dynawind theme object to be provided via context
 */
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
