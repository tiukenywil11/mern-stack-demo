// goalConttollrt.js is where the functions to trigger upon api call are placed

// adding asyncHandler to handle async related errors
// wrap async functions with this library
const asyncHandler = require('express-async-handler');
// import goals model, has mongoose modules for goals
const Goal = require('../models/goalModel');
// import user model, has mongoose modules for users
const User = require('../models/userModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (
    async (req, res) => {
        // get the list of goals
        // filter what user can see based on authorization id passed in the middleware
        const goals = await Goal.find({ user: req.user.id });
        // return a message, indicating success
        res.status(200).json(goals);
    }
)

// @desc Set goal
// @route SET /api/goals
// @access Private
const setGoal = asyncHandler (
    async (req, res) => {

        /*
        -- checks if set is accepting values
        console.log(req.body);
        */

        // checks if body passed is null
        if(!req.body.text) {
            // set the status of response to 400 (empty)
            res.status(400);
            // use expressjs error handling
            throw new Error('Please add a text field');
        }

        // create a goal entry, and pass it to the database
        const goal = await Goal.create({
            text: req.body.text,
            user: req.user.id
        })

        // return a message, indicating success
        res.status(200).json(goal);
    }
)

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler (
    async (req, res) => {

        // get single goal using id
        const goal = await Goal.findById(req.params.id)

        // create conditional to check if goal exists in mongodb
        if(!goal) {
            res.status(400)
            throw new Error('Goal not found')
        }

        /* removed because this was already called in authMiddleware.js protect function
           replace all user to req.user provided by authMiddleware
        -- get logged in user details
        const user = await User.findById(req.user.id)
        */

        if(!req.user){
            res.status(401)
            throw new Error('User not found')
        }

        // check if user is authorized to update
        // goal.user is the user attached to the goal in the database
        // user.id is the logged in user
        if(goal.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error('User not authorized')
        }

        // create a variable with updated values, to pass to mongodb
        // findByIdAndUpdate takes three parametes, id of object that will be updated, the updated object values, and update options
        // new: true option creates a new entry, if id does not exist
        const updatedGoal = await Goal.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        )

        // return a message, indicating success
        res.status(200).json(updatedGoal);
    }
)

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler (
    async (req, res) => {

                // get single goal using id
                // req.params gets the parameter from the url
                const goal = await Goal.findById(req.params.id)

                // create conditional to check if goal exists in mongodb
                if(!goal) {
                    res.status(400)
                    throw new Error('Goal not found')
                }
        
                /* removed because this was already called in authMiddleware.js protect function
                replace all user to req.user provided by authMiddleware
                -- get logged in user details
                const user = await User.findById(req.user.id)
                */

                // check if user exists
                if(!req.user) {
                    res.status(401)
                    throw new Error('User not found')
                }

                // check if user is authorized to delete
                // goal.user is the user attached to the goal in the database
                // user.id is the logged in user
                if(goal.user.toString() !== req.user.id) {
                    res.status(401)
                    throw new Error('User not authorized')
                }

                // call remove function to delete goal
                await goal.remove();

                // return a message, indicating success
                res.status(200).json({id: req.params.id});
    }
)

// export functions to be consumed
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
