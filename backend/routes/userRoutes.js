// userRoutes.js is where the routes for users will be put

// initialize expressjs: backend framework
const express = require('express');
// initialize router: express module for routing
const router = express.Router();
// add import from userController.js
const { registerUser, loginUser, getMe } = require('../controllers/userController')

// for '/api/users' url, chain get and post requests
router.post('/', registerUser)
// for '/api/users/login' url, chain get and post requests
router.post('/login', loginUser)
// for '/api/users/me' url, chain get and post requests
router.get('/me', getMe)

// export the router module, so other files can use this.
module.exports = router;