import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        {/* Testo di Benvenuto */}
        <h1 style={{marginTop: 0}}>Benvenuto nella nostra Gin Tonic Society</h1>
        <p style={{color:'#555', fontSize:'18px', lineHeight:'1.6'}}>
          Freddi come il ghiaccio, rumorosi come i cubetti. <br/>
          Segui le ricette, crea il tuo mix perfetto e scopri i momenti unici del nostro gruppo.
        </p>

        {/* Pulsanti di navigazione */}
        <div style={{marginTop: 24, display:'flex', gap:16, flexWrap:'wrap'}}>
          <Link to="/ricette" className="button primary">Scopri le ricette</Link>
          <Link to="/builder" className="button secondary">Crea il tuo mix</Link>
          <Link to="/eventi" className="button secondary">Eventi</Link>
          <Link to="/contatti" className="button secondary">Contatti</Link>
        </div>

        {/* Sezione Il nostro gruppo */}
        <section className="friends-section" style={{marginTop: 48}}>
          <h2>Il nostro gruppo</h2>
          <p style={{color:'#666', marginBottom: 16}}>
            Gli irriducibili del Gin Tonic: ognuno con il proprio stile, ma uniti dalla stessa passione 🍸
          </p>

          <div className="grid grid-3" style={{marginTop: 16}}>
            {[
              {name: 'Walter', role: "L'intenditore di gin", img: '/walter.jpg'},
              {name: 'Francesco', role: 'Il preparatore di gin', img: '/francesco.jpg'},
              {name: 'Giuseppe', role: 'Il fotografo del gin', img: '/giuseppe.jpg'},
              {name: 'Mimmo', role: 'Il degustatore', img: '/mimmo.jpg'},
              {name: 'Marco', role: 'Il regista', img: '/marco.jpg'},
              {name: 'Rosa', role: 'Le ammazza gin', img: '/rosa.jpg'},
              {name: 'Virginia', role: 'Le ammazza gin', img: '/virginia.jpg'},
              {name: 'Francesca', role: 'La orange gin', img: '/francesca.jpg'},
              {name: 'Lory', role: 'La sua adepta', img: '/lory.jpg'},
              {name: 'Mena', role: 'La new entry', img: '/mena.jpg'},
            ].map(friend => (
              <div key={friend.name} className="card" style={{textAlign:'center'}}>
                <img 
                  src={friend.img} 
                  alt={friend.name} 
                  style={{width: '100%', borderRadius: '8px', marginBottom: '8px'}}
                />
                <h4 style={{margin: '4px 0'}}>{friend.name}</h4>
                <p style={{color: '#666'}}>{friend.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
