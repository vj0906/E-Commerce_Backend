// src/routes/cartRoutes.js
const express = require('express');
const { getCart, addToCart, removeCartItem } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getCart);
router.post('/add', auth, addToCart);
router.delete('/remove/:id', auth, removeCartItem);

module.exports = router;
