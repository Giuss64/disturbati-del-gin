import React from 'react'

export default function Contatti(){
  const onSubmit=(e)=>{e.preventDefault(); alert('Grazie! Ti aggiungeremo alla newsletter.');}
  return (
    <section className="section" style={{background:'#0b0b0d', color:'#eee'}}>
      <div className="container" style={{maxWidth:900}}>
        <h2 style={{marginTop:0, color:'#fff'}}>Entra nei Disturbati del Gin</h2>
        <p style={{color:'#bbb'}}>Lascia la tua mail per ricevere ricette, eventi esclusivi e i meme più disturbati del mese.</p>

        <form onSubmit={onSubmit} style={{display:'flex', gap:10, maxWidth:520, marginTop:12}}>
          <input type="email" required placeholder="la-tua@email.com" className="input" />
          <button className="btn" type="submit">Iscrivimi</button>
        </form>

        <div style={{display:'flex', gap:10, marginTop:16}}>
          <a className="btn secondary" href="mailto:info@example.com">Newsletter</a>
          <a className="btn secondary" href="#">WhatsApp</a>
        </div>

        <div className="card" style={{marginTop:20, background:'#0f0f12', borderColor:'#222', color:'#ddd'}}>
          <div className="card-body">
            <h3 style={{margin:'6px 0', color:'#fff'}}>Linee guida del perfetto Disturbato</h3>
            <ul className="list" style={{color:'#bbb'}}>
              <li>Bicchiere freddo, tanto ghiaccio, zero compromessi.</li>
              <li>Rispetta la tonica: versala lenta sul dorso del cucchiaio.</li>
              <li>Garnish con criterio: mai coprire il gin, esaltalo.</li>
              <li>No shake: si costruisce nel bicchiere, sempre.</li>
              <li>Foto o non è successo 📸</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
