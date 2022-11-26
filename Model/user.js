const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  name_eng: {
    type: String,
    required: true
  },
  contact_number: {
    type: Number,
    required: true
  },
  photo_url: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", AgentSchema);
