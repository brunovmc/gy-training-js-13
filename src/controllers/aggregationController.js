const readCsvFile = require('../services/csvReader.service');
const dailyService = require('../services/dailyCalculation.service');

exports.generateDailyReport = (req, res) => {
    const file = './data/METRICS_REPORT-1673286660394 (3).csv';
    const { onData, onEnd } = dailyService.calculateDailyAggregation();
    readCsvFile(file, onData, onEnd);

    res.send("Daily Aggregation calculated and logged in the console.");
};
