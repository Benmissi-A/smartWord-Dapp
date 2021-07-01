import { useContext, useState } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";
import {
  Container,
  Center,
  Box,
  Heading,
  Textarea,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Dapp = () => {
  const [web3State, login] = useContext(Web3Context);

  return (
    <>
      <Box py="20">
        <Heading textAlign="center">
          SmartWord Nft Generator Convert to Protect your intellect
        </Heading>
      </Box>
      <Center>
        <Container>

        <Box></Box>
        <Textarea placeHolder="enter your text to get the hash" />
        <Button colorScheme="blue">Convert</Button>
        </Container>
      </Center>
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
    </>
  );
};
export default Dapp;
