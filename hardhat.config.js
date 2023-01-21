/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const exp =  {
  solidity: "0.8.3",
  paths: {
    sources: "./src/solidity/contracts",
    tests: "./src/solidity/test",
    cache: "./src/solidity/cache",
    artifacts: "./src/solidity/artifacts"
  }
};

export default exp;
