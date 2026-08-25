import Reveal from './Reveal'

/*
  Tarjetas editoriales (estilo revista de lujo):
  - La foto ocupa TODA la tarjeta (a sangre completa)
  - Número de serie 01 / 02 / 03 arriba
  - Título serif y descripción sobre un degradado oscuro
  - Al pasar el mouse: la foto hace zoom lento y aparece un borde dorado
*/
export default function SeccionTarjetas({ id, titulo, items }) {
  return (
    <section id={id} className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <h2 className="titulo-espaciado text-lg text-dorado md:text-2xl">{titulo}</h2>
          <div className="linea-dorada" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 0.12}>
              <article className="group relative h-[480px] overflow-hidden rounded-sm">
                {/* Foto a sangre completa con zoom lento al hover */}
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* Degradado para que el texto siempre se lea */}
                <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/35 to-transparent transition-opacity duration-500 group-hover:via-noche/20" />

                {/* Borde dorado que aparece al hover */}
                <div className="absolute inset-3 border border-dorado/0 transition-all duration-500 group-hover:border-dorado/60" />

                {/* Número de serie */}
                <span className="absolute left-6 top-5 font-serif text-5xl italic text-dorado-claro/80">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Contenido sobre la foto */}
                <div className="absolute inset-x-0 bottom-0 p-7 pb-8">
                  <div className="mb-3 h-px w-10 bg-dorado transition-all duration-500 group-hover:w-20" />
                  <h3 className="mb-3 font-serif text-3xl leading-tight text-marfil">
                    {item.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-marfil/75">
                    {item.descripcion}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
