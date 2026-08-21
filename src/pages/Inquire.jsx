// CONTACTO page. The form opens the visitor's email app pre-filled (no backend).
// Change the address in ENQUIRY_EMAIL.
import { useState } from 'react'

const ENQUIRY_EMAIL = "hello@sar.com"

export default function Inquire() {
  const [form, setForm] = useState({ name: "", email: "", age: "", sport: "", message: "" })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const sendEnquiry = () => {
    const subject = `Contacto — ${form.name || "jugador"}${form.age ? ` (${form.age} años)` : ""}`
    const body = [`Nombre: ${form.name}`, `Correo: ${form.email}`, `Edad del jugador: ${form.age}`, `Deporte de interés: ${form.sport}`, "", form.message].join("\n")
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const field = "font-body text-[15px] text-foreground bg-transparent border-0 border-b border-foreground/20 py-2.5 focus:outline-none focus:border-flood placeholder:text-foreground/35"

  return (
    <section className="relative w-full pt-40 pb-24 md:pt-48 px-[24px] md:px-[89px]">
      <div className="absolute inset-0 z-0 floodlit-page" />
      <div className="relative z-10 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-flood uppercase mb-6">Contacto</p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>Empecemos la conversación.</h1>
          <p className="font-body text-body text-foreground/80 leading-relaxed max-w-md">Cuéntanos en dónde está tu jugador — en el deporte y en la escuela
