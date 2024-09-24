require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");
require('dotenv').config();
 
const privateKey1 = process.env.privateKey1;
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
    },
    sepolia: {
      apiKey: process.env.SEPOLIA_API_KEY,
      url: process.env.SEPOLIA_INFURA_API_KEY,
      accounts: [privateKey1]
    },
    polygonAmoy: {
      apiKey: process.env.POLYGON_AMOY_API_KEY,
      url: "https://rpc-amoy.polygon.technology",
      accounts: [privateKey1],
      chainId: 80002
    }
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: process.env.POLYGON_AMOY_API_KEY
  },
};