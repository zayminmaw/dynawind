// components/ClientSideThemeProvider.tsx
"use client";

import { DynamicThemeProvider } from "@dynawind/react";
import { Theme } from "dynawind";

type ClientSideThemeProviderProps = {
  theme: Theme;
  children: React.ReactNode;
};

const ClientSideThemeProvider = ({
  theme,
  children,
}: ClientSideThemeProviderProps) => {
  return <DynamicThemeProvider theme={theme}>{children}</DynamicThemeProvider>;
};

export default ClientSideThemeProvider;
