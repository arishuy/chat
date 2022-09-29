const express = require("express");
const router = express.Router();
//const path = require("path");

const userController = require("../controllers/userController");
const User = require("../models/userModel");
router.get("/:id",userController.getUserById);
router.get("/friends", userController.getAllFriends);
//router.get("/friendRequests", userController.getFriendRequestsByUserID);
router.post("/addFriend", userController.addNewFriend);
router.post("/acceptFriend", userController.acceptFriend);


module.exports = router;
