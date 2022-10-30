const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderController");

router.post("/addreminder", reminderController.createNewReminder);

module.exports = router;
