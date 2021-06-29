import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { counterAddress, counterAbi } from "./contracts/Counter";
import SmartWord  from "./contracts/SmartWord";

export const SmartWord = React.createContext(null);

function App() {
  const smartWord = useContract(counterAddress, counterAbi);
  return (
    <CounterContext.Provider value={smartWord}>
      <Dapp />
    </CounterContext.Provider>
  );
}

export default App;
