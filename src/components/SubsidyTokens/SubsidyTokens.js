import React, { useEffect, useState } from 'react';
import './SubsidyTokens.css';
import SubsidyToken from './SubsidyToken/SubsidyToken';
import {MyTokens} from './TokenData';

const SubsidyTokens = ({token, setToken, onClickCreateSample}) => {
    return (
        <div className="token-grid">
            {MyTokens.map((m) =>{   
                return(
                    <div className="token">
                        <SubsidyToken key={m.id} current={m} token={token} setToken={setToken} onClickCreateSample={onClickCreateSample}/>        
                    </div>
                );   
            })}
        </div>
    )
};

export default SubsidyTokens;
