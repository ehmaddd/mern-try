// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const path = require('path');
const app = express();
const port = 4000;

// Middleware
app.use(cors()); // Use cors middleware to allow cross-origin requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to receive and return data
app.post('/api/data', (req, res) => {
  const { value } = req.body;
  console.log('Received value:', value);
  res.json({ message: `Server : ${value}` });
});

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
