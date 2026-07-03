// HOME — 01 · Programs
const NUMBER = "01"
const HEADING = "Four ways in. One standard."
const PROGRAMS = [
  ["Residential Academy", "Full year · ages 12–18", "Live on campus, train daily, and study an accredited international curriculum. The flagship — no choosing between serious sport and real school."],
  ["Camps & Trials", "Weekly · seasonal", "Summer and holiday intensives. Where visiting juniors — and our Woodlands, Texas cohorts — first arrive, and where a year on campus often begins."],
  ["High Performance", "Select · scholarship", "A competitive squad chasing a national and international calendar. Results and reputation that carry the whole academy."],
  ["Community Club", "Talavera", "After-school programmes, ligas, clinics, and court rentals for the town that hosts us — steady ground beneath the international intakes."],
]
export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">{NUMBER}</p>
          <h2 className="font-heading text-section text-foreground leading-tight">{HEADING}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map(([t, meta, body], i) => (
            <article key={t} className="border border-foreground/15 p-8 flex flex-col">
              <p className="font-data text-[11px] tracking-[0.25em] text-flood uppercase mb-4">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-heading text-2xl leading-tight mb-1">{t}</h3>
              <p className="font-data text-[10px] tracking-[0.2em] text-foreground/45 uppercase mb-5">{meta}</p>
              <p className="font-body text-[15px] text-foreground/75 leading-relaxed mt-auto">{body}</p>
            </article>
          ))}
        </div>
        <figure className="w-full overflow-hidden">
          <img src="/images/programs.jpg" alt="Padel paddles and balls on a blue court" className="w-full h-[42vh] min-h-[300px] object-cover hero-image-desaturated" loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
