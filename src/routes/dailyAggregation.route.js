const express = require('express');
const aggregationController = require('../controllers/aggregationController');

const router = express.Router();

router.get('/calculate-aggregation', aggregationController.calculateAndLogAggregation);

module.exports = router;