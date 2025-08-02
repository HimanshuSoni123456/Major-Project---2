// models/PositionModel.js
const { Schema, model } = require("mongoose");

const PositionSchema = new Schema({
  product: String,
  net: String,
  day: String,
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  isLoss: Boolean,
});

const PositionModel = model("Position", PositionSchema);

module.exports = { PositionModel };
