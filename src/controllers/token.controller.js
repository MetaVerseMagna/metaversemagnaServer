const TokenService = require("../services/token.service");

const response = require("../utils/response");


class TokenController {


  async getMetaData(req, res) {
    const result = await TokenService.getMetaData(req.params);
    res.status(200).send((response("users data", result)).data);
  }

  async whitelistUsername(req, res) {
    const result = await TokenService.whitelistUsername(req.query);
    res.status(200).send(response("Address whitelisted ", result));
  }

  async validateUsernameAccess(req, res) {
    const result = await TokenService.validateUsernameAccess(req.query);
    res.status(200).send(response("Username whitelist result ", result));
  }


}


module.exports = new TokenController();
