// HOME — 03 · The Campus
import { Link } from 'react-router-dom'
const NUMBER = "03"
const HEADING = "Built in phases. Elite from day one."
const LEDE = "A purpose-built campus in Talavera de la Reina, 75 minutes from Madrid — courts, sports science, classrooms, and residence on one site."
const AREAS = [
  ["Courts", "6–8 covered panoramic glass courts at a minimum 7.5 m clear height, plus a center court with seating and video for showcases and film review."],
  ["High-performance center", "Strength and conditioning, sports-science and fitness testing, physiotherapy and recovery — with a pool and recovery zone in a later phase."],
  ["Academic wing", "Classrooms, a supervised study hall, a quiet library, and video-analysis rooms for the accredited curriculum and tactical education."],
  ["Residence & dining", "Supervised residence halls with house-parents and tutors on site, a dining hall built around sports nutrition, plus medical, pro-shop, and café."],
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
          Phase one opens with the courts, the high-performance core, a partnered residence, and an accredited academic partner. The campus grows — more courts, a pool, expanded residence — as enrolment grows.
        </p>
        <div><Link to="/facilities" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">Tour the campus</Link></div>
      </div>
    </section>
  )
}
