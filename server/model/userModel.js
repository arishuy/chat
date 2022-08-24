const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    account: { type: String, unique: true, required: true },
    email: { type: String },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://l.facebook.com/l.php?u=http%3A%2F%2Fchiase24.com%2Fwp-content%2Fuploads%2F2022%2F02%2Ftang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg%3Ffbclid%3DIwAR22Qoko-eFgfQDcH7nungzG0zCunGI_szlDREuGiHBjdzsDYi5aYm28dds&h=AT2Fj3RJgMB8uitppCowT5BJ_xcPhNJGzXBfnNgfhM1rrsNM3MTd1tJDqRAFNwaeTuVh5hSVzxepS2vk9tWvz93-paKoLe85oVqikjSWmY__eGqQELos083GpbQzLx8aOtGxWw",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.Model("User", chatModel);

module.exports = User;
