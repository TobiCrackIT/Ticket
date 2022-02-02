const { ethers } = require("hardhat");

async function main() {

    const whitelistContract = await ethers.getContractFactory('Whitelist');

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(100);
    // 100 is the Maximum number of whitelisted addresses allowed

    // Wait for contract to finish deploying
    await deployedWhitelistContract.deployed();

    console.log("Whitelist Contract Address :", deployedWhitelistContract.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });