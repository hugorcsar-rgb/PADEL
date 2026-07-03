// HOME — 02 · The Method
import { Link } from 'react-router-dom'
const NUMBER = "02"
const HEADING = "Three pillars. No shortcuts."
const PILLARS = [
  ["Athletic", "Technical and tactical work, periodised conditioning, and video analysis — with real match play in pozos against players who push you."],
  ["Academic", "An accredited international curriculum, small classes, and tutors in residence. Schooling continues, uninterrupted, alongside the training."],
  ["Character", "Effort, discipline, respect, humility, resilience. Sports psychology, nutrition, and honest reports home on court, class, and person."],
]
export default function MethodSection() {
  return (
    <section id="method" className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">{NUMBER}</p>
          <h2 className="font-heading text-section text-foreground leading-tight">{HEADING}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {PILLARS.map(([t, body]) => (
            <div key={t} className="border-l border-accent/40 pl-6">
              <h3 className="font-heading text-3xl mb-3">{t}</h3>
              <p className="font-body text-body text-foreground/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div><Link to="/method" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">The full method</Link></div>
      </div>
    </section>
  )
}
