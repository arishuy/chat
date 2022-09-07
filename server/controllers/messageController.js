const Message = require("../models/messageModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
exports.createNewMessage = catchAsync(async (req, res, next) => {
  const message = await Message.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      message: message,
    },
  });
});

exports.getAllMessages = catchAsync(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    status: "success",
    data: {
      messages: messages,
    },
  });
});

exports.getMessageById = catchAsync(async (req, res, next) => {
  const message = await Message.findById(req.params.id);
  if (!message) {
    return next(new AppError(`No message found with that ID`, 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      message: message,
    },
  });
});

exports.getAllMessagesInChat = catchAsync(async (req, res, next) => {
  const messages = await Message.find({ chat: req.query.chatId });
  console.log(req.query.chatId);
  if (messages.length === 0) {
    return next(new AppError(`No messages found in that chat`, 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      messages: messages,
    },
  });
});
