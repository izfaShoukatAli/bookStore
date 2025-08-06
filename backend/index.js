const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookRouter = require("./Router/bookRouter");
const userRouter = require("./Router/userRouter");
const contactRouter = require("./Router/contactRouter");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}
app.use("/book", bookRouter);
app.use("/user", userRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });
