import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
