const mongoose = require("mongoose");

const reminderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, trim: true },
    time: { type: String, trim: true },
    date: { type: String, trim: true },
  },
  { timestamps: true }
);

const reminder = mongoose.model("reminder", reminderSchema);

module.exports = reminder;
