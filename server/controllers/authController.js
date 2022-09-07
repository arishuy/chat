const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken')
const AppError = require('../utils/appError')
const { promisify } = require('util')
const signToken = id => { 
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = catchAsync(async (req, res, next) => { 
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);
    res.status(201).json({
        status: "success",
        token,
      data: {
        user: newUser
      }
    });
})

exports.login = catchAsync(async (req, res, next) => { 
    //1.check if email and password exist
    const { email, password } = req.body;
    console.log(email, password);
    if(!email || !password){
       return next(new AppError("Please provide email and password", 400))
    }
    //2.check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');
    console.log(user);

    if(!user || !(await user.correctPassword(password,user.password))){
        return next(new AppError("Incorrect email or password", 401))
    }
    //3. send token to client
    const token = signToken(user._id);
    res.status(200).json({
        status: "success",
        token
    })
})

exports.protect = catchAsync(async (req, res, next) => { 
    //1. get token and check if it exists
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){ 
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token){ 
        next(new AppError("You are not logged in. Please log in to get access", 401))
    }
    //2. verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded);
    //3 check if user still exists
    const freshUser = await User.findById(decoded.id);
    if(!freshUser){ 
        return next(new AppError("The user belonging to this token no longer exists", 401))
    }
    //4 check if user changed password after the token was issued
    if (freshUser.changedPasswordAfter(decoded.iat)) { 
        return next(new AppError("User recently changed password! Please log in again", 401))
    }
    const x = freshUser.changedPasswordAfter(decoded.iat);
    console.log(x);
    req.user = freshUser;
    next();
})