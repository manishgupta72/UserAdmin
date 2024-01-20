const User = require("../model/user");
const bcrypt = require("bcrypt");
// home page
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome manish in Express js using router");
  } catch (error) {
    console.log(error);
  }
};
// register
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }
    const Userdata = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "registration successfull!",
      token: await Userdata.generateToken(),
      userId: Userdata._id.toString(),
    });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    //compare password in usermode with schema

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(201).json({
        msg: "Login successfull!",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// to send user data user logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};
module.exports = { home, register, login, user };
