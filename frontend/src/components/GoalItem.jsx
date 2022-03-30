// function GoalItem takes the parameter goal object
function GoalItem({goal}) {

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
    </div>
  )
}

export default GoalItem