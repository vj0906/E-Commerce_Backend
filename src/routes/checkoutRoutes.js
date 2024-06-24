// src/routes/checkoutRoutes.js
const express = require('express');
const { checkout } = require('../controllers/checkoutController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, checkout);

module.exports = router;
