// db.js is a file that will be used to connect to mongodb

// initialize mongoose to be able to call mongodb database
const mongoose = require('mongoose');

// create function connectDB to connect to database
const connectDB = async () => {
    try {
        // create connection to mongoose db
        const conn = await mongoose.connect(process.env.MONGO_URI)
        // log database connected to
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    } catch(error) {
        // print error logs
        console.log(error);
        // exit process with exit code 1, meaning there is an error
        process.exit(1)
    }
}

module.exports = connectDB;

