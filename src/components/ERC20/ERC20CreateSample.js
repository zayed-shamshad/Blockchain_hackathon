import { useState } from 'react'
import { Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material'
import SubsidyTokens from "../SubsidyTokens/SubsidyTokens";
import { collection, addDoc } from "firebase/firestore";

import {db } from "../login/config.js";

const ERC20Token = require("./ERC20Token");
const { applyDecimals, web3 } = require('../../utils/ethereumAPI');
const web3Token = new web3.eth.Contract(ERC20Token.abi);


const ERC20CreateSample = ({ importToken, token }) => {
    const defaultDecimals = "18";
    const defaultInitialSupply = "1000000000000000000"; // 1
    const tokenName = token.tokenName;
    const tokenSymbol = token.tokenSymbol;
    const [tokenInitialSupply, setTokenInitialSupply] = useState(defaultInitialSupply);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const onClickActionn = async () => {
        const docRef = await addDoc(collection(db, "tokenid"), {
            tokenstring: "zaidshamshad"
        });
        console.log("Document written with ID: ", "zaidshamshad");
    };

    const onClickAction = async () => {
        const docRef = await addDoc(collection(db, "tokenid"), {
            tokenstring: "zaidshamshad"
        });
        console.log("Document written with ID: ", "zaidshamshad");
        if(successMessage) {
            importToken(web3Token.options.address);
            return;
        }
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const accounts = await web3.eth.getAccounts();
        try {
           

                
            const result = await web3Token
                            .deploy({
                                data: ERC20Token.bytecode,
                                arguments: [tokenName, tokenSymbol, tokenInitialSupply]
                            })
                            .send({ from: accounts[0] });

            web3Token.options.address = result._address;
            setSuccessMessage(`Token successfully deployed at: ${result._address}`);
        } catch (error) {
            setErrorMessage(error.message);
        }

        setLoading(false);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" noWrap component="div" sx={{ m: 1 }}>
                    Create  {token.name} Token
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Initial supply (raw)"
                    sx={{ m: 1, width: '30ch' }}
                    placeholder={defaultInitialSupply}
                    type="number"
                    value={tokenInitialSupply}
                    onChange={(e) => setTokenInitialSupply(e.target.value)}
                />
                <TextField
                    label="Initial supply (adjusted)"
                    sx={{ m: 1, width: '30ch' }}
                    placeholder="1"
                    value={applyDecimals(tokenInitialSupply, defaultDecimals)}
                    variant="filled"
                />
                <TextField
                    label="Decimals"
                    sx={{ m: 1, width: '10ch' }}
                    value={defaultDecimals}
                    type="number"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12}>
                {successMessage && <Alert severity="success">{successMessage}</Alert>}
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <Button
                    variant="contained"
                    sx={{ m: 1 }}
                    onClick={() => onClickActionn()}
                    disabled={loading}
                >
                    {successMessage ? "Token info" : (loading ? null : "Create")}
                </Button>
            </Grid>
        </Grid>
    )
}

export default ERC20CreateSample