// server.js is the entrypoint to the js server

// initialize expressjs: backend framework
const express = require('express');
// intialize dotenv: allows use of environmental variables
const dotenv = require('dotenv').config();
// initialize port to use the environment variable PORT, or defauts to 5000
const port = process.env.PORT || 5000;

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

// bring up express server
app.listen(port, () => console.log(`Server started on port ${port}`));