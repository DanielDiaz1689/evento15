import { useEffect, useState } from 'react'
import { negocio, secciones } from '../data/evento15'

/*
  Menú superior: transparente sobre el hero y sólido al hacer scroll.
  En móvil se convierte en menú desplegable.
*/
export default function Navbar() {
  const [solido, setSolido] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const alScroll = () => setSolido(window.scrollY > 40)
    window.addEventListener('scroll', alScroll)
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solido ? 'bg-noche/90 backdrop-blur-md border-b border-linea' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-serif text-2xl tracking-[0.25em] text-dorado">
          {negocio.nombre}
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {secciones.map(({ id, nombre }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-[13px] uppercase tracking-[0.18em] transition-colors ${
                  id === 'citas'
                    ? 'rounded-full border border-dorado/60 px-5 py-2.5 text-dorado hover:bg-dorado hover:text-noche'
                    : 'text-humo hover:text-dorado-claro'
                }`}
              >
                {nombre}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setAbierto(!abierto)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Abrir menú"
        >
          <span className={`h-px w-7 bg-dorado transition-transform ${abierto ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`h-px w-7 bg-dorado transition-opacity ${abierto ? 'opacity-0' : ''}`} />
          <span className={`h-px w-7 bg-dorado transition-transform ${abierto ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </nav>

      {abierto && (
        <ul className="flex flex-col gap-5 border-t border-linea bg-noche px-6 py-8 lg:hidden">
          {secciones.map(({ id, nombre }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setAbierto(false)}
                className="text-sm uppercase tracking-[0.18em] text-humo hover:text-dorado"
              >
                {nombre}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
