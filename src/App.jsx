import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ricette from './pages/Ricette'
import Builder from './pages/Builder'
import Eventi from './pages/Eventi'
import Contatti from './pages/Contatti'

export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ricette" element={<Ricette/>}/>
        <Route path="/builder" element={<Builder/>}/>
        <Route path="/eventi" element={<Eventi/>}/>
        <Route path="/contatti" element={<Contatti/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
