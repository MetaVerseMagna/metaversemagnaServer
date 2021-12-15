const router = require("express").Router();
const TokenCtrl = require("../controllers/token.controller");


router.get("/:token", TokenCtrl.getMetaData);


module.exports = router