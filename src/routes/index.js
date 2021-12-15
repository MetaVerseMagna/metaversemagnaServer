const router = require("express").Router();

router.use('/token', require('./token.route'));


module.exports = router