const express = require("express");
const router = express.Router();

const notificationController = require("../controllers/notificationController");

router.post("/", notificationController.createNewNotification);
router.get("/tome", notificationController.getAllNotificationsToMe);


module.exports = router;
