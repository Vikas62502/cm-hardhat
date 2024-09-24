const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ProjectFactoryModule", (m) => {

    const projectFactory = m.contract("FactoryContract");

    return { projectFactory };
});