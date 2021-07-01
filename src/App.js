import React from "react";
import Header from "./Header";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { smartWordAddress, smartWordAbi } from "./contracts/SmartWord";
import { Box } from "@chakra-ui/react";

export const SmartWordContext = React.createContext(null);

function App() {
  const smart = useContract(smartWordAddress, smartWordAbi);
  return (
    <Box minHeight="100vh">
      <Header />
      <SmartWordContext.Provider value={smart}>
        <Dapp />
      </SmartWordContext.Provider>
    </Box>
  );
}

export default App;
