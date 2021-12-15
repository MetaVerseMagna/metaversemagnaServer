const { CustomError } = require("./../utils");
const User = require('./../models/user.model');
const axios = require('axios');
const { blockchain } = require('./../config/index');


class TokenService {

  async getMetaData(data) {
    const { token_id } = data

    const token = await User.findOne({ token: token_id });

    if (!token) throw new CustomError("token does not exists", 400);

    const metaData = (await axios(
      {
        method: 'get',
        url: `${blockchain.IPFS_GATEWAY_BASE_URL}/${token.ipfsHash}`
      }
    )).data

    return metaData
  }


}


module.exports = new TokenService();