const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: { type: String, trim: true },
    receivers: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createAt: { type: Date, default: Date.now },
    receiverChat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    Seen:{type:Boolean, default: false}
  },

  { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
