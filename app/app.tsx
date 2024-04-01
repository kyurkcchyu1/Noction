"use client";
import { ReactNode } from "react";
import { Global, ThemeProvider } from "@emotion/react";

import { Header } from "@components";

import { theme } from "@theme";
import { GlobalStyles } from "./GlobalStyles";

export const App = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header />
      {children}
    </ThemeProvider>
  );
};
