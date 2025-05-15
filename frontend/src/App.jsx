import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx';

function App() {
  return (
    // Routes is a wrapper for each individual route
    <Routes>
      {/* default landing page */}
      <Route path="/" element={<Home></Home>}></Route> 
      {/* page that handles sign in to an existing user account */}
      <Route path="/register" element={<Register></Register>}></Route>
      {/* page we direct new users to in order to create an account */}
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
    </Routes>
  )
}

export default App
