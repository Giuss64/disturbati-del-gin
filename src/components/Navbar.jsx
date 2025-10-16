import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <div className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <div className="logo">DG</div>
          <div>
            <div style={{fontWeight:700,lineHeight:'1'}}>I Disturbati del Gin</div>
            <div style={{fontSize:12,color:'#666'}}>Gin Tonic Society</div>
          </div>
        </Link>
        <div>
          <NavLink to="/ricette" className="link">Ricette</NavLink>
          <NavLink to="/builder" className="link">Crea il tuo</NavLink>
          <NavLink to="/eventi" className="link">Eventi</NavLink>
          <NavLink to="/contatti" className="link">Contatti</NavLink>
        </div>
      </div>
    </div>
  )
}
