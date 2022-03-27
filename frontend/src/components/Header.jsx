// import icons from react icons, fontawesome
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'; 
// import link from react router
import { Link } from 'react-router-dom';

// header should have a logo, title, register, and a Log in / Log out button 
function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>
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