const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  city: {
    type: Object,
  },
  title: {
    type: String
  },
  title_eng: {
    type: String
  },
  district: {
    type: Object,
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
  description_eng: {
    type: String,
  },
  adress: {
    type: String,
  },
  adress_eng: {
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
  agent_eng: {
    type: String,
  },
  type: {
    type: Object,
  },
  status: {
    type: Object,
  },
  remont: {
    type: Object,
  },
  home_type: {
   type: Object,
  },
  furniture: {
    type: String,
  },
  parking: {
    type: String,
  },
  heating: {
    type: String,
  },
  fireplace: {
    type: String,
  },
  elevator: {
    type: String,
  },
  freight_elevator: {
    type: String,
  },
  hot_water: {
    type: String,
  },
  internet: {
    type: String,
  },
  technic: {
    type: String,
  },
  balcony: {
    type: String,
  },
  builiding_type: {
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
