// import modules for react-redux
import { useDispatch } from 'react-redux'
// impoty from goalSlice.js
import { deleteGoal } from '../features/goals/goalSlice'

// function GoalItem takes the parameter goal object
function GoalItem({goal}) {

    // declare dispatch from react-redux
    const dispatch = useDispatch();

    // goalItem returns a single goal instance with Date and text from mongodb
    return (
    <div className='goal'>
        <div>
            {   
                // create date instance
                new Date(goal.createdAt).toLocaleString('en-US')
            }
        </div>

        <h2>
            {goal.text}
        </h2>

        <button 
            onClick={
                () => dispatch(deleteGoal(goal._id))
            }
            className='close'>
        X
        </button>    

    </div>
    )
}

export default GoalItem