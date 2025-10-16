import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#fff", marginTop: 40 }}>
      <div className="container" style={{ padding: "32px 16px" }}>
        {/* Sezioni footer */}
        <div
          className="grid grid-3"
          style={{ alignItems: "flex-start", gap: 24, marginBottom: 32 }}
        >
          {/* Colonna 1 - Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#fff",
                  color: "#111",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                }}
              >
                DG
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>I Disturbati del Gin</div>
                <div style={{ fontSize: 13, color: "#bbb" }}>Gin Tonic Society</div>
              </div>
            </div>
            <p style={{ marginTop: 12, fontSize: 14, color: "#ccc" }}>
              Cenosillicafobici 🍸<br />
              La paura del bicchiere vuoto non ci appartiene.
            </p>
          </div>

          {/* Colonna 2 - Link rapidi */}
          <div>
            <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
              Naviga
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8" }}>
              <li><Link to="/" style={{ color: "#ccc" }}>Home</Link></li>
              <li><Link to="/ricette" style={{ color: "#ccc" }}>Ricette</Link></li>
              <li><Link to="/builder" style={{ color: "#ccc" }}>Crea il tuo</Link></li>
              <li><Link to="/gin" style={{ color: "#ccc" }}>Gin</Link></li>
              <li><Link to="/eventi" style={{ color: "#ccc" }}>Eventi</Link></li>
              <li><Link to="/GalleriaEventi" style={{ color: "#ccc" }}>Galleria Foto</Link></li>
              <li><Link to="/contatti" style={{ color: "#ccc" }}>Contatti</Link></li>
            </ul>
          </div>

          {/* Colonna 3 - Social */}
          <div>
            <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
              Seguici
            </h4>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                <i className="fab fa-instagram" style={{ fontSize: 22 }}></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                <i className="fab fa-facebook" style={{ fontSize: 22 }}></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                <i className="fab fa-whatsapp" style={{ fontSize: 22 }}></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.15)",
            paddingTop: 16,
            fontSize: 13,
            color: "#888",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} I Disturbati del Gin. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
