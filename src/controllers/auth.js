const { authenticateUser, signJWT } = require("../services/authService");
const { createUser } = require("../services/userService");

exports.Login = async function (req, res) {
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
  const { email, password, firstName, lastName, age, gender, userType } =
    req.body;
  try {
    const createdUser = await createUser({
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
    });
    console.log(createdUser);
    return res.send(createdUser);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.GetMyProfile = async function (req, res) {
  return res.status(200).json({ message: "WIP" });
};
exports.RegisterAdmin = async function (req, res) {
  return res.status(200).json({ message: "WIP" });
};
