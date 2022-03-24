// server.js is the entrypoint to the js server

// initialize expressjs: backend framework
const express = require('express');
// initialize colors: adds colors to log
const colors = require('colors');
// intialize dotenv: allows use of environmental variables
const dotenv = require('dotenv').config();
// import errorHandler, from errorMiddleware
const { errorHandler } = require('./middleware/errorMiddleware');
// import db.js to connect to mongodb
const connectDB = require('./config/db')
// initialize port to use the environment variable PORT, or defauts to 5000
const port = process.env.PORT || 5000;

//connect to mongodb
connectDB();

// initialize app object with express methods
const app = express();

/* Moved to routes/goalRoutes.js
-- create a get route
app.get('/api/goals', (req, res) => {
    res.status(200).json({message: 'Get goals'});
});
*/

// add a middleware to read raw json
app.use(express.json());
// add a middleware to read url encoded
app.use(express.urlencoded({ extended: false }));

// use goalRoutes.js on server.js
app.use('/api/goals', require('./routes/goalRoutes'));
// use userRoutes.js on server.js
app.use('/api/users', require('./routes/userRoutes'));

// add middleware to handle errors
app.use(errorHandler);

// bring up express server
app.listen(port, () => console.log(`Server started on port ${port}`));