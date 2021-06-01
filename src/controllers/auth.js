const { authenticateUser, signJWT } = require("../services/authService");
const { createUser, createAdmin } = require("../services/userService");
const { validationResult } = require("express-validator");
exports.Login = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await authenticateUser({ email, password });
    const token = await signJWT(user.email);
    console.log(token);
    return res.json({ token });
  } catch (error) {
    return res.status(401).json({ errors: error });
  }
};

exports.Register = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, firstName, lastName, age, gender } = req.body;
  try {
    const createdUser = await createUser({
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
    });
    // console.log(createdUser);
    delete createdUser.password;
    return res.send(createdUser);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.GetMyProfile = async function (req, res) {
  return res.status(200).json({ message: "WIP" });
};
exports.RegisterAdmin = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, firstName, lastName, age, gender } = req.body;
  try {
    const createdAdmin = await createAdmin({
      email,
      password,
    });
    // console.log(createdUser);
    delete createdAdmin.password;
    return res.send(createdAdmin);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};
