import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <>  
    <Router>
      <Routes>
        <Route path='/login' element = { <Login/> }></Route>
        <Route path='/signup' element = { <Signup/> }></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
