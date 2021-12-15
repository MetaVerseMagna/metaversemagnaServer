const Moralis = require('moralis/node');
const { blockchain } = require('../config/index');
const ipfsApi = require('ipfs-api');
const pinata = require('@pinata/sdk');
const fs = require('fs');




class IpfsService {

    constructor() {
        this.ipfs = pinata(blockchain.PINATA_API_KEY, blockchain.PINATA_API_SECRET)
    }


    async uploadFileToIpfs(filePath) {
        return new Promise((res, rej) => {
            const readableStream = fs.createReadStream(filePath)
            this.ipfs.pinFileToIPFS(readableStream).then(result => {
                console.log('result from upload ', result);
                res({ message: "success", data: result });
            }).catch(err => {
                console.log('an error occurred ', err);
                rej({ message: "error", err })
            })
        }).then(data => {
            return data
        }).catch(err => {
            return err
        })

    }

    async uploadJsonToIpfs(data) {
        return new Promise((res, rej) => {
            this.ipfs.pinJSONToIPFS(data).then(result => {
                console.log('result from json upload ', result);
                res({ message: "success", data: result })
            }).catch(err => {
                console.log('an error occurred ', err);
                rej({ message: "error", err })
            })
        }).then(data => {
            return data
        }).catch(err => {
            return err
        })

    }
}


module.exports = new IpfsService();