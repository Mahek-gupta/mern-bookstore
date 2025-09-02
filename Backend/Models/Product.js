// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
//   category: String,
//   image: String,
// });

// module.exports = mongoose.model("Product", productSchema);


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }
});

// Prevent OverwriteModelError in watch mode / dev
module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);
