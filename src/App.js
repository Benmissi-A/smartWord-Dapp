import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { smartWordAddress, smartWordAbi } from "./contracts/SmartWord";
import { Box } from "@chakra-ui/react";

export const SmartWordContext = React.createContext(null);

function App() {
  const smartWord = useContract(smartWordAddress, smartWordAbi);
  return (
    <SmartWordContext.Provider value={smartWord}>
      <Box minHeight="100vh">
        <Dapp />
      </Box>
    </SmartWordContext.Provider>
  );
}

export default App;
