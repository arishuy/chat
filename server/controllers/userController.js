const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllFriends = catchAsync(async (req, res) => {
  const friends = await User.findById(req.user._id).populate("friends").select("friends");
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
  await User.findByIdAndUpdate(req.user._id, { $push: {friends: req.body.id }});
  next();
});

