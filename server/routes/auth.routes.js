const express = require("express");
const router = express.Router();
//const path = require("path");

const authController = require("../controllers/authController");
const User = require("../models/chatModel");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
