const Chat = require("../models/chatModel");
const catchAsync = require("../utils/catchAsync");

exports.createNewChat =catchAsync(async (req, res, next) => {
  const newChat = await Chat.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      chat: newChat,
    },
  });
});

exports.getAllChats = catchAsync(async (req, res) => {
  let query = {};
  if (req.user) { 
    query = { users: req.user };
  }
  const chats = await Chat.find(query).populate("lastestMessage");
  res.status(200).json({
    status: "success",
    data: {
      chats: chats,
    },
  });
});

exports.getChatById = catchAsync(async (req, res, next) => {
  const chat = await Chat.findById(req.params.id).populate("latestMessage");
  res.status(200).json({
    status: "success",
    data: {
      chat: chat,
    },
  });
});
