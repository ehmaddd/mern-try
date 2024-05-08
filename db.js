const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/mydatabase';

// Create a MongoDB client
const client = new MongoClient(uri);
