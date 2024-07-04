import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>  
    <Router>
      <Routes>
        <Route path='/login' element = { <Login/> }></Route>
        <Route path='/signup' element = { <Signup/> }></Route>
        <Route path='/sidebar' element = { <Sidebar/> }></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
