
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth/Auth';
import Home from './Auth/pages/Home';
import MainDash from './Auth/MainDash';
import { useState } from 'react';
import Login from './Auth/Login';


function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<MainDash isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Auth />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
