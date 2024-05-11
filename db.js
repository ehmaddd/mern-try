const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/mydatabase';

// Create a MongoDB client
const client = new MongoClient(uri);

async function connect() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Use the database
        const db = client.db('mydatabase');
        return db;
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
      }
}
