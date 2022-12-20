const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderController");

router.get("/getallreminders", reminderController.getAllReminders);
router.post("/addreminder", reminderController.createNewReminder);

module.exports = router;
