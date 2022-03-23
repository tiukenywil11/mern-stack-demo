// goalConttollrt.js is where the functions to trigger upon api call are placed

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'});
}

// @desc Set goal
// @route SET /api/goals
// @access Private
const setGoal = (req, res) => {

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

    res.status(200).json({message: 'Set goal'});
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
}

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
}

// export functions to be consumed
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
