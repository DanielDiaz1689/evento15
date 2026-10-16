import { motion } from 'framer-motion'
import { hero, enlaceWhatsApp } from '../data/evento15'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      {hero.video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.imagen}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.imagen})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-noche/70 via-noche/55 to-noche" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="titulo-espaciado mb-6 text-xs text-dorado-claro md:text-sm"
        >
          {hero.etiqueta}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl leading-tight text-marfil md:text-7xl"
        >
          {hero.titulo}
          <br />
          <span className="italic text-dorado">{hero.tituloCursiva}</span>
        </motion.h1>

        {/* Logo CP badge */}
        <motion.img
          src="/galeria/cp-logo.png"
          alt="Carlos y Paola"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto my-6 h-32 w-auto md:h-44"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={enlaceWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-dorado px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-noche transition-all hover:-translate-y-0.5 hover:bg-dorado-claro"
          >
            💬 Escríbenos por WhatsApp
          </a>
          <a
            href="#citas"
            className="rounded-full border border-marfil/40 px-8 py-4 text-sm uppercase tracking-[0.15em] text-marfil transition-all hover:-translate-y-0.5 hover:border-dorado hover:text-dorado"
          >
            Solicita una consulta
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-14 text-[11px] uppercase tracking-[0.3em] text-humo"
        >
          Bodas · 15 años · Eventos corporativos
        </motion.p>
      </div>
    </section>
  )
}
