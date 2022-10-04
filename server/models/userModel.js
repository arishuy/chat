const mongoose = require("mongoose");
const validator = require("validator");
const Message = require("./messageModel");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: [true, "Please provide a name"],
      unique: true,
    },
    email: {
      type: "String",
      unique: true,
      required: true,
      lơwercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: "String",
      required: [true, "Please provide a password"],
      minlength: 6,
      select: false,
    },
    passwordConfirm: {
      type: "String",
      required: [true, "Please provide a password Confirm"],
      //only works on CREATE and SAVE
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Password are not the same",
      },
    },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    slug: { type: "String", unique: true },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    waitingAcceptedFriends: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ],
    waitingRequestFriends: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ],
    passwordChangedAt: Date,
  },
  { timestaps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  console.log("1");
  console.log(this.passwordChangedAt);
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
