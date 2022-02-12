import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import GlobalStyle from "./globalStyles";
import { MainPage } from "./components/templates";
import { colors, fonts, breakpoints } from "./constants";

const theme: DefaultTheme = {
  fonts,
  colors,
  breakpoints,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
