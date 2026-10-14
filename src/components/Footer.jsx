import { negocio, enlaceWhatsApp, secciones } from '../data/evento15'

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-linea bg-carbon/70 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-serif text-5xl italic text-dorado mb-1">CP</p>
        <p className="font-serif text-xl tracking-[0.3em] text-dorado">{negocio.nombre}</p>
        <div className="linea-dorada" />
        <p className="mx-auto mb-8 max-w-md text-sm text-humo">
          Bodas, 15 años y eventos corporativos. Hagamos de tu celebración un
          recuerdo inolvidable.
        </p>

        <ul className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {secciones.map(({ id, nombre }) => (
            <li key={id}>
              <a href={`#${id}`} className="text-xs uppercase tracking-[0.2em] text-humo transition-colors hover:text-dorado">
                {nombre}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={enlaceWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-dorado px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-noche transition-colors hover:bg-dorado-claro"
        >
          Solicita una consulta
        </a>

        <p className="mt-12 text-xs text-humo/60">
          © {new Date().getFullYear()} {negocio.nombre} · Sitio desarrollado por{' '}
          <a
            href="https://danieldiaz-dev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dorado/80 hover:underline"
          >
            Daniel Díaz
          </a>
        </p>
      </div>
    </footer>
  )
}
