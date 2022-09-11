const express = require("express");
const router = express.Router();
//const path = require("path");

const userController = require("../controllers/userController");
const User = require("../models/userModel");

router.post("/friends", userController.addNewFriend);
router.get("/friends", userController.getAllFriends);


module.exports = router;
