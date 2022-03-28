// import router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ToastContainer, and toastify css from react-toastify, to wrap around app
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import page components
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
// import part components
import Header from './components/Header'

// add router tags around the return statement to declare that the page can be changed 
function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={ <Dashboard/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
