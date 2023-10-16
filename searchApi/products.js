const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

module.exports = mongoose.model("products", productSchema);
