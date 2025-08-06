require("dotenv").config();
const nodemailer = require("nodemailer");
const transPorter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.PASS_KEY,
  },
});
module.exports = transPorter;
