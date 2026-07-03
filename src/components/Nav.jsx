import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ─── BRAND — edit the wordmark and subtitle ────────────────────────────────
const BRAND = { wordmark: "PADEL BRIDGE", subtitle: "Academy & School" }

// ─── LINKS — add, remove, or rename nav items ──────────────────────────────
const LINKS = [
  { to: '/',           label: 'Home'       },
  { to: '/academy',    label: 'Academy'    },
  { to: '/camps',      label: 'Camps'      },
  { to: '/method',     label: 'Method'     },
  { to: '/facilities', label: 'Campus'     },
]

// ─── CTA — the greige button on the far right ──────────────────────────────
const CTA = { to: '/inquire', label: 'Enquire' }

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-foreground/10' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-[24px] md:px-[55px] py-5">
        <Link to="/" className="font-heading text-2xl md:text-3xl tracking-wordmark text-foreground">
          {BRAND.wordmark}
          <span className="ml-3 font-data text-[10px] text-stone/70 tracking-[0.3em] uppercase align-middle">{BRAND.subtitle}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 font-data text-[13px] tracking-[0.3em] uppercase transition-colors duration-300 after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'text-foreground after:scale-x-100' : 'text-accent/85 hover:text-foreground after:scale-x-0'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to={CTA.to} className="ml-3 inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">
            {CTA.label}
          </Link>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden text-foreground" aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (<><line x1="6" y1="6" x2="22" y2="22" /><line x1="22" y1="6" x2="6" y2="22" /></>)
                  : (<><line x1="4" y1="9" x2="24" y2="9" /><line x1="4" y1="19" x2="24" y2="19" /></>)}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-foreground/10">
          <div className="px-[24px] py-4 flex flex-col">
            {LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => `py-3 font-data text-[13px] font-medium tracking-[0.3em] uppercase ${isActive ? 'text-accent' : 'text-foreground'}`}>
                {label}
              </NavLink>
            ))}
            <Link to={CTA.to} onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground font-data text-[12px] font-medium tracking-[0.22em] uppercase">
              {CTA.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
