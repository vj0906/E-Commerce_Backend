// src/controllers/productController.js
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
    const { name, image, price, description } = req.body;
    try {
      const product = new Product({ name, image, price, description });
      await product.save();
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
