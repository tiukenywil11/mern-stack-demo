// server.js is the entrypoint to the js server

// initialize expressjs: backend framework
const express = require('express');
// intialize dotenv: allows use of environmental variables
const dotenv = require('dotenv').config();
// initialize port to use the environment variable PORT, or defauts to 5000
const port = process.env.PORT || 5000;

// initialize app object with express methods
const app = express();

// bring up express server
app.listen(port, () => console.log(`Server started on port ${port}`));