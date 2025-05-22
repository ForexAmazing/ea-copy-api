const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let latestTrade = null;

app.post('/api/send_trade', (req, res) => {
  latestTrade = req.body;
  console.log("Received trade:", latestTrade);
  res.json({ status: "OK" });
});

app.get('/api/get_trades', (req, res) => {
  if (latestTrade) {
    res.json(latestTrade);
  } else {
    res.json({ status: "NO_TRADE" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
