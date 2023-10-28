import React from "react";

import themes from "./styles/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
