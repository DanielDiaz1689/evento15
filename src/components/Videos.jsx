import Reveal from './Reveal'
import { videos } from '../data/evento15'

/*
  Films de eventos: el primero como pieza principal grande,
  el resto en fila. Se reproducen solos, en silencio y en bucle
  (estilo cinematográfico de fondo).
*/
export default function Videos() {
  const [principal, ...resto] = videos

  return (
    <section id="videos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <h2 className="titulo-espaciado text-lg text-dorado md:text-2xl">
            Nuestros films
          </h2>
          <div className="linea-dorada" />
          <p className="mx-auto mb-14 max-w-lg text-humo">
            Momentos reales de eventos que hemos hecho realidad.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-sm border border-linea">
            <video
              src={principal.src}
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {resto.map((video, i) => (
            <Reveal key={video.src} delay={i * 0.12}>
              <figure className="group overflow-hidden rounded-sm border border-linea">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="bg-carbon px-4 py-3 text-center font-serif text-lg italic text-dorado-claro">
                  {video.titulo}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
