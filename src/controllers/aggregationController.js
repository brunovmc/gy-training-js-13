const readCsvFile = require('../services/csvReader.service');
const calculateDailyAggregation = require('../services/dailyCalculation.service');

exports.calculateAndLogAggregation = (req, res) => {
    const file = './data/METRICS_REPORT-1673286660394 (3).csv';
    const { onData, onEnd } = calculateDailyAggregation();
    readCsvFile(file, onData, onEnd);

    res.send("Daily Aggregation calculated and logged in the console.");
};
