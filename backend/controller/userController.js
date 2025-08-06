const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    const user = await User.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const hashpassword = await bcrypt.hash(Password, 10);
    const createUser = new User({
      FullName: FullName,
      Email: Email,
      Password: hashpassword,
    });
    await createUser.save();
    res.status(201).json({
      message: "user created successfully",
      user: {
        _id: createUser._id,
        FullName: createUser.FullName,
        Email: createUser.Email,
      },
    });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// module.exports = getUser;

const loginUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    return res.status(200).json({
      message: "user login successfully",
      user: {
        _id: user._id,
        FullName: user.FullName,
        Email: user.Email,
      },
    });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = {
  getUser,
  loginUser,
};
