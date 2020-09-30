const mongoose = require("mongoose");
const User = require("./models/User.model");

const connection = "mongodb://mongo:27017/mongo-novoresume-challenge";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;