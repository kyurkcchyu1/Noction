"use client";
import { Form } from "../src/components";
import { useConfigData } from "../src/hooks/useConfigData";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@theme/theme";
import Header from "../src/components/header/Header";
import React from "react";

export default function App() {
  const { data, isLoading } = useConfigData();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data) {
    return <div>No data..</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Form data={data} />
    </ThemeProvider>
  );
}
