const {Schema, model} = require("mongoose");
const OrdersSchema = new Schema({
    name : String,
    qty : Number,
    price : Number,
    mode : String
}, { strict: true });


module.exports = {OrdersSchema};