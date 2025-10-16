import React from 'react'

const RECIPES = [{
  id:'classic', title:'Gin Tonic Classico', tagline:'Equilibrato, pulito, intramontabile',
  profile:['Crisp','Agrumato','Secco'],
  steps:[
    'Riempire il tumbler alto con ghiaccio abbondante',
    'Versare 50 ml di gin London Dry',
    'Completare con 150 ml di acqua tonica premium',
    'Garnish: spicchio di lime, zeste di limone',
  ]
},{
  id:'med', title:'Mediterraneo', tagline:'Note erbacee, salino e rosmarino',
  profile:['Erbaceo','Agrumato'],
  steps:[
    'Ghiaccio a cubi fino all\'orlo',
    '45 ml gin mediterraneo (rosemary-forward)',
    '120–150 ml tonica dry',
    'Garnish: rametto di rosmarino fiammeggiato, oliva verde',
  ]
},{
  id:'spicy', title:'Pepper & Spice', tagline:'Piccante, vibrante, moderno',
  profile:['Speziato','Caldo'],
  steps:[
    'Colmare di ghiaccio a cubi',
    '50 ml gin con pepe di Sichuan',
    '150 ml tonica classica',
    'Garnish: grani di pepe rosa, zenzero fresco',
  ]
},{
  id:'pink', title:'Pink Citrus', tagline:'Fruttato, profumato, social-ready',
  profile:['Fruttato','Floreale'],
  steps:[
    'Bicchiere ballon pieno di ghiaccio',
    '45 ml gin con botaniche ai frutti rossi',
    '150 ml tonica al pompelmo',
    'Garnish: fetta di pompelmo, fiori eduli',
  ]
}]

export default function Ricette(){
  return (
    <section className="section">
      <div className="container">
        <h2 style={{marginTop:0}}>Ricette Signature</h2>
        <p style={{color:'#666'}}>Quattro mood per ogni serata dei Disturbati del Gin.</p>

        <div className="grid grid-3" style={{marginTop:16}}>
          {RECIPES.map(r => (
            <div className="card" key={r.id}>
              <div className="card-body">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
                  <h3 style={{margin:'6px 0'}}>{r.title}</h3>
                  <span className="badge">Signature</span>
                </div>
                <div style={{color:'#777',marginBottom:8}}>{r.tagline}</div>
                <div style={{display:'flex',gap:8,flexWrap:'wrap',margin:'8px 0'}}>
                  {r.profile.map(p => <span className="badge" key={p}>{p}</span>)}
                </div>
                <ul className="list">
                  {r.steps.map((s,i)=>(<li key={i}>{s}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
{
  id: 'ginfuoco',
  title: 'Gin di Fuoco',
  tagline: 'Per animi forti 🔥',
  profile: ['Speziato', 'Agrumato', 'Flambé'],
  steps: [
    'Riempi un balloon con abbondante ghiaccio.',
    'Versa 50 ml di gin dry.',
    'Aggiungi zest d’arancia flambé per dare la nota affumicata.',
    'Metti un pizzico di peperoncino dolce (o peperoncino in infusione leggera).',
    'Completa con 150 ml di tonica premium neutra.',
    'Mescola delicatamente e servi con una scorzetta flambé come garnish 🔥.'
  ]
}
