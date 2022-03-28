// import react states
import { useState, useEffect } from 'react'
// import icons from react icons, fontawesome
import { FaUser } from 'react-icons/fa'; 

function Register() {
  // initialize state of registration form
  // password2 is for password confirmation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  // destructure forData to use variables individually
  const { name, email, password, password2 } = formData;
  
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

  // register page should have the basic registration form getting form data
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser/> Register
        </h1>
        <p> Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
            <input 
              type='text' 
              className='form-control' 
              id='name' 
              name='name' 
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>

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
            <input 
              type='password' 
              className='form-control' 
              id='password2' 
              name='password2' 
              value={password2}
              placeholder='Confirm your password'
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