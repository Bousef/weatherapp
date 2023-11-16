// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
