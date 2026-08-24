import { useState } from 'react'
import Reveal from './Reveal'
import { negocio, tiposDeEvento, enlaceWhatsApp } from '../data/evento15'

/*
  AGENDAMIENTO DE CITAS 📅
  Usa el servicio gratuito FormSubmit (formsubmit.co), que:
  1. Envía la solicitud al correo del dueño (negocio.correoCitas)
  2. Envía una CONFIRMACIÓN AUTOMÁTICA al correo del cliente
     (el campo _autoresponse de abajo)
  Sin servidor propio, funciona desde una página estática.

  ⚠️ Primera vez: FormSubmit envía un correo de activación a
  negocio.correoCitas — hay que abrirlo y confirmar una sola vez.
*/

const estiloCampo =
  'w-full border border-linea bg-noche px-4 py-3.5 text-sm text-marfil placeholder-humo/50 outline-none transition-colors focus:border-dorado'

export default function Citas() {
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    whatsapp: '',
    tipo: tiposDeEvento[0],
    fecha: '',
    mensaje: '',
  })
  const [estado, setEstado] = useState('inicial') // inicial | enviando | exito | error

  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value })

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const respuesta = await fetch(`https://formsubmit.co/ajax/${negocio.correoCitas}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nombre: datos.nombre,
          Correo: datos.correo,
          WhatsApp: datos.whatsapp,
          'Tipo de evento': datos.tipo,
          'Fecha tentativa': datos.fecha,
          Mensaje: datos.mensaje,
          _subject: `💍 Nueva solicitud de cita — ${datos.nombre} (${datos.tipo})`,
          _template: 'table',
          _autoresponse: `Hola ${datos.nombre}, ¡gracias por contactar a EVENTO15! Recibimos tu solicitud de cita para tu evento (${datos.tipo}). Muy pronto nos comunicaremos contigo para confirmar el día y la hora de la reunión con nuestros wedding planners. — Equipo EVENTO15`,
          _captcha: 'false',
        }),
      })
      setEstado(respuesta.ok ? 'exito' : 'error')
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'exito') {
    return (
      <section id="citas" className="py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="mb-6 font-serif text-6xl text-dorado">✦</p>
          <h2 className="mb-4 font-serif text-4xl text-marfil">¡Cita solicitada!</h2>
          <p className="mb-3 text-humo">
            Recibimos tu solicitud, {datos.nombre}. Te enviamos un correo de
            confirmación a <span className="text-dorado-claro">{datos.correo}</span> y
            muy pronto te contactaremos para confirmar la reunión.
          </p>
          <a
            href={enlaceWhatsApp(`Hola, soy ${datos.nombre}, acabo de agendar una cita desde la página 😊`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-dorado/60 px-7 py-3 text-sm uppercase tracking-[0.15em] text-dorado transition-colors hover:bg-dorado hover:text-noche"
          >
            ¿Prisa? Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="citas" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="titulo-espaciado text-lg text-dorado md:text-2xl">
            Agenda tu cita
          </h2>
          <div className="linea-dorada" />
          <p className="mx-auto mb-12 max-w-lg text-humo">
            Cuéntanos sobre tu evento y reserva una reunión con nuestros wedding
            planners. Te confirmaremos por correo electrónico.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={enviar} className="grid gap-5 border border-linea bg-carbon p-8 sm:grid-cols-2 md:p-10">
            <input required name="nombre" value={datos.nombre} onChange={cambiar} placeholder="Tu nombre *" className={estiloCampo} />
            <input required type="email" name="correo" value={datos.correo} onChange={cambiar} placeholder="Tu correo electrónico *" className={estiloCampo} />
            <input name="whatsapp" value={datos.whatsapp} onChange={cambiar} placeholder="Tu WhatsApp" className={estiloCampo} />
            <select name="tipo" value={datos.tipo} onChange={cambiar} className={estiloCampo}>
              {tiposDeEvento.map((tipo) => (
                <option key={tipo} value={tipo} className="bg-noche">{tipo}</option>
              ))}
            </select>
            <label className="sm:col-span-2 text-xs uppercase tracking-widest text-humo">
              Fecha tentativa del evento
              <input type="date" name="fecha" value={datos.fecha} onChange={cambiar} className={`${estiloCampo} mt-2`} />
            </label>
            <textarea
              name="mensaje"
              value={datos.mensaje}
              onChange={cambiar}
              rows={4}
              placeholder="Cuéntanos cómo sueñas tu evento..."
              className={`${estiloCampo} resize-y sm:col-span-2`}
            />

            <button
              type="submit"
              disabled={estado === 'enviando'}
              className="sm:col-span-2 rounded-full bg-dorado py-4 text-sm font-medium uppercase tracking-[0.2em] text-noche transition-all hover:bg-dorado-claro disabled:opacity-60"
            >
              {estado === 'enviando' ? 'Enviando...' : 'Solicitar cita ✦'}
            </button>

            {estado === 'error' && (
              <p className="sm:col-span-2 text-center text-sm text-red-400">
                No pudimos enviar la solicitud. Inténtalo de nuevo o{' '}
                <a href={enlaceWhatsApp()} target="_blank" rel="noopener noreferrer" className="underline">
                  escríbenos por WhatsApp
                </a>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
