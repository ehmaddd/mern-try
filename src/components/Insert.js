import React, { useEffect, useState } from 'react';
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

const Home = () => {


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

  return (
    <div>


    </div>
  );
};

export default Home;
