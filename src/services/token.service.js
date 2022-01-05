const { CustomError } = require("./../utils");
const User = require('./../models/user.model');
const axios = require('axios');
const { blockchain } = require('./../config/index');
let { web3 } = require('../config/web3.config');


class TokenService {

  async getMetaData(data) {
    const { token_id } = data

    const token = await User.findOne({ tokenId: token_id });

    if (!token) throw new CustomError("token does not exists", 400);

    const metaData = (await axios(
      {
        method: 'get',
        url: `${blockchain.IPFS_GATEWAY_BASE_URL}/${token.ipfsHash}`
      }
    )).data

    console.log(token_id)

    return metaData
  }

  async whitelistUsername(data) {
    const { address, name, v, r, s } = data;
    console.log('discordUsername ', name)

    //check that username isn't whitelisted yet
    let user = await User.findOne({ discordUsername: name });

    if (user) throw new CustomError("Username already whitelisted ", 400);

    //recover the signer of message and verify that it's  same with supplied address
    const messageHash = web3.eth.accounts.hashMessage(address)
    const signer = web3.eth.accounts.recover({
      messageHash,
      v,
      r,
      s
    })

    if (signer !== address) throw new CustomError("Message signer - address mismatch ", 400);

    //check that supplied address has minted an nft 

    user = await User.findOne({ address });

    if (!user) throw new CustomError("No badge record found for supplied address ", 400);

    //whitelist username
    await User.updateOne({ address }, {
      $set: {
        discordUsername: name
      }
    })

    return
  }

  async validateUsernameAccess(data) {
    const { name } = data

    //check that username is whitelisted 
    const user = await User.findOne({ discordUsername: name })

    if (!user) return { isUsernameWhitelisted: false }

    return { isUsernameWhitelisted: true };


  }


}


module.exports = new TokenService();