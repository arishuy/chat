const Reminder = require("../models/reminderModel");
const catchAsync = require("../utils/catchAsync");

exports.createNewReminder = catchAsync(async (req, res, next) => {
    const newReminder = await Reminder.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        reminder: newReminder,
      },
    });
  });

exports.getAllReminders = catchAsync(async (req, res) => {
    const reminders = await Reminder.find();
    res.status(200).json({
      status: "success",
      data: {
        reminders: reminders,
      },
    });
  });
  
  