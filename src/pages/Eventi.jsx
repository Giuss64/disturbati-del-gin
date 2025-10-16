import React from 'react'

export default function Eventi(){
  return (
    <section className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>Eventi & Rituali</h2>
        <p style={{color:'#666'}}>Serate a tema, degustazioni e grandi trasferte del gruppo.</p>

        <div className="grid grid-3" style={{marginTop:16}}>
          <div className="card"><div className="card-body">
            <h3 style={{margin:'6px 0'}}>Mykonos Night</h3>
            <div style={{color:'#777',marginBottom:8}}>Settembre – Signature party dei Disturbati</div>
            <p style={{color:'#555'}}>Dress code: bianco & lime. Playlist funk e photo corner con garnish bar.</p>
          </div></div>
          <div className="card"><div className="card-body">
            <h3 style={{margin:'6px 0'}}>Gin & Castagne</h3>
            <div style={{color:'#777',marginBottom:8}}>Ottobre – Pairing autunnale a Serino</div>
            <p style={{color:'#555'}}>Toniche dry, gin speziati e cicchetti di stagione. Fuoco acceso, chiacchiere infinite.</p>
          </div></div>
          <div className="card"><div className="card-body">
            <h3 style={{margin:'6px 0'}}>Colmar Christmas Markets</h3>
            <div style={{color:'#777',marginBottom:8}}>Dicembre – Tour alsaziano con stop gin-friendly</div>
            <p style={{color:'#555'}}>Luci, vin brulè (con moderazione 😉) e ricerca di tonic water locali.</p>
          </div></div>
        </div>
      </div>
    </section>
  )
}
