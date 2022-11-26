const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  city: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  title_eng: {
    type: String,
    required: true
  },
  district: {
    type: Object,
  },
  size: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  house_id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  description_eng: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  adress_eng: {
    type: String,
    required: true
  },
  photos: {
    type: Array,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  floor_quantity: {
    type: Number,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  agent: {
    type: Object,
    required: true
  },
  type: {
    type: Object,
    required: true
  },
  status: {
    type: Object,
    required: true
  },
  remont: {
    type: Object,
    required: true
  },
  home_type: {
   type: Object,
   required: true
  },
  furniture: {
    type: String,
    required: true
  },
  parking: {
    type: String,
    required: true
  },
  heating: {
    type: String,
    required: true
  },
  fireplace: {
    type: String,
    required: true
  },
  elevator: {
    type: String,
    required: true
  },
  freight_elevator: {
    type: String,
    required: true
  },
  hot_water: {
    type: String,
    required: true
  },
  internet: {
    type: String,
    required: true
  },
  technic: {
    type: String,
    required: true
  },
  balcony: {
    type: String,
    required: true
  },
  builiding_type: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("House", HouseSchema);
