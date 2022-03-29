// import react states
import { useState, useEffect } from 'react'
// import from react-redux
// UseSelector is for selecting from states (e.g. user, isLoading etc.)
// UseDispatch is for dispatching a function like register, thunk functions, or reducers
import { useSelector, useDispatch } from 'react-redux'
// import from authSlice.js
import { login, reset } from '../features/auth/authSlice'
// import from the react-router
import { useNavigate } from 'react-router-dom'
// import react-toastify, to alert on errors
import { toast } from 'react-toastify'
// import icons from react icons, fontawesome
import { FaSignInAlt } from 'react-icons/fa'; 
// import spinner component
import Spinner from '../components/Spinner'


function Register() {
  // initialize state of login form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // destructure forData to use variables individually
  const { email, password } = formData;
  
  // declare navigate from react-router-dom
  const navigate = useNavigate()
  // declare dispatch from react-redux
  const dispatch = useDispatch()

  // destructure states from redux global auth state
  const { user, isLoading, isError, isSuccess, message } = 
  useSelector (
    (state) => state.auth
  )

  // add useEffect function to check if anything has changed, takes two argumants
  // first argument would be the effect function to trigger once dependecies are changed
  // second argument would be the dependecies to check, it they have changed
  useEffect(() => 
    {
      if(isError) {
        toast.error(message);
      }

      // checks if registration or login is a success
      // or if user is already logged in
      if(isSuccess || user) {
        navigate('/');
      }

      //call reducer reset to set everything back to false
      dispatch(reset());

    }, 
    [ user, isError, isSuccess, message, navigate, dispatch]
  )

  // create a function onChange
  const onChange = (e) => {
    // calling setFormData, passing an object
    // '...prevState' gets all values and attributes of the previous variable
    // get key via the 'name' variable [e.target.name]
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // create a function onChange
  const onSubmit = (e) => {
    e.preventDefault();

    // get and initialize user data
    const userData = {
      email,
      password
    }

    // run the async thunk api function from authSlice.js, and pass the userData object
    dispatch(login(userData))
  }

  // if isLoading is true, return spinner component
  if (isLoading) {
    return <Spinner/>
  }
  
  // login page should ask for login credentials
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt/> Login
        </h1>
        <p> Login and start setting goals </p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
            <input 
              type='text' 
              className='form-control' 
              id='email' 
              name='email' 
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input 
              type='password' 
              className='form-control' 
              id='password' 
              name='password' 
              value={password}
              placeholder='Enter your password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-block' 
            > 
              Submit
            </button>
          </div>

        </form>
      </section>

    </>
  )
}

export default Register