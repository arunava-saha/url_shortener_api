const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function DB(url) {
  return mongoose.connect(url);
}

module.exports = DB;
