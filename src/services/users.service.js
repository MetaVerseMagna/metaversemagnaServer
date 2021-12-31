const User = require("../models/user.model");
const { CustomError } = require("../utils");


class UserService {

  async create(data) {
    const user = await new User(data).save();

    return user
  }

  async findOne(data) {
    const { token } = data

    const user = await User.findOne({ tokenId: token });

    if (!user) throw new CustomError("meta data for token not found", 404);

    return user
  }

  async update(data) {
    await User.updateOne({ ...data });

    return;
  }


}


module.exports = new UserService();