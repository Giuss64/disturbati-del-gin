import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const linkClass = ({ isActive }) => 'link' + (isActive ? ' active' : '')
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

        <nav style={{display:'flex', alignItems:'center', gap:16, flexWrap:'wrap'}}>
          <NavLink to="/ricette" className={linkClass}>Ricette</NavLink>
          <NavLink to="/builder" className={linkClass}>Crea il tuo</NavLink>
          <NavLink to="/gin" className={linkClass}>Gin</NavLink>
          <NavLink to="/eventi" className={linkClass}>Eventi</NavLink>
          
          <NavLink to="/contatti" className={linkClass}>Contatti</NavLink>
        </nav>
      </div>
    </div>
  )
}
