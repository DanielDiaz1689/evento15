import Reveal from './Reveal'
import { nosotros, testimonios } from '../data/evento15'

export default function Nosotros() {
  return (
    <section id="nosotros" className="border-y border-linea bg-carbon/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="aro-dorado w-fit" style={{ borderRadius: '2px', padding: '10px' }}>
              <img
                src={nosotros.imagen}
                alt="Equipo EVENTO15"
                loading="lazy"
                className="max-h-[460px] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="titulo-espaciado mb-2 text-xs text-dorado">Nosotros</h2>
            <h3 className="mb-6 font-serif text-4xl text-marfil md:text-5xl">
              {nosotros.titulo}
            </h3>
            {nosotros.parrafos.map((parrafo, i) => (
              <p key={i} className="mb-4 leading-relaxed text-humo">
                {parrafo}
              </p>
            ))}

            <div className="mt-10 grid grid-cols-3 gap-6">
              {nosotros.estadisticas.map((stat) => (
                <div key={stat.etiqueta} className="border-l border-dorado/40 pl-4">
                  <p className="font-serif text-4xl text-dorado">{stat.numero}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-humo">
                    {stat.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Testimonios */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {testimonios.map((testimonio, i) => (
            <Reveal key={testimonio.autor} delay={i * 0.12}>
              <blockquote className="flex h-full flex-col justify-between border border-linea px-7 py-9 text-center">
                <p className="mb-6 font-serif text-lg italic leading-relaxed text-marfil/90">
                  “{testimonio.texto}”
                </p>
                <footer>
                  <p className="text-sm tracking-widest text-dorado">{testimonio.autor}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-humo">
                    {testimonio.evento}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
