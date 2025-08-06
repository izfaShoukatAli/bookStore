const express = require("express");
const { getUser, loginUser } = require("../controller/userController");

const userRouter = express.Router();
userRouter.post("/signup", getUser);
userRouter.post("/loginUser", loginUser);

module.exports = userRouter;
