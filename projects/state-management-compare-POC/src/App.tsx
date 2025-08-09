import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { BrowserRouter } from "react-router";
import { Routes } from "./route";

const system = createSystem(defaultConfig);

function App() {
  return (
    <ChakraProvider value={system}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
