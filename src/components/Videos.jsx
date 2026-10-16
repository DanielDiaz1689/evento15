import { motion } from 'framer-motion'
import { videos } from '../data/evento15'

export default function Videos() {
  const [principal, ...resto] = videos

  return (
    <section id="videos" className="relative">
      {/* Video principal — full width, inmersivo */}
      <div className="relative min-h-[70vh] md:min-h-[85vh] w-full overflow-hidden">
        <video
          src={principal.src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/30 to-noche/50" />

        {/* Contenido sobre el video */}
        <div className="relative z-10 flex min-h-[70vh] md:min-h-[85vh] flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="titulo-espaciado mb-4 text-xs text-dorado-claro md:text-sm"
          >
            Nuestros films
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-4xl italic text-marfil md:text-6xl lg:text-7xl"
          >
            {principal.titulo}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 h-px w-24 bg-dorado/60"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-md text-sm text-humo/80 md:text-base"
          >
            Momentos reales de eventos que hemos hecho realidad.
          </motion.p>
        </div>
      </div>

      {/* Videos secundarios */}
      {resto.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resto.map((video, i) => (
              <motion.figure
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group overflow-hidden rounded-sm border border-linea"
              >
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
              </motion.figure>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
