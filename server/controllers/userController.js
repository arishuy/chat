const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");

exports.getAllFriends = catchAsync(async (req, res) => {
  const friends = await User.findById(req.user._id)
    .populate("friends")
    .select("friends");
  res.status(200).json({
    status: "success",
    data: {
      friends: friends,
    },
  });
});

exports.addNewFriend = catchAsync(async (req, res, next) => {
  const friend = await User.findById(req.body.id);
  if (!friend) {
    return next(new AppError(`No user found with that ID`, 404));
  }
  if (friend._id === req.user._id) {
    return next(new AppError(`You can't add yourself as a friend`, 400));
  }
  if (friend.friends.includes(req.user._id)) {
    return next(new AppError(`You are already friends with this user`, 400));
  }
  if (friend.waitingRequestFriends.includes(req.user._id)) {
    return next(
      new AppError(`You have already sent a request to this user`, 400)
    );
  }
  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { waitingAcceptedFriends: req.body.id },
  });
  await User.findByIdAndUpdate(req.body.id, {
    $push: { waitingRequestFriends: req.user._id },
  });
  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
});

exports.acceptFriend = catchAsync(async (req, res) => {
  const friend = await User.findById(req.body.id);
  if (!friend) {
    return next(new AppError(`No user found with that ID`, 404));
  }
  await User.findByIdAndUpdate(req.user._id, {
    $push: { friends: req.body.id },
  });
  await User.findByIdAndUpdate(req.body.id, {
    $push: { friends: req.user._id },
  });
  await User.findByIdAndUpdate(req.body.id, {
    $pull: { waitingAcceptedFriends: req.user._id },
  });
  await User.findByIdAndUpdate(req.user._id, {
    $pull: { waitingRequestFriends: req.body.id },
  });
  const chat = await Chat.create({
    chatName: `${req.user.name} and ${friend.name}`,
    isGroupChat: false,
    users: [req.user._id, req.body.id],
  });
  const message = await Message.create({
    sender: req.user._id,
    chat: chat._id,
    content: `You are now friends with ${friend.name}`,
  });
  res.status(200).json({
    status: "success",
    data: {
      friends: friend,
      chat: chat,
    },
  });
});

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id)
    .populate("waitingRequestFriends")
    .populate("friends");
  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
};

exports.FindUserByName = catchAsync(async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ name: req.body.name }, { email: req.body.email }],
  });
  if (!user) {
    return next(new AppError(`No user found with that name`, 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      userId: user._id,
    },
  });
});

// exports.getFriendRequestsByUserID = async (req, res) => {
//   const waitingRequestFriends = await User.findById(req.user._id);
//   res.status(200).json({
//     status: "success",
//     data: {
//       user: waitingRequestFriends,
//     },
//   });
// };

exports.deleteFriendRequest = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.user.friends);
  if (req.user.friends.includes(req.params.id)) {
    return next(new AppError(`You are already friends with this user`, 400));
  }
  await User.findByIdAndUpdate(req.user._id, {
    $pull: { waitingAcceptedFriends: req.params.id },
  });
  const user = await User.findByIdAndUpdate(req.params.id, {
    $pull: { waitingRequestFriends: req.user._id },
  });
  res.status(200).json({
    status: "success",
    message: "Friend request deleted",
  });
});

//A add B // A nam trong waitingRequestFriends cua B // B nam trong waitingAcceptedFriends cua A
