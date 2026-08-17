// PÁDEL page (Tier 1 — full-year residential). Edit the text consts freely.
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HERO_NUMBER = "01"
const HERO_LABEL  = "Academia Residencial"
const HERO_TITLE  = "Pádel."
const HERO_SUB    = "Año completo, en campus, de 12 a 18 años. Vive donde entrenas, cursa un plan académico internacional acreditado, y te desarrollas como atleta y como persona — sin tener que elegir entre las dos cosas."

const OFFER = [
  ["Entrena a diario", "Entrenadores españoles certificados, baja proporción jugador-entrenador, y un plan de desarrollo individual — técnico, táctico, físico — revisado durante todo el año."],
  ["Escuela real", "Plan académico internacional acreditado, clases reducidas y tutores en residencia, con horarios organizados alrededor del entrenamiento para que nada se sacrifique."],
  ["Vive en el campus", "Residencia supervisada con tutores en sitio, comedor de nutrición deportiva, y cuidado continuo las 24 horas."],
  ["Crece como persona", "El método — esfuerzo, disciplina, respeto, resiliencia — más psicología deportiva y reportes honestos a casa sobre la pista, la clase y el carácter."],
]

const DAY = [
  ["Mañana", "Horario escolar — plan académico acreditado, clases reducidas."],
  ["Mediodía", "Primer bloque de entrenamiento: trabajo técnico y físico."],
  ["Tarde", "Segundo bloque: trabajo táctico y partidos en pozos."],
  ["Noche", "Estudio supervisado, recuperación, y vida en residencia."],
]

export default function Academy() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/academy.jpg" alt="" className="w-full h-full object-cover hero-image-desaturated" />
          <div className="absolute inset-0 armani-glow mix-blend-multiply" />
          <div className="absolute inset-0 bg-background/45" />
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.06] mix-blend-overlay pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} className="relative z-10 max-w-[1000px] mt-20">
          <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase mb-6"><span className="inline-block w-[7px] h-[7px] bg-flood mr-3 align-middle" />{HERO_NUMBER} · {HERO_LABEL}</p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>{HERO_TITLE}</h1>
          <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>{HERO_SUB}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contacto" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Contacto</Link>
            <Link to="/campus" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">El campus &rarr;</Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">La oferta</p>
            <h2 className="font-heading text-section leading-tight">Un año que suma.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {OFFER.map(([t, body]) => (
              <article key={t} className="border border-foreground/15 p-8">
                <h3 className="font-heading text-2xl mb-3">{t}</h3>
                <p className="font-body text-body text-foreground/75 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Un día en el campus</p>
            <h2 className="font-heading text-section leading-tight">Escuela, deporte, estudio, descanso.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAY.map(([t, body], i) => (
              <div key={t} className="border-l border-accent/40 pl-6">
                <p className="font-data text-[11px] tracking-[0.25em] text-flood uppercase mb-2">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-heading text-2xl mb-2">{t}</h3>
                <p className="font-body text-[15px] text-foreground/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
