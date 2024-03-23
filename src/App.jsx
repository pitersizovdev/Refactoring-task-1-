import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome'
import Home from './pages/home/Home'
import Gradient from './components/gradient/Gradient';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
