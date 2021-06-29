import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { smartWordAddress, smartWordAbi } from "./contracts/Counter";
import SmartWord  from "./contracts/SmartWord";

export const SmartWord = React.createContext(null);

function App() {
  const smartWord = useContract(smartWordAddress, smartWordAbi);
  return (
    <SmartWordContext.Provider value={smartWord}>
      <Dapp />
    </SmartWordContext.Provider>
  );
}

export default App;
