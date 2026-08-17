// HOME — La red internacional
import { Link } from 'react-router-dom'
export default function BridgeSection() {
  return (
    <section id="red" className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-end">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">La red</p>
          <h2 className="font-heading text-section text-foreground leading-tight">México, España, Estados Unidos.</h2>
        </div>
        <div className="flex flex-col gap-7">
          <p className="font-body text-body text-foreground/80 leading-relaxed">
            No es un campamento aislado ni una temporada suelta. Es un sistema con presencia en los tres países que importan para la carrera de tu jugador: evaluación y salida en México, entrenamiento e infraestructura real en España, y un camino de vuelta hacia becas y programas universitarios en Estados Unidos.
          </p>
          <div><Link to="/contacto" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">Habla con nosotros</Link></div>
        </div>
      </div>
    </section>
  )
}
