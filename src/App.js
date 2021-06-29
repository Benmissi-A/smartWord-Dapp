import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { counterAddress, counterAbi } from "./contracts/Counter";

export const CounterContext = React.createContext(null);

function App() {
  const counter = useContract(counterAddress, counterAbi);
  return (
    <CounterContext.Provider value={counter}>
      <Dapp />
    </CounterContext.Provider>
  );
}

export default App;
