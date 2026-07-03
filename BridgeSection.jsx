// HOME — The Woodlands bridge
import { Link } from 'react-router-dom'
export default function BridgeSection() {
  return (
    <section id="bridge" className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-end">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">The pipeline</p>
          <h2 className="font-heading text-section text-foreground leading-tight">The Woodlands, Texas&nbsp;&rarr;&nbsp;Talavera.</h2>
        </div>
        <div className="flex flex-col gap-7">
          <p className="font-body text-body text-foreground/80 leading-relaxed">
            A dedicated bridge for families in The Woodlands and greater Houston. A local coach runs trial clinics and curates travelling groups by ability. Parents come to information evenings; players come for a summer &mdash; and some stay for a year.
          </p>
          <div><Link to="/inquire" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">Info nights for Woodlands families</Link></div>
        </div>
      </div>
    </section>
  )
}
