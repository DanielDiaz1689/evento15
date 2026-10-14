/*
  ══════════════════════════════════════════════════
  CONTENIDO DE EVENTO15 — edita este archivo.
  Textos, fotos, videos y datos de contacto en un solo lugar.
  ══════════════════════════════════════════════════
*/

export const negocio = {
  nombre: 'CARLOS Y PAOLA',
  // ⚠️ Número de Daniel MIENTRAS el cliente confirma el suyo.
  // Cuando lo dé: 57 + celular, SIN "+", SIN espacios.
  whatsapp: '573136676011',
  mensajeInicial:
    'Hola, vi la página de Carlos y Paola y quiero información para organizar mi evento. 💍',
  // ⚠️ Correo que RECIBE las solicitudes de cita (cámbialo por el del dueño).
  // La primera vez que alguien envíe el formulario, FormSubmit mandará un
  // correo de activación a esta dirección: hay que abrirlo y confirmar.
  correoCitas: 'daniel2001barragan@gmail.com',
}

export function enlaceWhatsApp(mensaje = negocio.mensajeInicial) {
  return `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const hero = {
  etiqueta: 'Wedding & Event Planners',
  titulo: 'El día más importante de tu vida,',
  tituloCursiva: 'planeado a la perfección',
  descripcion:
    'Diseñamos y coordinamos tu boda de principio a fin, para que tú solo te ocupes de vivirla. Cada detalle cuenta tu historia.',
  imagen: '/galeria/hero.jpg',
}

export const servicios = [
  {
    imagen: '/galeria/ramo-novia.jpg',
    titulo: 'Planificación integral',
    descripcion:
      'Nos encargamos de todo: concepto, proveedores, presupuesto y cronograma. Tú vives tu día especial sin preocupaciones, nosotros cuidamos cada detalle.',
  },
  {
    imagen: '/galeria/mesa-gala.jpg',
    titulo: 'Coordinación de evento',
    descripcion:
      '¿Ya tienes claro lo que quieres? Nos aseguramos de que todo salga según lo planeado, desde la llegada de los invitados hasta el último brindis.',
  },
  {
    imagen: '/galeria/anillos-manos.jpg',
    titulo: 'Asesoramiento personalizado',
    descripcion:
      'Te acompañamos en cada decisión con nuestra experiencia: vestidos, locaciones, decoración y protocolo, para que elijas con total confianza.',
  },
]

export const eventosPrivados = [
  {
    imagen: '/galeria/boda-beso.jpg',
    titulo: 'Bodas',
    descripcion:
      'Cada boda es única: un reflejo de la personalidad y el amor de cada pareja. Creamos momentos inolvidables y llenamos de magia ese día tan especial.',
  },
  {
    imagen: '/galeria/quince.jpg',
    titulo: '15 años',
    descripcion:
      'Una fiesta que refleja los sueños y el estilo de quien celebra este gran paso. Clásica, moderna o temática: creamos recuerdos para toda la vida.',
  },
  {
    imagen: '/galeria/catering.jpg',
    titulo: 'Catering y experiencias gastronómicas',
    descripcion:
      'Menús que se ajustan a tus invitados y crean momentos gastronómicos memorables. Porque la comida también es parte de la experiencia.',
  },
]

export const eventosEmpresa = [
  {
    imagen: '/galeria/conferencia.jpg',
    titulo: 'Conferencias',
    descripcion:
      'Planificación completa: objetivos, ponentes, agenda y logística. Eventos relevantes e innovadores que cumplen las expectativas de todos los asistentes.',
  },
  {
    imagen: '/galeria/carpa-noche.jpg',
    titulo: 'Fiestas de empresa',
    descripcion:
      'Temáticas de cuento, vintage, hollywoodense o de tu personaje favorito: lo hacemos realidad, desde las invitaciones hasta el último detalle decorativo.',
  },
  {
    imagen: '/galeria/fiesta-luces.jpg',
    titulo: 'Producción audiovisual',
    descripcion:
      'Sonido, pantallas, proyecciones y grabación profesional para que tu evento tenga el respaldo tecnológico de una experiencia impecable.',
  },
]

/* Galería del efecto scroll: las imágenes se amplían a pantalla completa */
export const galeria = [
  { src: '/galeria/boda-beso.jpg', titulo: 'El sí de sus vidas' },
  { src: '/galeria/hero.jpg', titulo: 'Atardeceres dorados' },
  { src: '/galeria/mesa-gala.jpg', titulo: 'Cada mesa, una obra' },
  { src: '/galeria/carpa-noche.jpg', titulo: 'Noches que brillan' },
  { src: '/galeria/fiesta-luces.jpg', titulo: 'La celebración' },
]

export const videos = [
  { src: '/videos/boda-40601.mp4', titulo: 'Momentos reales' },
  { src: '/videos/boda-5218.mp4', titulo: 'El gran día' },
  { src: '/videos/boda-5224.mp4', titulo: 'Detalles con alma' },
  { src: '/videos/boda-40627.mp4', titulo: 'Celebrar el amor' },
]

export const nosotros = {
  titulo: 'Somos Carlos y Paola',
  parrafos: [
    'Un equipo con más de 10 años de experiencia en la planificación y organización de bodas y eventos. Nuestro enfoque es personalizar cada celebración, cuidando cada detalle para que vivas tu día especial sin preocupaciones.',
    'Creemos que cada evento cuenta una historia. La nuestra es hacer que la tuya sea inolvidable.',
  ],
  imagen: '/galeria/recepcion.jpg',
  estadisticas: [
    { numero: '+150', etiqueta: 'Eventos realizados' },
    { numero: '10', etiqueta: 'Años de experiencia' },
    { numero: '100%', etiqueta: 'Parejas felices' },
  ],
}

export const testimonios = [
  {
    texto:
      'Nos entregamos por completo a su equipo y fue la mejor decisión. Vivimos nuestra boda como invitados: sin estrés y llenos de magia.',
    autor: 'Laura & Andrés',
    evento: 'Boda · Pereira',
  },
  {
    texto:
      'Los 15 de mi hija fueron exactamente como los soñó. Cada detalle, cada sorpresa, todo impecable de principio a fin.',
    autor: 'Claudia M.',
    evento: 'Quinceañero · Armenia',
  },
  {
    texto:
      'Organizaron nuestra conferencia anual para 300 personas y todo fluyó perfecto. Profesionalismo de principio a fin.',
    autor: 'Grupo Andino',
    evento: 'Evento corporativo · Manizales',
  },
]

export const tiposDeEvento = [
  'Boda',
  '15 años',
  'Evento corporativo',
  'Catering',
  'Otro',
]

export const secciones = [
  { id: 'inicio', nombre: 'Inicio' },
  { id: 'servicios', nombre: 'Servicios' },
  { id: 'nosotros', nombre: 'Nosotros' },
  { id: 'galeria', nombre: 'Galería' },
  { id: 'citas', nombre: 'Agenda tu cita' },
  { id: 'contacto', nombre: 'Contacto' },
]
