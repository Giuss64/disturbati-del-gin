import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLink = ({ isActive }) => "link" + (isActive ? " active" : "");

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-inner">
        {/* Brand */}
        <Link to="/" className="brand">
          <div className="logo">DG</div>
          <div>
            <div style={{ fontWeight: 700, lineHeight: 1 }}>I Disturbati del Gin</div>
            <div style={{ fontSize: 12, color: "#666" }}>Gin Tonic Society</div>
          </div>
        </Link>

        {/* Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <NavLink to="/ricette" className={navLink}>Ricette</NavLink>
          <NavLink to="/builder" className={navLink}>Crea il tuo</NavLink>
          <NavLink to="/gin" className={navLink}>Gin</NavLink>
          <NavLink to="/eventi" className={navLink}>Eventi</NavLink>
          <NavLink to="/GalleriaEventi" className={navLink}>Galleria Foto</NavLink>
          <NavLink to="/contatti" className={navLink}>Contatti</NavLink>
        </nav>
      </div>
    </div>
  );
}
