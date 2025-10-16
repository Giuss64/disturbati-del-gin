import React from "react";

/**
 * Inserisci le foto in /public/ con i nomi elencati.
 * Se aggiungi nuove immagini, basta metterle nell'array corrispondente.
 */
const GALLERY = [
  {
    title: "Farinoso Estate 2024",
    photos: [
      // "/farinoso-1.jpg", "/farinoso-2.jpg"
    ],
  },
  {
    title: "Mykonos Estate 2024",
    photos: [
      // "/mykonos-2024-1.jpg"
    ],
  },
  {
    title: "Brusco Autunno 2024",
    photos: [
      // "/brusco-autunno-1.jpg"
    ],
  },
  {
    title: "Myo Inverno 2024",
    photos: [
      // "/myo-inverno-1.jpg"
    ],
  },
  {
    title: "Carnevale 2025",
    photos: [
      // "/carnevale-2025-1.jpg"
    ],
  },
  {
    title: "Frontemare Primavera 2025",
    photos: [
      // "/frontemare-primavera-1.jpg"
    ],
  },
  {
    title: "Brusco Pasquetta 2025",
    photos: [
      // "/brusco-pasquetta-1.jpg"
    ],
  },
  {
    title: "Riserva Rooftop Estate 2025",
    photos: [
      // "/riserva-rooftop-1.jpg"
    ],
  },
  {
    title: "Ponza Estate 2025",
    photos: [
      // "/ponza-1.jpg"
    ],
  },
  {
    title: "Paestum Estate 2025",
    photos: [
      // "/paestum-1.jpg"
    ],
  },
  {
    title: "Mykonos Estate 2025",
    photos: [
      "/20250917_142746.jpg",
      "/20250917_165657.jpg",
      "/20250917_171255.jpg",
      "/20250917_172236.jpg",
      "/20250917_174556.jpg",
    ],
  },
  {
    title: "Compleanno Mena — Galleria Leone (17/10/2025)",
    photos: [
      // "/mena-birthday-2025-1.jpg"
    ],
  },
];

export default function GalleriaEventi() {
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState({ section: 0, index: 0 });

  const photosFlat = React.useMemo(
    () => GALLERY.flatMap((s, si) => s.photos.map((_, pi) => ({ si, pi }))),
    []
  );

  const openAt = (si, pi) => {
    setCurrent({ section: si, index: pi });
    setOpen(true);
  };

  const close = () => setOpen(false);

  const goPrev = () => {
    if (photosFlat.length === 0) return;
    const pos = photosFlat.findIndex(
      (p) => p.si === current.section && p.pi === current.index
    );
    const prev = photosFlat[(pos - 1 + photosFlat.length) % photosFlat.length];
    setCurrent({ section: prev.si, index: prev.pi });
  };

  const goNext = () => {
    if (photosFlat.length === 0) return;
    const pos = photosFlat.findIndex(
      (p) => p.si === current.section && p.pi === current.index
    );
    const next = photosFlat[(pos + 1) % photosFlat.length];
    setCurrent({ section: next.si, index: next.pi });
  };

  const currentSrc =
    GALLERY[current.section]?.photos[current.index] || "";

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Galleria Foto Eventi</h2>
        <p style={{ color: "#666", marginBottom: 24 }}>
          I momenti più iconici della nostra Gin Tonic Society. Le foto sono
          ridimensionate automaticamente in una griglia responsive.
        </p>

        {GALLERY.map((section, si) => (
          <div key={section.title}>
            <h3 className="gallery-title">{section.title}</h3>

            {section.photos.length === 0 ? (
              <div
                className="card"
                style={{ padding: 16, color: "#666", fontSize: 14 }}
              >
                Nessuna foto caricata (ancora). Aggiungile in <code>/public</code> e
                inserisci i percorsi nell'array <code>GALLERY</code>.
              </div>
            ) : (
              <div className="gallery-grid">
                {section.photos.map((src, pi) => (
                  <img
                    key={src}
                    src={src}
                    alt={section.title}
                    onClick={() => openAt(si, pi)}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Lightbox */}
        {open && currentSrc && (
          <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
            <img
              src={currentSrc}
              alt="preview"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close" onClick={(e) => { e.stopPropagation(); close(); }}>
              Chiudi ✕
            </button>
            <button className="prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
              ‹
            </button>
            <button className="next" onClick={(e) => { e.stopPropagation(); goNext(); }}>
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
