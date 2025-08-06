const express = require("express");
const { getBook } = require("../controller/bookController");

const bookRouter = express.Router();

bookRouter.get("/", getBook);
module.exports = bookRouter;
