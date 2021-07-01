import { useContext, useState } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";
import { Container, Box ,Heading} from "@chakra-ui/react";


const Dapp = () => {
    const [web3State, login] = useContext(Web3Context);

  return (
    <Container>
      <Box>
        <Heading>Hello</Heading>
      </Box>
      <p>MetaMask installed: {web3State.isMetaMask ? "yes" : "no"}</p>
      <p>Web3: {web3State.isWeb3 ? "injected" : "no-injected"}</p>
      <p>logged: {web3State.isLogged ? "yes" : "no"}</p>
      {!web3State.isLogged && (
        <>
          <button onClick={login}>login</button>
        </>
      )}
      <p>Network id: {web3State.chainId}</p>
      <p>Network name: {web3State.networkName}</p>
      <p>account: {web3State.account}</p>
      <p>Balance: {web3State.balance}</p>
    </Container>
  );
}
export default Dapp