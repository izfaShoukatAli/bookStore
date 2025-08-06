const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
