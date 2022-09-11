const express = require("express");
const router = express.Router();
//const path = require("path");
const authController = require("../controllers/authController");

const messageController = require("../controllers/messageController");
const Message = require("../models/messageModel");
router.get("/", messageController.getAllMessages);
router.get("/:chatId", messageController.getAllMessagesInChat);
router.post("/:chatId", authController.protect, messageController.createNewMessage);
router.get("/:id", messageController.getMessageById);

module.exports = router;
