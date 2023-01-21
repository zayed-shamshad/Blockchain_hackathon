import { useState } from "react";
import { Link, Box } from "@mui/material";
import ERC20Create from "./ERC20Create";
import ERC20CreateSample from "./ERC20CreateSample";
import ERC20MainMenu from "./ERC20MainMenu";
import ERC20Import from "./ERC20Import";
import Login from "../login/Login";
import Dashboard from "../student/dashboard";

const Menu = {
  Main: 0,
  Create: 1,
  Import: 2,
  LoginPage: 3,
  CreateSample: 4,
  Dashboard: 5,
};

const ERC20App = () => {
  const [menu, setMenu] = useState(Menu.LoginPage);
  const [tokenAddress, setTokenAddress] = useState("");
  const [token, setToken] = useState("");

  const onClickCreate = () => setMenu(Menu.Create);
  const onClickCreateSample = ({ token }) => setMenu(Menu.CreateSample);
  const importToken = (address) => {
    setTokenAddress(address);
    setMenu(Menu.Import);
  };

  return (
    <div>
      {menu !== Menu.Main && menu !== Menu.LoginPage && (
        <Box sx={{ height: "5ch" }}>
          <Link href="#" onClick={() => setMenu(Menu.Main)} sx={{ m: 1 }}>
            Back
          </Link>
        </Box>
      )}
      {menu === Menu.Dashboard && (
        <Dashboard token={token} importToken={importToken} />
      )}
      {menu === Menu.LoginPage && (
        <Login setMenu={setMenu} main={Menu.Main} />
      )}
      {menu === Menu.Main && (
        <ERC20MainMenu
          onClickCreate={onClickCreate}
          importToken={importToken}
        />
      )}
      {menu === Menu.Create && (
        <ERC20Create
          importToken={importToken}
          token={token}
          setToken={setToken}
          onClickCreateSample={onClickCreateSample}
        />
      )}
      {menu === Menu.Import && <ERC20Import tokenAddress={tokenAddress} />}
      {menu === Menu.CreateSample && (
        <ERC20CreateSample token={token} importToken={importToken} />
      )}
    </div>
  );
};

export default ERC20App;
