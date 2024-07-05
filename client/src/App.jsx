import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Main } from './pages/Main';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  return (
    <>  
    <Router>
      <Routes>
        <Route path='/login' element = { <Login setUser={setUser}/> }></Route>
        <Route path='/signup' element = { <Signup/> }></Route>
        <Route path='/main' element = { <Main user={user} /> }></Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
