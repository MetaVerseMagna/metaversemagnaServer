const router = require("express").Router();
const TokenCtrl = require("../controllers/token.controller");

router.get('/validateUsernameAccess', TokenCtrl.validateUsernameAccess);

router.get("/:token_id", TokenCtrl.getMetaData);

router.post('/whitelistUsername', TokenCtrl.whitelistUsername);




module.exports = router