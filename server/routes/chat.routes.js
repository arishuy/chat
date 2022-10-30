const express = require("express");
const router = express.Router();
//const path = require("path");

const chatController = require("../controllers/chatController");

router.post("/", chatController.createNewChat);
router.get("/", chatController.getAllChats);
router.get("/:id", chatController.getChatById);
router.get("/getChatId/:friendId", chatController.getChatId);

module.exports = router;
