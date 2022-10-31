const Notification = require("../models/notificationModel");
const Chat = require("../models/chatModel");
const catchAsync = require("../utils/catchAsync");

exports.createNewNotification = catchAsync(async (req, res, next) => {
  const notifMessage = await Notification.findOne({
    sender: req.user._id,
    isMessage: true,
  });
  if (notifMessage && req.body.isMessage) {
    const notif = await Notification.findOneAndUpdate(
      { sender: req.user._id, isMessage: true },
      {
        content: req.body.content,
      }
    );
     res.status(201).json({
       status: "success",
       data: {
         notification: notif,
       },
     });
  } else {
    const newNotification = await Notification.create({
      sender: req.user._id,
      content: req.body.content,
      receivers: req.body.receivers,
      isMessage: req.body.isMessage,
      receiverChat: req.body.receiverChat,
    });
     res.status(201).json({
       status: "success",
       data: {
         notification: newNotification,
       },
     });
  }
});

exports.getAllNotificationsByUser = catchAsync(async (req, res) => {
  const notifications = await Notification.find({
    user: req.user._id,
  }).populate("receivers");
  res.status(200).json({
    status: "success",
    data: {
      notifications: notifications,
    },
  });
});

exports.getAllNotificationsToMe = catchAsync(async (req, res) => {
  const notifications = await Notification.find({ receivers: req.user._id }).populate("sender");
  res.status(200).json({
    status: "success",
    data: {
      notifications: notifications,
    },
  });
});
