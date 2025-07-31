

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { bodyParser } = require("body-parser");
const cors = require("cors");
const { PositionModel } = require("./models/PositionModel");
const { HoldingModel } = require("./models/HoldingModel");
const { OrderModel } = require("./models/OrderModel");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

// app.get("/addPositions", async (req, res) => {
//   const tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       mode: "delivery",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       mode: "delivery",
//       isLoss: true,
//     },
//   ];

//   try {
//     await PositionModel.insertMany(tempPositions);
//     res.send("Positions inserted successfully");
//   } catch (err) {
//     res.status(500).send("Error inserting positions: " + err.message);
//   }
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({}); //Here we are fetch everything using mongoDB query
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({}); //Here we are fetch everything using mongoDB query
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    console.log("📥 Received data:", req.body);  // DEBUG LINE

    const newOrder = new OrderModel({
      name: req.body.name,
      qty: Number(req.body.qty),
      price: Number(req.body.price),
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).send("Order saved successfully");
  } catch (err) {
    console.error("❌ Error saving order:", err.message);  // DEBUG LINE
    res.status(500).send("Failed to save order: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log("App is listening on port " + PORT);
  mongoose.connect(uri);
  console.log("Connected to DB");
});
