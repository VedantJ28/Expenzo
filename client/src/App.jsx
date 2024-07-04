import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Main } from './pages/Main';

function App() {
  return (
    <>  
    <Router>
      <Routes>
        <Route path='/login' element = { <Login/> }></Route>
        <Route path='/signup' element = { <Signup/> }></Route>
        <Route path='/sidebar' element = { <Sidebar/> }></Route>
        <Route path='/dashboard' element = { <Dashboard/> }></Route>
        <Route path='/main' element = { <Main/> }></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
