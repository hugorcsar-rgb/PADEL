// PRIVACY page — replace the placeholder text with your real notice.
export default function Privacy() {
  return (
    <section className="w-full pt-40 pb-24 md:pt-48 premium-spacing">
      <div className="max-w-[760px] mx-auto">
        <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">Legal</p>
        <h1 className="font-heading text-section leading-tight mb-8">Aviso de Privacidad</h1>
        <div className="font-body text-body text-foreground/75 leading-relaxed space-y-5">
          <p>Este es un texto de marcador de posición. Reemplázalo con tu aviso de privacidad real antes de lanzar el sitio — debe cubrir qué datos personales recopilas (incluyendo datos de menores de edad), para qué, cómo se almacenan, con quién se comparten, y cómo pueden las familias solicitar acceso o eliminación. Como manejan datos de menores en México, España y Estados Unidos, es necesario que un abogado revise este aviso contra el RGPD (GDPR europeo), la LFPDPPP mexicana y la normativa aplicable en EEUU.</p>
          <p>Contacto: <a href="mailto:hello@sar.com" className="text-accent hover:underline">hello@sar.com</a>.</p>
        </div>
      </div>
    </section>
  )
}
