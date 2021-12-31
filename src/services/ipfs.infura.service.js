const { blockchain } = require('../config/index');
const ipfsClient = require('ipfs-http-client');
const fs = require('fs');


class IpfsService {

    constructor() {
        this.ipfs = ipfsClient.create(new URL(blockchain.INFURA_IPFS_NODE))
    }


    async uploadFileToIpfs(filePath) {
        return new Promise((res, rej) => {
            const uploadResult = await this.ipfs.add(fs.readFileSync(filePath))
            res({ message: "success", data: uploadResult });
        }).then(data => {
            return data
        }).catch(err => {
            return err
        })



    }

    async uploadJsonToIpfs(data) {
        return new Promise((res, rej) => {
            const uploadResult = await this.ipfs.add(JSON.stringify(data))
            res({ message: "success", data: uploadResult });
        }).then(data => {
            return data
        }).catch(err => {
            return err
        })

    }
}


module.exports = new IpfsService();