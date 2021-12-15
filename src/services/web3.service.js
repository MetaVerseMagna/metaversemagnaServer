const ipfs = require('./ipfs.service');
const { blockchain } = require('../config/index');
const UserService = require('../models/user.model');

class Web3Service {
    async bindTokenToMetadata({ tokenId, address, contractAddress }) {
        //upload metadata containing token, user and badge information 
        let metaData = {
            description: `${blockchain.METADATA_DESCRIPTION}`,
            image: `${blockchain.BADGE_HASH}`,
            name: `${blockchain.METADATA_NAME}-${address}`,
            attributes: [
                {
                    "possessor": address
                }
            ]
        }

        const ipfsUploadResult = await ipfs.uploadJsonToIpfs(metaData);

        //save hash of metaData bound to the user address 
        await UserService.create({
            address,
            tokenId,
            contractAddress,
            ipfsHash: ipfsUploadResult.data.IpfsHash
        })


        return
    }
}


module.exports = new Web3Service();