// HOME — Duty of care / safeguarding
const EYEBROW = "Safeguarding"
const HEADING = "Duty of care, by design."
const LEDE = "Because we board minors, welfare is a system — not a promise."
const POINTS = [
  ["Vetted staff", "Background-checked (Certificado de Delitos de Naturaleza Sexual), a written safeguarding policy, and a named welfare lead."],
  ["In-residence care", "House-parents and tutors living on site, defined supervision ratios, and round-the-clock duty of care."],
  ["International cover", "Guardianship, consent, visas, medical protocols, and insurance on both sides of the Atlantic."],
  ["A line home", "A regular, direct channel to parents — so families always know how their player is doing."],
]
export default function DutyOfCareSection() {
  return (
    <section id="care" className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-flood uppercase mb-4">{EYEBROW}</p>
          <h2 className="font-heading text-section text-foreground leading-tight">{HEADING}</h2>
          <p className="font-body text-body text-foreground/75 leading-relaxed max-w-2xl mt-5">{LEDE}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {POINTS.map(([t, body]) => (
            <article key={t} className="border border-foreground/15 p-8">
              <h3 className="font-heading text-xl mb-3">{t}</h3>
              <p className="font-body text-[15px] text-foreground/75 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
