const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  title: {
    type: String
  },
  district: {
    type: String,
  },
  size: {
    type: Number,
  },
  price: {
    type: Number,
  },
  house_id: {
    type: String,
  },
  description: {
    type: String,
  },
  adress: {
    type: String,
  },
  photos: {
    type: Array,
  },
  rooms: {
    type: Number,
  },
  floor_quantity: {
    type: Number,
  },
  floor: {
    type: Number,
  },
  agent: {
    type: String,
  },
  type: {
    type: String,
  },
  condition: {
    type: String,
  },
  furniture: {
    type: String,
  },
  technic: {
    type: String,
  },
  balcony: {
    type: String,
  },
  building_type: {
    type: String,
  },
  contact_number: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("House", HouseSchema);
