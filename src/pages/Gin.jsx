import React from "react";

const GIN_LIST = [
  {
    id: "number3",
    name: "Number 3 London Dry",
    type: "Dry",
    abv: "46%",
    botanicals: "Ginepro, coriandolo, scorza d'arancia, scorza di pompelmo, cardamomo",
    img: "/gin/number3.jpg",
  },
  {
    id: "hendricks",
    name: "Hendrick's",
    type: "Aromatico",
    abv: "41.4%",
    botanicals: "Cetriolo, rosa, ginepro, coriandolo",
    img: "/gin/hendricks.jpg",
  },
  {
    id: "malfy-arancia",
    name: "Malfy Arancia Rossa",
    type: "Aromatico / Agrumato",
    abv: "41%",
    botanicals: "Arancia rossa, ginepro italiano, coriandolo",
    img: "/gin/malfy-arancia.jpg",
  },
  {
    id: "tanqueray",
    name: "Tanqueray London Dry",
    type: "Dry",
    abv: "43.1%",
    botanicals: "Ginepro, coriandolo, liquirizia, angelica",
    img: "/gin/tanqueray.jpg",
  },
];

export default function Gin() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>La nostra selezione di Gin</h2>
        <p style={{ color: "#666", marginBottom: 24 }}>
          Una collezione curata dei gin preferiti dai Disturbati — per ogni palato e occasione.
        </p>

        <div className="grid grid-3" style={{ gap: 20 }}>
          {GIN_LIST.map((gin) => (
            <div key={gin.id} className="card" style={{ textAlign: "center" }}>
              <img
                src={gin.img}
                alt={gin.name}
                style={{
                  width: "100%",
                  maxHeight: "280px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  marginBottom: "8px",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="card-body">
                <h3 style={{ margin: "6px 0" }}>{gin.name}</h3>
                <p style={{ color: "#777", margin: "4px 0" }}>{gin.type}</p>
                <p style={{ color: "#555", fontSize: "0.9rem", margin: "6px 0" }}>
                  <b>Botaniche:</b> {gin.botanicals}
                </p>
                <p style={{ color: "#555", fontSize: "0.9rem", margin: "6px 0" }}>
                  <b>Gradazione:</b> {gin.abv}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
