import React from 'react';
import './Button.css';
const Button = ({current, token, setToken, onClickCreateSample}) => {

    const CreateToken = (e) => {
        e.preventDefault();
        setToken(current);
        onClickCreateSample(token);
    };

    return (
        <div className="round">
		    <a className="button" onClick={(e) => CreateToken(e)}>Create Token</a>
        </div>
    )
}

export default Button;