const express = require('express');
const aggregationRoutes = require('./src/routes/dailyAggregation.route');

const app = express();
const port = 3000;

app.use('/', aggregationRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
