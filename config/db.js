const mongoose = require('mongoose');

// Rather use async/await instead of promises
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            userUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(err) {
        console.err(err);
        process.exit(1);
    }
}

module.exports = connectDB;