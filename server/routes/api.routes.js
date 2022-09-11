const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const chatRoutes = require("./chat.routes");
router.use("/chat", authController.protect, chatRoutes);

const messageRoutes = require("./message.routes");
router.use("/message", messageRoutes);

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);

const userRoutes = require("./user.routes");
router.use("/user", authController.protect, userRoutes);

module.exports = router;
