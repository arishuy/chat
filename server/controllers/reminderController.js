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
    const id = req.user._id;
    const reminders = await Reminder.find({user: id});
    res.status(200).json({
      status: "success",
      data: {
        reminders: reminders,
      },
    });
  });
  
exports.deleteReminder = catchAsync(async (req, res) => {
    const reminder = await Reminder.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        reminder: reminder,
      },
    });
  }
);

exports.updateReminder = catchAsync(async (req, res) => {
    const reminder = await Reminder.findByIdAndUpdate(req.params.id)
    res.status(200).json({
      status: "success",
      data: {
        reminder: reminder,
      },
    });
  }
);
  