// import react states
import { useState, useEffect } from 'react'
// import icons from react icons, fontawesome
import { FaSignInAlt } from 'react-icons/fa'; 

function Register() {
  // initialize state of login form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // destructure forData to use variables individually
  const { email, password } = formData;
  
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