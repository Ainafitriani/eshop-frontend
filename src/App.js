import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Carts from './pages/Carts';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
 const [isLogedIn, setIsLogedIn] = useState(false);

  return (
   
      <Router>

        <Navbar isLogedIn={isLogedIn} />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/auth/login' element={<Auth login />} />
          <Route path='/auth/register' element={<Auth register />} />

          <Route path='/carts' element={<Carts isLogedIn={isLogedIn} />} />
          <Route path='/profile' element={<Profile isLogedIn={isLogedIn} />} />
        </Routes>
      </Router>
  );
}

export default App;