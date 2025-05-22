const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let latestTrade = null;

app.post('/api/send_trade', (req, res) => {
  latestTrade = req.body;
  console.log('Received trade:', latestTrade);
  res.json({ status: 'OK' });
});

app.get('/api/get_trades', (req, res) => {
  if (latestTrade) {
    res.json(latestTrade);
  } else {
    res.json({ status: 'NO_TRADE' });
  }
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
