const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const {
  RegisterValidator,
  RegisterAdminValidator,
  LoginValidator,
} = require("../middleware/validators");
const auth = require("../middleware/auth");
router.get("/me", auth, AuthController.GetMyProfile);
router.post("/login", LoginValidator, AuthController.Login);
router.post("/register", RegisterValidator, AuthController.Register);
router.post(
  "/register-admin",
  RegisterAdminValidator,
  AuthController.RegisterAdmin
);
module.exports = router;
