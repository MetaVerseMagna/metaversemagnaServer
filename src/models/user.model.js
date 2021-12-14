const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    address: String,
    required: true
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);


module.exports = mongoose.model("user", userSchema)
