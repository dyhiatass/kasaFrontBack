const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (userData) => {
  const { name, email, password } = userData;
  let user = await User.findOne({ email });

  if (user) {
    throw new Error("User already exists");
  }

  user = new User({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  await user.save();
  return user;
};
