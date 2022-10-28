const express = require("express");
const router = express.Router();
//const path = require("path");

const notificationController = require("../controllers/notificationController");
const Chat = require("../models/chatModel");

router.post("/", notificationController.createNewNotification);
router.get("/tome", notificationController.getAllNotificationsToMe);


module.exports = router;
