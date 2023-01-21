import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";

const { web3, applyDecimals } = require("../../../utils/ethereumAPI");

const Transfer1 = ({ web3Token, tokenData, refreshDataGrid, price }) => {
  const symbol = tokenData.find((x) => x.name === "Symbol").value;
  const decimals = tokenData.find((x) => x.name === "Decimals").value;

  const [data, setData] = useState({
    arg1: "0xf3Af99bA7ac55Ec6BCa00bb58a9E73447e39baf9",
    arg2: price,
    errorMessage: "",
    successMessage: "",
    loading: false,
  });

  const onClickTransfer = async () => {
    setData({ ...data, loading: true });
    let errorMessage = "";
    let successMessage = "";

    try {
      const accounts = await web3.eth.getAccounts();
      const amountToSend = applyDecimals(data.arg2, decimals, "positive");
      await web3Token.methods
        .transfer(data.arg1, amountToSend)
        .send({ from: accounts[0] });
      successMessage = `Transfer successful. ${data.arg2} ${symbol} sent`;
      refreshDataGrid();
    } catch (error) {
      errorMessage = error.message;
    }

    setData({ ...data, loading: false, errorMessage, successMessage });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{ m: 1 }}
          onClick={(e) => onClickTransfer()}
          disabled={data.loading}
        >
          {data.loading ? null : "Redeem"}
        </Button>
      </Grid>

      <Grid item xs={12}>
        {data.errorMessage && (
          <Alert
            severity="error"
            onClose={() => setData({ ...data, errorMessage: "" })}
          >
            {data.errorMessage}
          </Alert>
        )}
        {data.successMessage && (
          <Alert
            severity="success"
            onClose={() => setData({ ...data, successMessage: "" })}
          >
            {data.successMessage}
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default Transfer1;
