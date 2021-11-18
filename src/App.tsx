import React from "react";
import styled, { ThemeProvider } from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./app/containers/HomePage";

const theme = {
  main: "rgb(85, 107, 47)",
};

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <HomePage />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
