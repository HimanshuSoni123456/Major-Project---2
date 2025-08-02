const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderModel = model("Order", OrdersSchema); // ✅ Capitalize model name (optional but standard)

module.exports = { OrderModel };
