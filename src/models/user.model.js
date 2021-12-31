const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  contractAddress: {
    type: String,
    required: true
  },
  ipfsHash: {
    type: String,
    required: true
  },
  tokenId: {
    type: String,
    required: true
  },
  discordUsername: {
    type: String
  }
}, { timestamps: true });


module.exports = mongoose.model("user", userSchema)
