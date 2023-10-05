const express = require('express');

const cors = require('cors'); // Import the cors module

const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({message: 'Hello World!'});
});
app.listen(3000, () => console.log('Example app is listening on port 3000.'));

