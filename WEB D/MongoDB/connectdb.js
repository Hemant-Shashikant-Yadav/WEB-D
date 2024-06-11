const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'mydb ';

const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        const collections = await db.listCollections().toArray();
        console.log('Collections:', collections.map(col => col.name));
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        await client.close();
    }
}

module.exports = connectToMongo;
