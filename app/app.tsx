"use client";
import React from "react";
import { Global, ThemeProvider } from "@emotion/react";

import Header from "@components/header/Header";
import { theme } from "../src/theme/theme";
import { GlobalStyles } from "./GlobalStyles";

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header />
      {children}
    </ThemeProvider>
  );
};
