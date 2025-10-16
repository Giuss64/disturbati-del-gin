import React from 'react'

export default function Eventi(){
  return (
    <section className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>Eventi & Rituali</h2>
        <p style={{color:'#666'}}>Serate a tema, degustazioni e grandi trasferte del gruppo.</p>

        <div className="grid grid-3" style={{marginTop:16}}>
          {/* PROSSIMO EVENTO con ancora */}
          <div id="prossimo" className="card">
            <div className="card-body">
              <h3 style={{margin:'6px 0'}}>Compleanno Mena 🎂</h3>
              <div style={{color:'#777',marginBottom:8}}>17 ottobre 2025 — Galleria Leone</div>
              <p style={{color:'#555'}}>Special drink: <b>Gin di Fuoco</b> 🔥 e “Walter Number Three” per i puristi.</p>
              <img
                src="/eventi/mena-birthday.jpg"
                alt="Compleanno Mena – Galleria Leone"
                onError={(e)=>{ e.currentTarget.style.display='none' }}
                style={{width:'100%', borderRadius:'8px', marginTop:'10px', border:'1px solid #eee'}}
              />
            </div>
          </div>

          {/* Altri eventi di esempio */}
          <div className="card"><div className="card-body">
            <h3 style={{margin:'6px 0'}}>Mykonos Night</h3>
            <div style={{color:'#777',marginBottom:8}}>Settembre – Signature party dei Disturbati</div>
            <p style={{color:'#555'}}>Dress code: bianco & lime. Playlist funk e photo corner con garnish bar.</p>
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
