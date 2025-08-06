const express = require("express");
const { contactMasg } = require("../controller/contactController");

const contactRouter = express.Router();

contactRouter.post("/contactUser", contactMasg);
module.exports = contactRouter;
