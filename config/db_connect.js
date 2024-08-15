require("dotenv").config();
var mongoose = require("mongoose");

let conect_db = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db has been conected succefully");
};
module.exports = conect_db;
