const TokenService = require("../services/token.service");

const response = require("../utils/response");


class TokenController {


  async getMetaData(req, res) {
    const result = await TokenService.getMetaData(req.params);
    res.status(200).send((response("users data", result)).data);
  }


}


module.exports = new TokenController();
