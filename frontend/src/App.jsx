import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'

function App() {
  return (
    // Routes is a wrapper for each individual route
    <Routes>
      {/* default landing page */}
      <Route path="/" element={<Home></Home>}></Route> 
    </Routes>
  )
}

export default App
