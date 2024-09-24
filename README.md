# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# Commnds for deployment
<!--  -->

npx hardhat compile
npx hardhat node

<!-- sepolia deployment -->
npx hardhat ignition deploy ./ignition/modules/Project-factory.js --network sepolia

<!-- polygonAmoy deployment -->
 npx hardhat ignition deploy .\ignition\modules\Project-factory.js --network polygonAmoy


<!-- contract verification -->
npx hardhat ignition deploy .\ignition\modules\Project-factory.js --network polygonAmoy --verify

<!-- verification by contract address -->
npx hardhat verify --network polygonAmoy <Your contract address>