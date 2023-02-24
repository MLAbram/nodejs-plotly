const express = require('express');
const app = express();
const plotly1 = require('./routes/plotly1');
const plotly2 = require('./routes/plotly2');

app.use(express.json());
app.use('/api/v1/plotly1', plotly1);
app.use('/api/v1/plotly2', plotly2);

// redirect
app.get('/', (req, res) => {
  return res.status(200).send('Using Plotly in Node.js.');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000.');
});