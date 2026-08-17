// CAMPAMENTOS page (Tier 2 — camps, trials, entry point to the academy). Edit the text consts freely.
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HERO_NUMBER = "02"
const HERO_LABEL  = "Campamentos"
const HERO_TITLE  = "Campamentos."
const HERO_SUB    = "Verano, Semana Santa y temporadas cortas en Pádel, Tenis y Fútbol. La forma en que la mayoría de las familias conocen la academia por primera vez — y, para muchos, donde empieza el año completo."

const INCLUDED = [
  ["Días con entrenamiento real", "Trabajo técnico, táctico y físico diario con entrenadores certificados, más partidos reales contra jugadores de nivel igual o superior."],
  ["Supervisión completa", "Cuidado continuo, personal en sitio, y excursiones apropiadas para la edad cuando el calendario lo permite."],
  ["Un camino hacia el año completo", "Cada campamento funciona también como el primer paso hacia la academia residencial — con evaluación, y con la posibilidad de convertirse en año completo para las familias que lo quieran."],
]

export default function Camps() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/camps.jpg" alt="" className="w-full h-full object-cover hero-image-desaturated" />
          <div className="absolute inset-0 armani-glow mix-blend-multiply" />
          <div className="absolute inset-0 bg-background/45" />
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.06] mix-blend-overlay pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} className="relative z-10 max-w-[1000px] mt-20">
          <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase mb-6"><span className="inline-block w-[7px] h-[7px] bg-flood mr-3 align-middle" />{HERO_NUMBER} · {HERO_LABEL}</p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>{HERO_TITLE}</h1>
          <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>{HERO_SUB}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contacto" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Consultar fechas</Link>
            <Link to="/metodo" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">El método &rarr;</Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">La entrada al sistema</p>
            <h2 className="font-heading text-section leading-tight">El primer paso del roadmap.</h2>
          </div>
          <div className="md:col-span-7 font-body text-body text-foreground/85 leading-relaxed space-y-5">
            <p>Un campamento no es un evento aislado — es una evaluación real de nivel técnico, físico y competitivo, en Pádel, Tenis o Fútbol, dentro del mismo sistema que usa la academia para colocar jugadores en programas de temporada o de año completo.</p>
            <p>Las familias llegan para una semana o un verano. Algunos se van con un mejor nivel de juego y un plan claro; otros regresan para un año completo en el campus.</p>
          </div>
        </div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Qué incluye</p>
            <h2 className="font-heading text-section leading-tight">Un campamento, operado como programa.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {INCLUDED.map(([t, body]) => (
              <article key={t} className="border border-foreground/15 p-8">
                <h3 className="font-heading text-2xl mb-3">{t}</h3>
                <p className="font-body text-[15px] text-foreground/75 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
