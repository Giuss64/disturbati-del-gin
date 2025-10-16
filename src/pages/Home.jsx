import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import groupImg from '../assets/group.jpg'

export default function Home(){
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const y = useTransform(scrollYProgress, [0,1], ['-10%','10%'])

  return (
    <div>
      {/* HERO */}
      <section className="hero" ref={ref}>
        <motion.div
          style={{ position:'absolute', inset:0, y }}
          initial={{opacity:0, scale:1.05}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1}}
        >
          <img
            src={groupImg}
            alt="Gruppo I Disturbati del Gin"
            style={{width:'100%',height:'100%',objectFit:'cover'}}
          />
          <div className="overlay" />
        </motion.div>

        <motion.div
          className="content"
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:1, delay:.3}}
        >
          <span className="badge">Community</span>
          <h1>I Disturbati del Gin</h1>
          {/* Motto */}
          <p style={{ fontStyle:'italic', fontSize:'1.5rem', marginTop:'-8px', color:'#dcdcdc' }}>
            Cenosillicafobici
          </p>
          <p>
            La pagina ufficiale dedicata al Gin Tonic: ricette signature, consigli sulle botaniche
            e gli eventi del nostro gruppo.
          </p>
          <div style={{marginTop:16, display:'flex',gap:12,justifyContent:'center'}}>
            <Link to="/ricette" className="btn">Scopri le ricette</Link>
            <Link to="/builder" className="btn secondary">Crea il tuo mix</Link>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <h2 style={{marginTop:0}}>Benvenuto nella nostra Gin Tonic Society</h2>
          <p style={{color:'#555'}}>
            Freddi come il ghiaccio, rumorosi come i cubetti. Segui le ricette o crea il tuo mix perfetto.
          </p>
        </div>
      </section>

      {/* CREW (foto badge + descrizioni) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 24 }}>La Nostra Crew 🍸</h2>

          <div className="grid grid-3" style={{ gap: 20 }}>
            {[
              { img: '/walter.jpg',    name: 'Walter',    role: "L’intenditore di gin" },
              { img: '/francesco.jpg', name: 'Francesco', role: 'Il preparatore di gin' },
              { img: '/giuseppe.jpg',  name: 'Giuseppe',  role: 'Il fotografo del gin' },
              { img: '/mimmo.jpg',     name: 'Mimmo',     role: 'Il degustatore' },
              { img: '/marco.jpg',     name: 'Marco',     role: 'Il regista' },
              { img: '/rosa.jpg',      name: 'Rosa',      role: 'L’ammazza gin' },
              { img: '/virginia.jpg',  name: 'Virginia',  role: 'L’ammazza gin' },
              { img: '/francesca.jpg', name: 'Francesca', role: 'La Orange Gin' },
              { img: '/lory.jpg',      name: 'Lory',      role: 'La sua adepta' },
              { img: '/mena.jpg',      name: 'Mena',      role: 'La new entry' },
            ].map(person => (
              <div key={person.name} className="card" style={{ textAlign:'center', paddingBottom:12 }}>
                <img
                  src={person.img}
                  alt={person.name}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '12px auto 8px',
                    display: 'block',
                    border: '2px solid #ddd'
                  }}
                />
                <h4 style={{ margin: '4px 0' }}>{person.name}</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
