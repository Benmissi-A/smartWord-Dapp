import { useContext, useEffect, useState } from "react";
import { Web3Context } from "web3-hooks";
import { SmartWordContext } from "./App";
import { ethers } from "ethers";
import {
  Container,
  Center,
  Box,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";


const Dapp = () => {
  const [web3State, login] = useContext(Web3Context);
  const smartWord = useContext(SmartWordContext);
  const [content, setContent] = useState("");
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [valid, setValid] = useState(false);
  const [address, setAddress] = useState(web3State.account);
  const [nftId, setNftId] = useState(1)

  useEffect(() => {
    setAddress(web3State.account);
  }, [web3State]);
  useEffect(() => {
    setHash(ethers.utils.id(content));
  }, [content]);

  const handleContentChange = (e) => {
    setText(e.target.value);
    let txt = e.target.value.replace(/[.…,/#!$%^&*;':{}=\-_`~()]/g, "");
    txt = txt.split(" ").join("");
    txt = txt.toLowerCase();
    setContent(txt);
    setValid(false)
  };

  const handleClickGetTextById = async () => {
    try {
      let res = await smartWord.getTextById(nftId);
      console.log(res.toString());
      
    } catch (e) {
      console.log("something wrong");
    }
  }
  const handleClickCreateNft = async () => {
    try{
      let res = await smartWord.name();
      console.log(res.toString())
      setValid(true)
    }catch(e){
      console.log(e.message)
    }
  }
  console.log(content);
  //console.log(text);
  console.log(hash);
  console.log(valid);

  return (
    <>
      <Center>
        <Container>
          <Box></Box>
          <Textarea
            placeholder="enter your text to get the hash"
            onChange={handleContentChange}
          />
          {!valid ? (
            <Button my="2" colorScheme="blue" onClick={() => setValid(true)}>
              Convert bytes32
            </Button>
          ) : (
            <>
              <Text my="2">{hash}</Text>
              <Button my="2" colorScheme="blue" onClick={handleClickCreateNft}>
                Create Nft
              </Button>
            </>
          )}
          <Box>
            <Button my="2" colorScheme="blue">
              Show nft Balance
            </Button>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
          <Box>
            <Button my="2" colorScheme="blue" onClick={handleClickGetTextById}>
              Get nft by id
            </Button>
            <Input
              type="number"
              min="1"
              value={nftId}
              onChange={(e) => setNftId(e.target.value)}
            />
          </Box>
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
      <label htmlFor="balanceOf">Balance of:</label>
      <input
        id="balanceOf"
        type="text"
        value={address}
        placeholder="ethereum address"
        onChange={(event) => setAddress(event.target.value)}
      />
    </>
  );
};
export default Dapp;
