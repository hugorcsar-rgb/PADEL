// HOME — Closing CTA
import { Link } from 'react-router-dom'
const EYEBROW = "First conversation"
const HEADING = "Tell us where your player is."
const BODY = "Send a short note about where they are — in the sport and in school — and we’ll tell you how the bridge works. No forms with twenty fields."
export default function CTASection() {
  return (
    <section className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">{EYEBROW}</p>
        <h2 className="font-heading text-section leading-tight mb-8">{HEADING}</h2>
        <p className="font-body text-body text-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">{BODY}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/inquire" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Enquire &rarr;</Link>
          <Link to="/camps" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">Camps &amp; dates</Link>
        </div>
      </div>
    </section>
  )
}
