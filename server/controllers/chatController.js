const Chat = require("../models/chatModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createNewChat = catchAsync(async (req, res, next) => {
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
  const chats = await Chat.find(query).populate("latestMessage").populate("users");
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

exports.getChatId = catchAsync(async (req, res, next) => {
  console.log(req.params.friendId);
  const chat = await Chat.findOne({ users: { "$all": [req.user._id, req.params.friendId] } });
  console.log(req.query.friendId);
  if (!chat) { 
    return new AppError("Chat not found");
  }
  res.status(200).json({
    status: "success",
    data: {
      chatId: chat._id,
    },
  })
});
