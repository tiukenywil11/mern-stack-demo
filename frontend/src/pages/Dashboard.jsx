// import react states
import { useEffect } from 'react'
// import from the react-router
import { useNavigate } from 'react-router-dom'
// import from react-redux
import { useSelector } from 'react-redux'


function Dashboard() {

    // declare navigate from react-router-dom
    const navigate = useNavigate()
  
    // destructure states from redux global auth state
    const { user } = 
    useSelector (
      (state) => state.auth
    )

    // add useEffect function to check if anything has changed, takes two argumants
    // first argument would be the effect function to trigger once dependecies are changed
    // second argument would be the dependecies to check, it they have changed
    useEffect(() => 
    {
      // if there is no user, navigate to login page
      if(!user) {
          navigate('/login')
      }

    }, 
    [ user, navigate ]
  )

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard