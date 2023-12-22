const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    return res.status(201).json({ user: savedUser });
  } catch (err) {
    next(err);
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (!isUser) return res.status(404).json("User not found");
    const isMatched = await bcrypt.compare(password, isUser.password);
    if (!isMatched) {
      return res.status(401).json("Wrong credentials");
    }
    const token = jwt.sign({ id: isUser._id }, process.env.SECRET_KEY);
    if (isUser) {
      const { password, ...userRes } = isUser._doc;
      return res
        .status(201)
        .cookie("token", { token }, { httpOnly: true })
        .json({ user: userRes });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { Login, Register };
