// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, default: 0, min: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;