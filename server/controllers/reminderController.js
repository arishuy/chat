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
  