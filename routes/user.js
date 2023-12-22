const express = require("express");
const { Login, Register } = require("../controllers/user");
const Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);

module.exports = Router;
