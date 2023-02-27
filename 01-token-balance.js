const {Alchemy, Network} = require("alchemy-sdk");

require('dotenv').config()

const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ARB_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
    // Wallet address
    const address = "0x3eC0eddCd1e25025077327886A78133589082fB2";

    // Get token balances
    const balances = await alchemy.core.getTokenBalances(address);

    console.log(`The balances of ${address} address are:`, balances);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();