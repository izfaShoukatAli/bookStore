const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    require: true,
  },
});
const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
