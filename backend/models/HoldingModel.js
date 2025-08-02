const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");
const HoldingModel = new model("holding", HoldingSchema); //name of the collection i will be plural and mondoDB make it to holdings

module.exports = { HoldingModel };
