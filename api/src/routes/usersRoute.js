const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController");
const User = require("../models/Usermodel");

router.get("/allUsers", AuthController.getAllUsers);
router.post("/register", AuthController.register);

module.exports = router;