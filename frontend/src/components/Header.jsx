// import icons from react icons, fontawesome
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'; 
// import link from react router
import { Link, useNavigate } from 'react-router-dom';
// import from authSlice.js
import { logout, reset } from '../features/auth/authSlice'
// import modules for react-redux, check Register.jsx for more info
import { useSelector, useDispatch } from 'react-redux'


// header should have a logo, title, register, and a Log in / Log out button 
function Header() {

    // declare navigate from react-router-dom
    const navigate = useNavigate();
    // declare dispatch from react-redux
    const dispatch = useDispatch();

    // destructure states from redux global auth state
    const { user } = useSelector( (state) => state.auth) 

    // create a logout function, calling redux states
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>

            { 
            // if user exists, show logout, else show login
            user ? (
                <li>
                    <button className='btn' onClick={onLogout}> 
                        <FaSignOutAlt/> Logout
                    </button>
                </li>
            ) : (
                <li>
                    <Link to='/login'>
                        <FaSignInAlt/> Login
                    </Link>
                </li>
            )} 

            <li>
                <Link to='/register'>
                    <FaUser/> register
                </Link>
            </li>
        </ul>
    </header>
    )
}

export default Header