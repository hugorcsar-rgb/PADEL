// ACADEMY page (Tier 1 — full-year residential). Edit the text consts freely.
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HERO_NUMBER = "01"
const HERO_LABEL  = "Residential Academy"
const HERO_TITLE  = "The Academy."
const HERO_SUB    = "Full-year, on-campus, ages 12–18. Live where you train, study an accredited international curriculum, and develop as an athlete and a person — without ever choosing between the two."

const OFFER = [
  ["Train daily", "Certified Spanish coaches, low player-to-coach ratios, and an individual development plan — technical, tactical, physical — revised through the year."],
  ["Real schooling", "An accredited international curriculum with small classes and tutors in residence, timetabled around training so nothing is dropped."],
  ["Live on campus", "Supervised residence with house-parents and tutors on site, sports-nutrition dining, and round-the-clock duty of care."],
  ["Grow as a person", "The method — effort, discipline, respect, resilience — plus sports psychology and honest reports home on court, class, and character."],
]

const DAY = [
  ["Morning", "School hours — accredited curriculum, small classes."],
  ["Midday", "First training block: technical and physical work."],
  ["Afternoon", "Second block: tactical work and match play in pozos."],
  ["Evening", "Supervised study hall, recovery, and residence life."],
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
            <Link to="/inquire" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Enquire</Link>
            <Link to="/facilities" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">The campus &rarr;</Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">The offer</p>
            <h2 className="font-heading text-section leading-tight">A year that compounds.</h2>
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
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">A day on campus</p>
            <h2 className="font-heading text-section leading-tight">School, sport, study, rest.</h2>
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
