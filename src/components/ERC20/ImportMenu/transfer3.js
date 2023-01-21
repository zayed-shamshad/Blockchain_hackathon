import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";

const { web3, applyDecimals } = require("../../../utils/ethereumAPI");

const Transfer3 = ({ web3Token, tokenData, refreshDataGrid }) => {
  const symbol = tokenData.find((x) => x.name === "Symbol").value;
  const decimals = tokenData.find((x) => x.name === "Decimals").value;
  console.log(tokenData[0]);

  const [data, setData] = useState({
    arg1: "",
    arg2: "",
    tokenaddress: "",
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
          {data.loading ? null : "transfer(address to, uint256 value)"}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="To"
          sx={{ m: 1, width: "50ch" }}
          size="small"
          placeholder="0x"
          onChange={(e) =>
            setData({
              ...data,
              arg1: e.target.value,
              errorMessage: "",
              successMessage: "",
            })
          }
          InputLabelProps={{ shrink: true }}
          disabled={data.loading}
        />
        <TextField
          label="Value"
          sx={{ m: 1, width: "30ch" }}
          size="small"
          placeholder="1"
          type="number"
          onChange={(e) =>
            setData({
              ...data,
              arg2: e.target.value,
              errorMessage: "",
              successMessage: "",
            })
          }
          InputLabelProps={{ shrink: true }}
          disabed={data.loading}
        />
        <TextField
          label="Currency"
          sx={{ m: 1, width: "50ch" }}
          size="small"
          placeholder={tokenData[0].value}
          onChange={(e) =>
            setData({
              ...data,
              tokenaddress: e.target.value,
              errorMessage: "",
              successMessage: "",
            })
          }
          InputLabelProps={{ shrink: true }}
          disabled={data.loading}
        />
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

export default Transfer3;
