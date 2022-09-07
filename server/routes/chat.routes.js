const express = require("express");
const router = express.Router();
//const path = require("path");

const chatController = require("../controllers/chatController");
const Chat = require("../models/chatModel");

router.post("/", chatController.createNewChat);
router.get("/", chatController.getAllChats);
router.get("/:id", chatController.getChatById);

module.exports = router;
