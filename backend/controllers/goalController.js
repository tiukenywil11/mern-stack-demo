// goalConttollrt.js is where the functions to trigger upon api call are placed

// adding asyncHandler to handle async related errors
// wrap async functions with this library
const asyncHandler = require('express-async-handler');
// import goals model, has mongoose modules for goals
const Goal = require('../models/goalModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (
    async (req, res) => {
        // get the list of goals
        const goals = await Goal.find();
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
            text: req.body.text
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
        res.status(200).json({message: `Update goal ${req.params.id}`});
    }
)

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler (
    async (req, res) => {
        res.status(200).json({message: `Delete goal ${req.params.id}`});
    }
)

// export functions to be consumed
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
