import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pagine
import Home from './pages/Home'
import Ricette from './pages/Ricette'
import Builder from './pages/Builder'
import Eventi from './pages/Eventi'
import Contatti from './pages/Contatti'
import Gin from './pages/Gin' // ⬅️ nuovo
import GalleriaEventi from './pages/GalleriaEventi' // ⬅️ nuovo

export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ricette" element={<Ricette/>} />
        <Route path="/builder" element={<Builder/>} />
        <Route path="/eventi" element={<Eventi/>} />
        <Route path="/contatti" element={<Contatti/>} />
        <Route path="/gin" element={<Gin/>} />                    {/* ⬅️ nuovo */}
        <Route path="/eventi-foto" element={<GalleriaEventi/>} /> {/* ⬅️ nuovo */}
        {/* (opzionale) 404 semplice */}
        <Route path="*" element={<div className="container" style={{padding:'48px 16px'}}>Pagina non trovata.</div>} />
      </Routes>
      <Footer/>
    </div>
  )
}
