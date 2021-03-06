const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  companyName: { type: String, required: true },
  companyAdress: { type: String, required: true },
  vatNo: { type: String, required: true },
  eMail: { type: String, required: true },
  info: { type: String, required: false },
  conditions: { type: String, required: false },
});

module.exports = mongoose.model("Data", dataSchema);
