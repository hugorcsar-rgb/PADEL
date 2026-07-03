// =============================================================================
// HOME — Floodlit hero (pinned Ken Burns scroll sequence)
// =============================================================================
// Three floodlit scenes cross-fade with a slow pan/zoom as you scroll.
// No image assets required — the scenes are CSS gradients. To use real photos
// later, give each SCENE an `image` and set the layer background to it.
// All scroll logic runs client-side only, so the SSG prerender is safe.
// =============================================================================
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const SCENES = [
  {
    cls: 'floodlit-1', pan: [-1, -1],
    eyebrow: 'The Transatlantic Padel Bridge · Talavera',
    title: 'Sport and school\nunder one roof.',
    sub: 'A residential padel academy and international school for junior players — where families stop choosing between serious sport and real education.',
  },
  {
    cls: 'floodlit-2', pan: [1, -1],
    eyebrow: 'The training',
    title: 'Train like it’s\nyour profession.',
    sub: 'Certified Spanish coaches, low ratios, and a periodised plan built for one player: yours.',
  },
  {
    cls: 'floodlit-3', pan: [-1, 1],
    eyebrow: 'The whole athlete',
    title: 'Grow like it’s\nyour life.',
    sub: 'Accredited schooling, character, and round-the-clock duty of care — on one campus.',
  },
]

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const bump = (p, c, pl, fd) => { const d = Math.abs(p - c); if (d <= pl) return 1; if (d >= pl + fd) return 0; return 1 - (d - pl) / fd }

export default function HeroSection() {
  const trackRef = useRef(null)
  const layerRefs = useRef([])
  const copyRefs = useRef([])
  const barRef = useRef(null)
  const idxRef = useRef(null)
  const cueRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const n = SCENES.length
    const centers = SCENES.map((_, i) => (n === 1 ? 0 : i / (n - 1)))
    let raf = 0
    const loop = () => {
      const track = trackRef.current
      if (track) {
        const rect = track.getBoundingClientRect()
        const scrollable = track.offsetHeight - window.innerHeight
        const p = clamp(scrollable > 0 ? -rect.top / scrollable : 0, 0, 1)
        const raw = centers.map((c) => bump(p, c, 0.08, 0.3))
        const sum = raw.reduce((a, b) => a + b, 0) || 1
        const zoom = reduce ? 1.1 : 1.08 + p * 0.16
        layerRefs.current.forEach((el, i) => {
          if (!el) return
          el.style.opacity = String(raw[i] / sum)
          el.style.transform = reduce
            ? 'scale(1.1)'
            : `scale(${zoom}) translate3d(${SCENES[i].pan[0] * p * 26}px, ${SCENES[i].pan[1] * p * 16}px, 0)`
        })
        copyRefs.current.forEach((el, i) => {
          if (!el) return
          const a = bump(p, centers[i], 0.14, 0.12)
          el.style.opacity = String(a)
          el.style.transform = `translateY(${(1 - a) * 14}px)`
          el.style.pointerEvents = a > 0.6 ? 'auto' : 'none'
        })
        if (barRef.current) barRef.current.style.width = (p * 100).toFixed(2) + '%'
        if (idxRef.current) idxRef.current.textContent = String(clamp(Math.round(p * (n - 1)), 0, n - 1) + 1).padStart(2, '0')
        if (cueRef.current) cueRef.current.style.opacity = String(clamp(1 - p / 0.05, 0, 1))
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section ref={trackRef} className="relative w-full" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {SCENES.map((s, i) => (
          <div
            key={s.cls}
            ref={(el) => (layerRefs.current[i] = el)}
            className={`absolute inset-[-2%] ${s.cls}`}
            style={{ opacity: i === 0 ? 1 : 0, transform: 'scale(1.08)', willChange: 'opacity, transform' }}
          />
        ))}
        <div className="absolute inset-0 hero-grain opacity-[0.06] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.28) 42%, rgba(10,22,40,0) 72%), radial-gradient(130% 90% at 50% 55%, transparent 42%, rgba(10,22,40,0.5))' }} />

        <div className="absolute inset-0 z-10 flex items-end">
          <div className="relative w-full">
            {SCENES.map((s, i) => (
              <div
                key={s.cls}
                ref={(el) => (copyRefs.current[i] = el)}
                className="absolute inset-x-0 bottom-0 max-w-[1100px] mx-auto px-[24px] md:px-[55px] pb-[14vh]"
                style={{ opacity: i === 0 ? 1 : 0, willChange: 'opacity, transform' }}
              >
                <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase flex items-center gap-3">
                  <span className="inline-block w-[7px] h-[7px] bg-flood" />
                  {s.eyebrow}
                </p>
                <h1 className="font-heading font-light leading-[0.98] tracking-[-0.01em] mt-5 whitespace-pre-line" style={{ fontSize: 'clamp(2.6rem, 8vw, 6rem)' }}>
                  {s.title}
                </h1>
                <p className="font-body font-light text-foreground/80 leading-relaxed max-w-[620px] mt-6" style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)' }}>
                  {s.sub}
                </p>
                {i === 0 && (
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link to="/inquire" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Enquire</Link>
                    <Link to="/camps" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">Camps &amp; dates</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-6 bottom-7 z-10 flex items-baseline gap-1 font-data text-[12px] tracking-[0.15em] text-stone/70">
          <span ref={idxRef} className="text-foreground">01</span><span>/</span><span>03</span>
        </div>
        <div ref={cueRef} className="absolute left-1/2 -translate-x-1/2 bottom-7 z-10 flex flex-col items-center gap-2">
          <div className="scroll-line" />
          <span className="font-data text-[10px] tracking-[0.4em] text-stone/60 uppercase">Scroll</span>
        </div>
        <div className="absolute left-0 bottom-0 z-10 h-px w-full bg-foreground/15">
          <span ref={barRef} className="block h-full w-0 bg-flood" />
        </div>
      </div>
    </section>
  )
}
