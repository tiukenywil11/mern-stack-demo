// import react states
import { useState } from 'react'
// import from react-redux
import { useSelector, useDispatch } from 'react-redux'
// import from goalSlice.js
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {

  // create variable for text state
  // default would be an empty string
  const [ text, setText ] = useState('')

  // declare dispatch from react-redux
  const dispatch = useDispatch();

  // create an onSubmit function
  const onSubmit = e => {
    e.preventDedault();

    // run the async thunk api function from goalSlice.js, and pass the goal text
    dispatch(createGoal({text}));
    // reset fields after goal is created
    setText('');
  }

  // create an onChange function
  const onChange = e => {
    setText(e.target.value);
  }

  // goal form includes fields to add text for goal
  return (
    <section>
      <form onSubmit={onSubmit}>

        <div className='form-group'>
          <label htmlFor='text'>
            Goal
          </label>
          
          <input 
            type='text' 
            name='text' 
            id='text' 
            value={text}
            onChange={onChange}/>
        </div>

        <div className='form-group'>
          <button 
            className='btn btn-block'
            type='submit'>
            Add Goal
          </button>
        </div>

      </form>  
    </section>
  )
}

export default GoalForm