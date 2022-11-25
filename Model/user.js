const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  name_eng: {
    type: String
  },
  constact_number: {
    type: Number
  },
  photo_url: {
    type: Object
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", AgentSchema);
