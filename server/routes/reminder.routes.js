const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderController");
const Reminder = require("../models/reminderModel");

router.post("/addreminder", reminderController.createNewReminder);

module.exports = router;
