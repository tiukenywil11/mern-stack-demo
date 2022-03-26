// import router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import page components
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'



// add router tags around the return statement to declare that the page can be changed 
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <Dashboard/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
