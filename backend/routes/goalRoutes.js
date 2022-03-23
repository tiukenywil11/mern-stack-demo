// goalRoutes.js is where the routes for goals will be put

// initialize expressjs: backend framework
const express = require('express');
// initialize router: express module for routing
const router = express.Router();
// add import from goalController.js
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// clean up routes with the same url
// for '/api/goals' url, chain get and post requests
router.route('/').get(getGoals).post(setGoal)

// for '/api/goals/:id' url, chain put and delete requests
router.route('/:id').delete(deleteGoal).put(updateGoal)

/* Replaced with cleaner routes
-- create a get route
-- removed '/api/goals' from url path, because this will remain in server.js
-- changed 'app.get' to 'router.get' because router is the module being exported
router.get('/', getGoals);

-- create a post route to create an entry
router.post('/', setGoal);

-- create a put route to update an entry
router.put('/:id', updateGoal);

-- create a delete route to delete an entry
router.delete('/:id', deleteGoal);
*/

// export the router module, so other files can use this.
module.exports = router;
