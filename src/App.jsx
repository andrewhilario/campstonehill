/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router";
import "./index.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
