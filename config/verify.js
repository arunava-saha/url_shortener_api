const jwt = require("jsonwebtoken");
require("dotenv").config();
const verify = async (req, res, next) => {
  try {
    const token = req.cookies.token.token;
    // const token = req.headers.token;

    if (!token) return res.status(401).json({ mesage: "Unauthorized" });
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Wrong credentials" });
      }
      req.user = user;
    });
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verify;
