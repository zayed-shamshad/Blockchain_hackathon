import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import tokenImg from './token.svg'
import './admin.css'

const ERC20MainMenu = ({ onClickCreate, importToken }) => {
    const [tokenAddress, setTokenAddress] = useState("");

    return (
        
        <Grid container spacing={2}>
        
            <div style={{marginTop:"7%"}}>
            <Grid item xs={12}>
                <Button
                 style={{marginTop:"10%",backgroundColor:"brown"}}
                    variant="contained"
                    sx={{ m: 1 }}
                    onClick={() => onClickCreate()}
                >
                    Create token
                </Button>
                
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Token address"
                    sx={{ m: 1, width: '50ch' }}
                    placeholder="0x"
                    size="small"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                />
                <Button
                    style={{marginTop:"10%",backgroundColor:"brown"}}
                    variant="contained"
                    sx={{ m: 1 }}
                    onClick={() => importToken(tokenAddress)}
                >
                    Import token
                </Button>
                
            </Grid>
            </div>
            <div className='Image' align='right'>
    <img src= {tokenImg}/>
</div>
            
        </Grid>
        
        
    )
}

export default ERC20MainMenu
