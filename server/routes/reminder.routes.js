const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderController");
const authController = require("../controllers/authController");

router.get("/getallreminders", reminderController.getAllReminders);
router.post("/addreminder", reminderController.createNewReminder);
router.delete("/deletereminder/:id", reminderController.deleteReminder);
router.put("/updatereminder/:id", reminderController.updateReminder);

module.exports = router;
