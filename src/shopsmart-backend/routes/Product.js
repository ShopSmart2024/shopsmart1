// src/shopsmart-backend/routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products); // Check if image field is populated correctly
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
