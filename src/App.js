
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth/Auth';
import Home from './Auth/pages/Home';
import MainDash from './Auth/MainDash';
import { useState } from 'react';
import Login from './Auth/Login';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import UserProtected from './protectedRoute/UserProtected';
import Error from './Auth/pages/Error';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/' element={
          <UserProtected>
            <MainDash />
          </UserProtected>
        } />
        <Route path='/signup' element={
          <UserProtected>
            <Auth />
          </UserProtected>
        } />
        <Route path='/login' element={
          <UserProtected>
            <Login />
          </UserProtected>
        } />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
