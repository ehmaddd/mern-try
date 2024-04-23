// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4000;
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '1234.com',
  port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to receive and return data
app.post('/api/data', async (req, res) => {
  const { id, name } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO student (id, name) VALUES ($1, $2) RETURNING *',
      [id, name]
    );
    const newUser = result.rows[0];
    client.release();
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Error creating user' }); // Updated error response
  }
});

app.post('/api/dataget', async (req, res) => {
  const { id } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT name FROM student WHERE id = $1',
      [id]
    );
    const user = result.rows[0];
    client.release();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

app.post('/api/datafetch', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM student',
    );
    const users = result.rows; // Fetch all rows
    client.release();
    if (!users || users.length === 0) { // Check if no users found
      return res.status(404).json({ error: 'No users found' });
    }
    res.status(200).json(users); // Return all users
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
