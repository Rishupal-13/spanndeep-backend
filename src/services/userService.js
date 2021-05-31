const User = require("../models/user");
const argon2 = require("argon2");
exports.createUser = async (userData) => {
  try {
    const hashedPassword = await argon2.hash(userData.password);
    userData.password = hashedPassword;
    const user = new User(userData);
    const createdUser = await user.save();
    delete createdUser.password;
    return createdUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.findUserByEmail = async (userData) => {
  try {
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      throw "User Not Found";
    }
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};
