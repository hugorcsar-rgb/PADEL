// HOME — 03 · El Campus
import { Link } from 'react-router-dom'
const NUMBER = "03"
const HEADING = "Construido por fases. De nivel élite desde el día uno."
const LEDE = "Un campus construido para este propósito en Talavera de la Reina, a 75 minutos de Madrid — pistas, ciencias del deporte, aulas y residencia en un solo sitio."
const AREAS = [
  ["Pistas", "6–8 pistas panorámicas cubiertas de cristal con una altura libre mínima de 7.5 m, más una pista central con gradas y video para exhibiciones y análisis de partido."],
  ["Centro de alto rendimiento", "Fuerza y acondicionamiento, ciencias del deporte y pruebas físicas, fisioterapia y recuperación — con alberca y zona de recuperación en una fase posterior."],
  ["Ala académica", "Aulas, sala de estudio supervisada, biblioteca silenciosa y salas de análisis de video para el plan académico acreditado y la educación táctica."],
  ["Residencia y comedor", "Residencias supervisadas con tutores en sitio, comedor construido alrededor de la nutrición deportiva, más sala médica, tienda deportiva y cafetería."],
]
export default function CampusSection() {
  return (
    <section id="campus" className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">{NUMBER}</p>
          <h2 className="font-heading text-section text-foreground leading-tight">{HEADING}</h2>
          <p className="font-body text-body text-foreground/75 leading-relaxed max-w-2xl mt-5">{LEDE}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map(([t, body]) => (
            <article key={t} className="border border-foreground/15 p-8">
              <h3 className="font-heading text-xl leading-tight mb-3">{t}</h3>
              <p className="font-body text-[15px] text-foreground/75 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
        <p className="font-body text-[15px] text-foreground/55 leading-relaxed max-w-3xl">
          La fase uno abre con las pistas, el núcleo de alto rendimiento, una residencia asociada y un socio académico acreditado. El campus crece — más pistas, una alberca, residencia ampliada — conforme crece la matrícula.
        </p>
        <div><Link to="/campus" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">Conoce el campus</Link></div>
        <figure className="w-full overflow-hidden">
          <img src="/images/campus-court.jpg" alt="Pista de pádel panorámica de cristal" className="w-full h-[46vh] min-h-[320px] object-cover hero-image-desaturated" loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
