const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema = new Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Login", loginSchema);
