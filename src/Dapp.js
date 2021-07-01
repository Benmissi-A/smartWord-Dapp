import { useContext, useEffect, useState } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";
import {
  Container,
  Center,
  Box,
  Heading,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";

const Dapp = () => {
  //const [web3State, login] = useContext(Web3Context);
  const [content, setContent] = useState("");
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setHash(ethers.utils.id(content));
  }, [content]);

  const handleContentChange = (e) => {
    setText(e.target.value);
    let txt = e.target.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    txt = txt.split(" ").join("");
    txt = txt.toLowerCase();
    setContent(txt);
  };
  console.log(content);
  console.log(text);
  console.log(hash);
  console.log(valid);

  return (
    <>
      <Box py="20">
        <Heading textAlign="center">
          SmartWord Nft Generator Convert to Protect your Intellect
        </Heading>
      </Box>
      <Center>
        <Container>
          <Box></Box>
          <Textarea
            placeholder="enter your text to get the hash"
            onChange={handleContentChange}
          />
          {!valid ? (
            <Button colorScheme="blue" onClick={() => setValid(true)}>
              Convert
            </Button>
          ) : (
            <>
              <Text>{hash}</Text>
              <Button colorScheme="blue" onClick={() => setValid(false)}>
                Create Nft
              </Button>
            </>
          )}
          <Box>
            <Button colorScheme="blue">Show nft Balance</Button>
          </Box>
          <Box>
            <Button colorScheme="blue">Get nft by id</Button>
          </Box>
        </Container>
      </Center>
      {/* <p>MetaMask installed: {web3State.isMetaMask ? "yes" : "no"}</p>
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
      <p>Balance: {web3State.balance}</p>*/}
    </>
  );
};
export default Dapp;
