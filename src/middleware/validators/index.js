const { check } = require("express-validator");

exports.LoginValidator = [
  check("email", "E-mail is required").not().isEmpty(),
  check("passowrd", "Password is required").not().isEmpty(),
];

exports.RegisterValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
  check("firstName", "First Name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("age", "Age is required").not().isEmpty(),
  check("gender", "Valid Gender is required").isIn([
    "MALE",
    "FEMALE",
    "OTHERS",
  ]),
];

exports.RegisterAdminValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
];
