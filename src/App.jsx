/* eslint-disable no-unused-vars */
import "@fontsource/plus-jakarta-sans";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router";
import "./index.css";
// Supports weights 100-900
import "@fontsource-variable/montserrat";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
      <SpeedInsights />
    </ChakraProvider>
  );
}

export default App;
