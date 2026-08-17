// CAMPUS page. Edit the text consts freely.
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HERO_TITLE = "El Campus."
const HERO_SUB   = "Un sitio construido para este propósito en Talavera de la Reina, a 75 minutos de Madrid-Barajas. Construido por fases — de nivel élite desde la primera pista hasta la última aula."

const AREAS = [
  ["Pistas", "6–8 pistas panorámicas cubiertas de cristal, con una altura libre mínima de 7.5 m para técnica y globos completos. Pista central con gradas y grabación de video para torneos, exhibiciones y análisis de partido."],
  ["Centro de alto rendimiento", "Gimnasio y espacio de fuerza y acondicionamiento, ciencias del deporte y pruebas físicas, fisioterapia y recuperación — con alberca y zona de recuperación ampliada en una fase posterior."],
  ["Ala académica", "Aulas, sala de estudio supervisada, biblioteca silenciosa y salas de análisis de video — para el plan académico acreditado y para la educación táctica."],
  ["Residencia y vida en el campus", "Residencias supervisadas con tutores y personal académico en sitio, comedor construido alrededor de la nutrición del atleta, además de sala médica, tienda deportiva y cafetería para familias visitantes."],
]

export default function Facilities() {
  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/courts.jpg" alt="" className="w-full h-full object-cover hero-image-desaturated" />
          <div className="absolute inset-0 armani-glow mix-blend-multiply" />
          <div className="absolute inset-0 bg-background/45" />
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.06] mix-blend-overlay pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} className="relative z-10 max-w-[1000px] mt-20">
          <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase mb-6"><span className="inline-block w-[7px] h-[7px] bg-flood mr-3 align-middle" />El Campus</p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>{HERO_TITLE}</h1>
          <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>{HERO_SUB}</p>
        </motion.div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-16">
          {AREAS.map(([t, body], i) => (
            <div key={t} className="grid md:grid-cols-12 gap-8 border-t border-foreground/10 pt-12 first:border-t-0 first:pt-0">
              <div className="md:col-span-4">
                <p className="font-data text-[11px] tracking-[0.25em] text-flood uppercase mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-heading text-3xl md:text-4xl leading-tight">{t}</h2>
              </div>
              <p className="md:col-span-8 font-body text-body text-foreground/80 leading-relaxed">{body}</p>
            </div>
          ))}
          <p className="font-body text-[15px] text-foreground/55 leading-relaxed max-w-3xl">
            Por fases: se lanza con las pistas, el núcleo de alto rendimiento, una residencia asociada y un socio académico acreditado — y el campus se expande conforme crece la matrícula. La base de costos de Talavera es lo que hace realista esta construcción por etapas.
          </p>
          <div><Link to="/contacto" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Contacto &rarr;</Link></div>
        </div>
      </section>
    </>
  )
}
