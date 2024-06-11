const connectToMongo = require('./connectdb');

async function main() {
    // Call the connectToMongo function
    await connectToMongo();
}

main();
