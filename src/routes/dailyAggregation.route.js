const express = require('express');
const aggregationController = require('../controllers/aggregationController');

const router = express.Router();

router.get('/generate-daily-report', aggregationController.generateDailyReport);

module.exports = router;