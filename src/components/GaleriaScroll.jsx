import { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import { galeria } from '../data/evento15'

/*
  GALERÍA CINEMATOGRÁFICA ✨ (el efecto que pediste)

  Cómo funciona:
  - La sección mide varias pantallas de alto (n imágenes × 100vh).
  - Dentro hay un marco "sticky" que se queda pegado mientras scrolleas.
  - useScroll mide cuánto has avanzado dentro de la sección (0 → 1).
  - Con ese progreso: el marco CRECE de 60% a pantalla completa,
    y cada tramo del scroll muestra una imagen distinta (crossfade).
*/
export default function GaleriaScroll() {
  const ref = useRef(null)
  const [indice, setIndice] = useState(0)
  const n = galeria.length

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Cambia de imagen según el tramo de scroll en el que vas
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setIndice(Math.min(n - 1, Math.max(0, Math.floor(v * n))))
  })

  // El marco se amplía hasta ocupar toda la pantalla
  const escala = useTransform(scrollYProgress, [0, 0.3], [0.6, 1])
  const radio = useTransform(scrollYProgress, [0, 0.3], [28, 0])

  return (
    <section id="galeria" ref={ref} className="relative" style={{ height: `${n * 90 + 60}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: escala, borderRadius: radio }}
          className="relative h-full w-full overflow-hidden"
        >
          {/* Crossfade entre imágenes */}
          <AnimatePresence mode="popLayout">
            <motion.img
              key={indice}
              src={galeria[indice].src}
              alt={galeria[indice].titulo}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-noche/80 via-transparent to-noche/30" />

          {/* Título de la foto + contador */}
          <div className="absolute bottom-10 left-0 right-0 px-8 text-center">
            <p className="titulo-espaciado mb-2 text-[11px] text-dorado-claro">
              Galería EVENTO15
            </p>
            <h3 className="font-serif text-3xl italic text-marfil md:text-5xl">
              {galeria[indice].titulo}
            </h3>
            <p className="mt-3 text-xs tracking-[0.3em] text-humo">
              {indice + 1} / {n}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
