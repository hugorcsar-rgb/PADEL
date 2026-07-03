// ENQUIRE page. The form opens the visitor's email app pre-filled (no backend).
// Change the address in ENQUIRY_EMAIL.
import { useState } from 'react'

const ENQUIRY_EMAIL = "hello@thepadelbridge.com"

export default function Inquire() {
  const [form, setForm] = useState({ name: "", email: "", age: "", message: "" })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const sendEnquiry = () => {
    const subject = `Enquiry — ${form.name || "player"}${form.age ? ` (age ${form.age})` : ""}`
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, `Player age: ${form.age}`, "", form.message].join("\n")
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const field = "font-body text-[15px] text-foreground bg-transparent border-0 border-b border-foreground/20 py-2.5 focus:outline-none focus:border-flood placeholder:text-foreground/35"

  return (
    <section className="relative w-full pt-40 pb-24 md:pt-48 px-[24px] md:px-[89px]">
      <div className="absolute inset-0 z-0 floodlit-page" />
      <div className="relative z-10 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-flood uppercase mb-6">Enquire</p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>Start a conversation.</h1>
          <p className="font-body text-body text-foreground/80 leading-relaxed max-w-md">Tell us where your player is — in the sport and in school — and we’ll tell you how the bridge works. We read every message.</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="f-name" className="font-data text-[11px] tracking-[0.14em] uppercase text-foreground/50">Name</label>
              <input id="f-name" className={field} value={form.name} onChange={set("name")} placeholder="Parent or player" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="f-age" className="font-data text-[11px] tracking-[0.14em] uppercase text-foreground/50">Player age</label>
              <input id="f-age" className={field} value={form.age} onChange={set("age")} placeholder="e.g. 14" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="f-email" className="font-data text-[11px] tracking-[0.14em] uppercase text-foreground/50">Email</label>
            <input id="f-email" type="email" className={field} value={form.email} onChange={set("email")} placeholder="you@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="f-msg" className="font-data text-[11px] tracking-[0.14em] uppercase text-foreground/50">Where are they now?</label>
            <textarea id="f-msg" rows={4} className={field + " resize-y"} value={form.message} onChange={set("message")} placeholder="Current level, current school, what you're hoping for…" />
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-2">
            <button type="button" onClick={sendEnquiry} className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">Send enquiry</button>
            <a href={`mailto:${ENQUIRY_EMAIL}`} className="font-body text-[14px] text-foreground/60 hover:text-accent">or email {ENQUIRY_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
