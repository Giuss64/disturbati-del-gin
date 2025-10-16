import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // se non esiste, puoi rimuovere questa riga e il <Footer/>

import Home from "./pages/Home";
import Ricette from "./pages/Ricette";
import Builder from "./pages/Builder";
import Eventi from "./pages/Eventi";
import Contatti from "./pages/Contatti";
import Gin from "./pages/Gin";
import GalleriaEventi from "./pages/GalleriaEventi"; // se non usi la galleria, rimuovi import e rotta

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ricette" element={<Ricette />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/gin" element={<Gin />} />
        <Route path="/GalleriaEventi" element={<GalleriaEventi />} />
        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="container" style={{ padding: "48px 16px" }}>
              Pagina non trovata.
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
