const Chat = require('../models/chatModel');
const catchAsync = require('../utils/catchAsync');

exports.createNewChat = catchAsync(async (req, res,next) => { 
    const newChat = await Chat.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        chat: newChat
      }
    });
})

exports.getAllChats = catchAsync(async (req, res) => { 
    //Build query
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);
    const query = Message.find(queryObj);

    //Execute query
    const chat = await query;
    const allChats = await Chat.find();
    res.status(200).json({
      status: "success",
      data: {
        chats: allChats
      }
    })
})

exports.getChatById = catchAsync(async (req, res,next) => {
    const chat = await Chat.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        chat:chat,
      }
    })
 })
