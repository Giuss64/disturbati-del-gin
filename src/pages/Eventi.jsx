import React from "react";

const PHOTOS = [
  { src: "/eventi/farinoso-estate-2024.jpg", alt: "Farinoso — Estate 2024" },
  { src: "/eventi/mykonos-estate-2024.jpg", alt: "Mykonos — Estate 2024" },
  { src: "/eventi/brusco-autunno-2024.jpg", alt: "Brusco — Autunno 2024" },
  { src: "/eventi/myo-inverno-2024.jpg", alt: "Myo — Inverno 2024" },
  { src: "/eventi/carnevale-2025.jpg", alt: "Carnevale — 2025" },
  { src: "/eventi/frontemare-primavera-2025.jpg", alt: "Frontemare — Primavera 2025" },
  { src: "/eventi/brusco-pasquetta-2025.jpg", alt: "Brusco — Pasquetta 2025" },
  { src: "/eventi/riserva-rooftop-estate-2025.jpg", alt: "Riserva Rooftop — Estate 2025" },
  { src: "/eventi/ponza-estate-2025.jpg", alt: "Ponza — Estate 2025" },
  { src: "/eventi/paestum-estate-2025.jpg", alt: "Paestum — Estate 2025" },
  { src: "/eventi/mykonos-estate-2025.jpg", alt: "Mykonos — Estate 2025" },
  // Evento Mena in evidenza
  { src: "/eventi/mena-birthday-2025.jpg", alt: "Compleanno Mena — 17/10/2025 — Galleria Leone" },
];

export default function GalleriaEventi() {
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(0);

  const openAt = (i) => { setCurrent(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev = () => setCurrent((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setCurrent((i) => (i + 1) % PHOTOS.length);

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Galleria Eventi 📸</h2>
        <p style={{ color: "#666" }}>Gli scatti migliori delle nostre serate Disturbate.</p>

        {/* Griglia anteprime */}
        <div
          className="grid"
          style={{ gap: 12, gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", marginTop: 16 }}
        >
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              onClick={() => openAt(i)}
              style={{ all: "unset", cursor: "zoom-in" }}
              aria-label={`Apri ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, border: "1px solid #eee" }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>{p.alt}</div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.85)",
              display: "grid",
              placeItems: "center",
              zIndex: 1000,
              padding: 16,
            }}
          >
            <div style={{ position: "relative", maxWidth: "min(1200px, 95vw)" }}>
              <img
                src={PHOTOS[current].src}
                alt={PHOTOS[current].alt}
                style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 12 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={(e) => { e.stopPropagation(); close(); }}
                aria-label="Chiudi"
                style={{ position: "absolute", top: 8, right: 8, background: "#000", color: "#fff", border: "1px solid #333", padding: "6px 10px", borderRadius: 10, cursor: "pointer" }}
              >
                Chiudi ✕
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Precedente"
                style={{ position: "absolute", top: "50%", left: -4, transform: "translate(-100%,-50%)", background: "#000", color: "#fff", border: "1px solid #333", padding: "8px 10px", borderRadius: 10, cursor: "pointer" }}
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Successiva"
                style={{ position: "absolute", top: "50%", right: -4, transform: "translate(100%,-50%)", background: "#000", color: "#fff", border: "1px solid #333", padding: "8px 10px", borderRadius: 10, cursor: "pointer" }}
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
