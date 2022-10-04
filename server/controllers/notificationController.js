const Notification = require("../models/notificationModel");
const catchAsync = require("../utils/catchAsync");

exports.createNewNotification = catchAsync(async (req, res, next) => {
    const newNotification = await Notification.create({
        sender: req.user._id,
        content: req.body.content,
        receivers: req.body.receivers,
  });
  res.status(201).json({
    status: "success",
    data: {
      notification: newNotification,
    },
  });
});

exports.getAllNotificationsByUser = catchAsync(async (req, res) => {
    const notifications = await Notification.find({ user: req.user._id }).populate("receivers");
    res.status(200).json({
      status: "success",
      data: {
        notifications: notifications,
      },
    });
});

exports.getAllNotificationsToMe = catchAsync(async (req, res) => {
    const notifications = await Notification.find({ receivers: req.user._id }).sort({ createAt: -1 });
    res.status(200).json({
      status: "success",
      data: {
        notifications: notifications,
      },
    });
});
