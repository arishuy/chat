const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


exports.createNewMessage = catchAsync(async (req, res, next) => {
  if (!req.body.sender) {
    req.body.sender = req.user._id;
  }
  if (!req.body.chat) { 
    req.body.chat = req.params.chatId;
  }
  const message = await Message.create(req.body);
  await Chat.findByIdAndUpdate(req.params.chatId, {latestMessage: message._id });
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
  const messages = await Message.find({ chat: req.params.chatId});
  res.status(200).json({
    status: "success",
    data: {
      messages: messages,
    },
  });
});
