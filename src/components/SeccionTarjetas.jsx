import Reveal from './Reveal'

/*
  Sección reutilizable de 3 tarjetas con foto circular y aro dorado
  (el estilo de la página de referencia). Se usa para Servicios,
  Eventos privados y Eventos de empresa.
*/
export default function SeccionTarjetas({ id, titulo, items }) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <h2 className="titulo-espaciado text-lg text-dorado md:text-2xl">{titulo}</h2>
          <div className="linea-dorada" />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 0.12}>
              <article className="group h-full bg-carbon px-8 py-12 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(201,164,92,0.25)]">
                <div className="aro-dorado mx-auto mb-9 w-fit">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    loading="lazy"
                    className="h-44 w-44 rounded-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-5 font-serif text-2xl text-dorado-claro">
                  {item.titulo}
                </h3>
                <p className="text-[15px] leading-relaxed text-humo">
                  {item.descripcion}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
