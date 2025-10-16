import React from 'react'

const BOTANICHE = [
  { value:'juniper', label:'Ginepro' },
  { value:'citrus', label:'Agrumi' },
  { value:'herbs', label:'Erbe mediterranee' },
  { value:'pepper', label:'Pepe' },
  { value:'floral', label:'Floreale' },
  { value:'fruity', label:'Frutti rossi' },
]

const TONICHE = [
  { value:'classic', label:'Classica' },
  { value:'dry', label:'Dry' },
  { value:'med', label:'Mediterranea' },
  { value:'citrus', label:'Citrus' },
]

function labelFrom(list, v){ return (list.find(x=>x.value===v)?.label) || v }

export default function Builder(){
  const [botanica, setBotanica] = React.useState('juniper')
  const [tonica, setTonica] = React.useState('classic')
  const [intensita, setIntensita] = React.useState(50)
  const [nome, setNome] = React.useState('')
  const [note, setNote] = React.useState('')
  const abv = Math.round(((intensita*40)/(intensita+150))*10)/10

  const ricetta = [
    'I Disturbati del Gin — Ricetta',
    nome ? `Nome: ${nome}` : null,
    `Botaniche: ${labelFrom(BOTANICHE, botanica)}`,
    `Tonica: ${labelFrom(TONICHE, tonica)}`,
    `Gin: ${intensita} ml + Tonica: 150 ml`,
    note ? `Note: ${note}` : null,
    '#DisturbatiDelGin #GinTonic'
  ].filter(Boolean).join('\n')

  return (
    <section className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>Crea il tuo Gin Tonic</h2>
        <p style={{color:'#666'}}>Scegli botaniche, tonica e intensità. Ottieni la ricetta perfetta e condividila con il gruppo.</p>

        <div className="grid" style={{gridTemplateColumns:'2fr 1fr',gap:16,marginTop:16}}>
          <div className="card">
            <div className="card-body">
              <div className="grid" style={{gridTemplateColumns:'1fr 1fr',gap:12}}>
                <div>
                  <div style={{fontWeight:600, fontSize:14, marginBottom:6}}>Botaniche</div>
                  <select className="select" value={botanica} onChange={e=>setBotanica(e.target.value)}>
                    {BOTANICHE.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                  </select>
                </div>
                <div>
                  <div style={{fontWeight:600, fontSize:14, marginBottom:6}}>Acqua Tonica</div>
                  <select className="select" value={tonica} onChange={e=>setTonica(e.target.value)}>
                    {TONICHE.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
              </div>

              <div style={{marginTop:16}}>
                <div style={{fontWeight:600, fontSize:14, marginBottom:6}}>Intensità gin (ml)</div>
                <input className="slider" type="range" min="30" max="70" step="5" value={intensita} onChange={e=>setIntensita(parseInt(e.target.value))}/>
                <div style={{color:'#666', fontSize:14}}>Suggerito: <b>{intensita} ml</b> gin + 150 ml tonica → stima ABV nel bicchiere: <b>{abv}%</b></div>
              </div>

              <div className="grid" style={{gridTemplateColumns:'1fr 1fr', gap:12, marginTop:16}}>
                <div>
                  <div style={{fontWeight:600, fontSize:14, marginBottom:6}}>Nome del blend</div>
                  <input className="input" placeholder="Es. Disturbato Mediterraneo #3" value={nome} onChange={e=>setNome(e.target.value)}/>
                </div>
                <div>
                  <div style={{fontWeight:600, fontSize:14, marginBottom:6}}>Note (opzionale)</div>
                  <input className="input" placeholder="Garnish, ghiaccio, tipo di bicchiere…" value={note} onChange={e=>setNote(e.target.value)}/>
                </div>
              </div>

              <div style={{display:'flex',gap:10, marginTop:16}}>
                <button className="btn" onClick={()=>navigator.clipboard.writeText(ricetta)}>Copia ricetta</button>
                <button className="btn secondary" onClick={()=>alert(ricetta)}>Anteprima</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div style={{fontSize:12, letterSpacing:1, textTransform:'uppercase', color:'#777'}}>Anteprima ricetta</div>
              <div style={{marginTop:8, fontWeight:700}}>{nome || 'Gin Tonic personalizzato'}</div>
              <hr style={{margin:'10px 0'}}/>
              <div><b>Botaniche:</b> {labelFrom(BOTANICHE, botanica)}</div>
              <div><b>Tonica:</b> {labelFrom(TONICHE, tonica)}</div>
              <div><b>Gin:</b> {intensita} ml • <b>Tonica:</b> 150 ml</div>
              <div style={{color:'#777'}}>Stima ABV: {abv}%</div>
              {note && <><hr style={{margin:'10px 0'}}/><div><b>Note:</b> {note}</div></>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
