import React from "react";

const EVENTI = [
  {
    id: "mena2025",
    title: "Compleanno Mena",
    date: "17 Ottobre 2025",
    place: "Galleria Leone",
    desc: "Un evento speciale per celebrare con stile: Gin di Fuoco e Walter Number Three per tutti.",
    highlight: true,
  },
  {
    id: "farinoso2024",
    title: "Farinoso Estate 2024",
    date: "Estate 2024",
    place: "Farinoso",
    desc: "Il caldo, la musica e i primi gin della stagione. Un inizio d’estate memorabile.",
  },
  {
    id: "mykonos2024",
    title: "Mykonos Estate 2024",
    date: "Estate 2024",
    place: "Mykonos",
    desc: "Il battesimo ufficiale dei Disturbati del Gin nella patria del sole e della festa.",
  },
  {
    id: "bruscoautunno2024",
    title: "Brusco Autunno 2024",
    date: "Autunno 2024",
    place: "Brusco",
    desc: "Gin, chiacchiere e prime foglie cadenti: l’autunno in stile Disturbati.",
  },
  {
    id: "myoinverno2024",
    title: "Myo Inverno 2024",
    date: "Inverno 2024",
    place: "Myo",
    desc: "Un inverno riscaldato dai migliori gin dry e dall’atmosfera elegante del Myo.",
  },
  {
    id: "carnevale2025",
    title: "Carnevale 2025",
    date: "Febbraio 2025",
    place: "Napoli",
    desc: "Maschere, coriandoli e Gin Tonic flambé per un carnevale disturbato come si deve.",
  },
  {
    id: "frontemareprimavera2025",
    title: "Frontemare Primavera 2025",
    date: "Primavera 2025",
    place: "Frontemare",
    desc: "L’arrivo della bella stagione tra tramonti e cocktail perfetti sul mare.",
  },
  {
    id: "bruscopasquetta2025",
    title: "Brusco Pasquetta 2025",
    date: "Pasquetta 2025",
    place: "Brusco",
    desc: "Grigliate, brindisi e gin tonic per un lunedì dell’angelo tutto da ricordare.",
  },
  {
    id: "riservarooftop2025",
    title: "Riserva Rooftop Estate 2025",
    date: "Estate 2025",
    place: "Riserva Rooftop",
    desc: "Sotto le stelle, i gin diventano ancora più buoni. Una serata elegante e scatenata.",
  },
  {
    id: "ponza2025",
    title: "Ponza Estate 2025",
    date: "Estate 2025",
    place: "Ponza",
    desc: "Catamarano, tramonti e Disturbati in versione nautica. Gin e mare: combo perfetta.",
  },
  {
    id: "paestum2025",
    title: "Paestum Estate 2025",
    date: "Estate 2025",
    place: "Paestum",
    desc: "Estate e gin tra i templi: un appuntamento diventato ormai tradizione.",
  },
  {
    id: "mykonos2025",
    title: "Mykonos Estate 2025",
    date: "Estate 2025",
    place: "Mykonos",
    desc: "La spedizione ufficiale Disturbati: sole, mare, musica e gin tonic perfetti.",
  },
];

export default function Eventi() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Eventi Disturbati</h2>
        <p style={{ color: "#666" }}>
          Tutti i momenti più iconici della nostra Gin Tonic Society. Passati, presenti e futuri 🍸
        </p>

        <div className="grid grid-2" style={{ marginTop: 20 }}>
          {EVENTI.map((e) => (
            <div
              key={e.id}
              id={e.highlight ? "prossimo" : undefined}
              className="card"
              style={{
                border: e.highlight ? "2px solid #f97316" : "1px solid #ddd",
                background: e.highlight ? "#fff7f0" : "white",
              }}
            >
              <div className="card-body">
                <h3 style={{ margin: "6px 0" }}>{e.title}</h3>
                <div style={{ color: "#777", marginBottom: 8 }}>
                  {e.date} — {e.place}
                </div>
                <p style={{ color: "#555" }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
