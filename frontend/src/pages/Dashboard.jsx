// import react states
import { useEffect } from 'react'
// import from the react-router
import { useNavigate } from 'react-router-dom'
// import from react-redux
import { useSelector, useDispatch } from 'react-redux'
// import goal form component
import GoalForm from '../components/GoalForm'
// import spinner component
import Spinner from '../components/Spinner'
// import from authSlice.js
import { getGoals, reset } from '../features/goals/goalSlice.js'

function Dashboard() {

    // declare navigate from react-router-dom
    const navigate = useNavigate()
    // declare dispatch from react-redux
    const dispatch = useDispatch()

    // destructure states from redux global auth state
    const { user } = 
    useSelector (
      (state) => state.auth
    )
    // destructure states from redux global goals state
    const { goals, isLoading, isError, message } = 
    useSelector (
      (state) => state.goals
    )

    // add useEffect function to check if anything has changed, takes two argumants
    // first argument would be the effect function to trigger once dependecies are changed
    // second argument would be the dependecies to check, it they have changed
    useEffect(() => 
    {
      // checks if there's an error
      if(isError) {
        console.log(message)
      }

      // if there is no user, navigate to login page
      if(!user) {
          navigate('/login')
      }

      // if there are no errors, get goals from mongoDB
      // this assigns value to the destructured 'goals' variable
      dispatch(getGoals())

      // do something when the component unmounts, by adding a return function
      // leaving the dashboard would clear
      return () => {
        dispatch(reset());
      }

    }, 
    [ user, navigate, isError, message, dispatch ]
  )

  // if isLoading is true, return spinner component
  if (isLoading) {
    return <Spinner/>
  }
    
  return (
    <>
    <section className='heading'>
      <h1> 
        Welcome {
          // if user exist, show user's name
          user && user.name 
        }
      </h1>
      <p> Goal Dashboard </p>
      <GoalForm/>
    </section>
    </>
  )
}

export default Dashboard