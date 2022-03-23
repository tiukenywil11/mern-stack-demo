// goalRoutes.js is where the routes for goals will be put

// initialize expressjs: backend framework
const express = require('express');
// initialize router: express module for routing
const router = express.Router();
// add import from goalController.js
const { getGoals } = require('../controllers/goalController')


// create a get route
// removed '/api/goals' from url path, because this will remain in server.js
// changed 'app.get' to 'router.get' because router is the module being exported
router.get('/', getGoals);

// create a post route to create an entry
router.post('/', (req, res) => {
    res.status(200).json({message: 'Set goals'});
});

// create a put route to update an entry
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
});

// create a delete route to delete an entry
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});

// export the router module, so other files can use this.
module.exports = router;
