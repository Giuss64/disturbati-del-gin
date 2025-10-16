import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'       // ⬅️ aggiunto
import groupImg from '../assets/group.jpg'

export default function Home(){
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const y = useTransform(scrollYProgress, [0,1], ['-10%','10%'])

  return (
    <div>
      <section className="hero" ref={ref}>
        <motion.div style={{ position:'absolute', inset:0, y }} initial={{opacity:0, scale:1.05}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
          <img src={groupImg} alt="Gruppo I Disturbati del Gin" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div className="overlay" />
        </motion.div>
        <motion.div className="content" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1, delay:.3}}>
          <span className="badge">Community</span>
          <h1>I Disturbati del Gin</h1>
          <p>La pagina ufficiale dedicata al Gin Tonic: ricette signature, consigli sulle botaniche e gli eventi del nostro gruppo.</p>
          <div style={{marginTop:16, display:'flex',gap:12,justifyContent:'center'}}>
            {/* ⬇️ LINK SPA: niente ricarica, niente 404 */}
            <Link to="/ricette" className="btn">Scopri le ricette</Link>
            <Link to="/builder" className="btn secondary">Crea il tuo mix</Link>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{marginTop:0}}>Benvenuto nella nostra Gin Tonic Society</h2>
          <p style={{color:'#555'}}>Freddi come il ghiaccio, rumorosi come i cubetti. Segui le ricette o crea il tuo mix perfetto.</p>
        </div>
      </section>
    </div>
  )
}
