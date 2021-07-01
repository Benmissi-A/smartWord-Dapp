import React from "react";
import Header from "./Header"
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { smartWordAddress, smartWordAbi } from "./contracts/SmartWord";
import { Box } from "@chakra-ui/react";

export const SmartWordContext = React.createContext(null);

function App() {
  const smart = useContract(smartWordAddress, smartWordAbi);
  return (
    <SmartWordContext.Provider value={smart}>
      <Box minHeight="100vh">
        <Header/>
        <Dapp />
      </Box>
    </SmartWordContext.Provider>
  );
}

export default App;
