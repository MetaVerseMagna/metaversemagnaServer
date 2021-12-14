const { blockchain } = require('../config/index');
const erc721 = require('../artifacts/magnaBadge.json');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(blockchain.PRIVATE_KEY, blockchain.NODE)
const web3 = new Web3(provider)


module.exports = async () => {
    const contractInstance_721 = await new web3.eth.Contract(erc721, blockchain.CONTRACT_ADDRESS_721)

    console.log('contractInstance 721 ', contractInstance_721)

    async function getNonce(numb) {
        const number = await web3.eth.getTransactionCount(blockchain.SIGNING_ADDRESS)
        return `0x${(number + numb).toString(16)}`
    }

    async function encodeFunctionCall(functionInterface, data) {
        return await web3.eth.abi.encodeFunctionCall(functionInterface, data)
    }

    return { contractInstance_721, getNonce, encodeFunctionCall }
};

