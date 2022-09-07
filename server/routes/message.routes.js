const express = require("express");
const router = express.Router();
//const path = require("path");

const messageController = require("../controllers/messageController");
const Message = require("../models/messageModel");

router.get("/query", messageController.getAllMessagesInChat);
router.post("/", messageController.createNewMessage);
router.get("/", messageController.getAllMessages);
router.get("/:id", messageController.getMessageById);


module.exports = router;
