const { blockchain } = require('./index');
const erc721 = require('../artifacts/magnaBadge.json');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const Web3Service = require('../services/web3.service');

const web3 = new Web3(new Web3.providers.WebsocketProvider(blockchain.NODE_SOCKET))


module.exports = {
    default: async () => {
        const contractInstance_721 = await new web3.eth.Contract(erc721, blockchain.CONTRACT_ADDRESS_721)

        contractInstance_721.events.Transfer({ filter: { from: "0x0000000000000000000000000000000000000000" } }).on('data', async (event) => {
            console.log('received events ', event);
            return Web3Service.bindTokenToMetadata({ tokenId: event.returnValues.tokenId, address: event.returnValues.to, contractAddress: event.address })
        }).on('error', console.error);


        async function getNonce(numb) {
            const number = await web3.eth.getTransactionCount(blockchain.SIGNING_ADDRESS)
            return `0x${(number + numb).toString(16)}`
        }

        async function encodeFunctionCall(functionInterface, data) {
            return await web3.eth.abi.encodeFunctionCall(functionInterface, data)
        }

        return { contractInstance_721, getNonce, encodeFunctionCall }
    },
    web3: web3
}