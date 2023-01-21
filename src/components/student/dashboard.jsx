import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ItemCard from "./item";
import { Typography } from "@mui/material";
import Transfer1 from "../ERC20/ImportMenu/transfer2";
const Dashboard = (s) => {
  const ERC20Token = require("../ERC20/ERC20Token");
  const { web3, applyDecimals } = require("../../utils/ethereumAPI");
  const tokenAddress = "0x3b650B20900016FdF9dFa5e7b5175a2C1565E840";
  const items = [
    {
      id: 1,
      name: "jacket4",
      imageurl: "Bitcoin {BTC}",
      price: "23",
      count: 40,
    },
    {
      id: 1,
      name: "jacket3",
      imageurl: "Bitcoin {BTC}",
      price: "23",
      count: 40,
    },
    {
      id: 1,
      name: "jacket1",
      imageurl:
        "data:image/jpeg;base64,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",
      price: "23",
      count: 40,
    },
    {
      id: 1,
      name: "jacket2",
      imageurl: "Bitcoin {BTC}",
      price: "23",
      count: 40,
    },
  ];

  const web3Token = new web3.eth.Contract(ERC20Token.abi, tokenAddress);
  const [tokenRefresh, setTokenRefresh] = useState(0);
  const [tokenData, setTokenData] = useState([
    { id: 0, name: "Address", value: tokenAddress },
    { id: 1, name: "Name", value: "" },
    { id: 2, name: "Symbol", value: "" },
    { id: 3, name: "TotalSupply", value: "" },
    { id: 4, name: "Decimals", value: "" },
    { id: 5, name: "Current balance", value: "" },
  ]);

  useEffect(() => {
    async function fetchData() {
      const web3Token = new web3.eth.Contract(ERC20Token.abi, tokenAddress);
      const name = await web3Token.methods.name().call();
      const symbol = await web3Token.methods.symbol().call();
      const totalSupply = await web3Token.methods.totalSupply().call();
      const decimals = await web3Token.methods.decimals().call();

      const accounts = await web3.eth.getAccounts();
      const currentBalance = await web3Token.methods
        .balanceOf(accounts[0])
        .call();

      setTokenData((tokenData) => [
        tokenData[0],
        { ...tokenData[1], value: name },
        { ...tokenData[2], value: symbol },
        { ...tokenData[3], value: applyDecimals(totalSupply, decimals) },
        { ...tokenData[4], value: decimals },
        { ...tokenData[5], value: applyDecimals(currentBalance, decimals) },
      ]);
    }
    fetchData();
  }, [ERC20Token.abi, applyDecimals, tokenAddress, tokenRefresh, web3.eth]);

  const refreshDataGrid = () => setTokenRefresh((t) => ++t);

  return (
    <>
      <Typography variant="h3">Available Items</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ItemCard
                name={item.name}
                price={item.price}
                image={item.imageurl}
                count={item.count}
              ></ItemCard>
              <Transfer1
                web3Token={web3Token}
                tokenData={tokenData}
                refreshDataGrid={refreshDataGrid}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
