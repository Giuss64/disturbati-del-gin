import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) =>
  'link' + (isActive ? ' active' : '')

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

        <div style={{display:'flex', alignItems:'center', gap:16, flexWrap:'wrap'}}>
          <NavLink to="/ricette" className={linkStyle}>Ricette</NavLink>
          <NavLink to="/builder" className={linkStyle}>Crea il tuo</NavLink>
          <NavLink to="/gin" className={linkStyle}>Gin</NavLink> {/* ⬅️ nuovo */}
          <NavLink to="/eventi" className={linkStyle}>Eventi</NavLink>
          <NavLink to="/eventi-foto" className={linkStyle}>Foto Eventi</NavLink> {/* ⬅️ nuovo */}
          <NavLink to="/contatti" className={linkStyle}>Contatti</NavLink>
        </div>
      </div>
    </div>
  )
}
