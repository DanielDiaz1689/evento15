/*
  ══════════════════════════════════════════════════
  CONTENIDO DE CARLOS Y PAOLA — edita este archivo.
  Textos, fotos, videos y datos de contacto en un solo lugar.
  ══════════════════════════════════════════════════
*/

export const negocio = {
  nombre: 'CARLOS Y PAOLA',
  whatsapp: '573208078528',
  mensajeInicial:
    'Hola, vi la página de Carlos y Paola y quiero información para organizar mi evento. 💍',
  correoCitas: 'comercial@carlosypaola.com',
  telefono2: '+57 320 469 79 05',
  email: 'comercial@carlosypaola.com',
  direccion: 'Calle 235 # 80-03, Arboledas de Guaymaral, Bogotá',
  instagram: 'https://www.instagram.com/carlosypaolawedding.planner/',
  facebook: 'https://www.facebook.com/CarlosPaolaEvento15',
}

export function enlaceWhatsApp(mensaje = negocio.mensajeInicial) {
  return `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const hero = {
  etiqueta: 'Wedding & Event Planners',
  titulo: 'Hacemos Bodas',
  tituloCursiva: 'con Amor',
  descripcion:
    'Somos Carlos y Paola, una pareja con más de 10 años de experiencia en la planificación y organización de bodas. Personalizamos cada evento para que vivas tu día especial sin preocupaciones.',
  imagen: '/galeria/cp-hero.jpg',
  video: '/videos/cp-hero-video.mp4',
}

export const servicios = [
  {
    imagen: '/galeria/cp-planificacion.jpg',
    titulo: 'Planificación integral',
    descripcion:
      'Somos Carlos y Paola, una pareja con más de 10 años de experiencia en la planificación y organización de bodas. Nuestro enfoque es personalizar cada evento, cuidando cada detalle para que vivas tu día especial sin preocupaciones.',
  },
  {
    imagen: '/galeria/cp-coordinacion.jpg',
    titulo: 'Coordinación de evento',
    descripcion:
      'Si ya tienes claro lo que quieres pero necesitas ayuda con la coordinación, ¡estamos aquí para ayudarte! Nos aseguramos de que todo salga según lo planeado, desde la llegada de los invitados hasta el último brindis.',
  },
  {
    imagen: '/galeria/cp-asesoramiento.jpg',
    titulo: 'Asesoramiento personalizado',
    descripcion:
      'Con nuestra amplia experiencia, te brindamos asesoramiento personalizado para que cada decisión que tomes esté respaldada por nuestro conocimiento y expertise.',
  },
]

export const eventosPrivados = [
  {
    imagen: '/galeria/cp-bodas.jpg',
    titulo: 'Bodas',
    descripcion:
      'En Carlos y Paola Wedding Planners creemos que cada boda es única, un reflejo de la personalidad y el amor de cada pareja. Con años de experiencia en la organización de eventos, nos apasiona crear momentos inolvidables y llenar de magia ese día tan especial.',
  },
  {
    imagen: '/galeria/cp-quince.jpg',
    titulo: '15 años',
    descripcion:
      'Cada fiesta de 15 años que organizamos es única, reflejando los sueños, personalidad y estilo de la joven que celebra este gran paso en su vida. Ya sea un evento clásico, moderno o temático, nuestro compromiso es crear recuerdos inolvidables para todos los asistentes.',
  },
  {
    imagen: '/galeria/cp-catering.jpg',
    titulo: 'Catering y experiencias gastronómicas',
    descripcion:
      'Proveemos opciones de catering que se ajusten a las necesidades de tus asistentes, creando momentos gastronómicos que complementen la experiencia del evento. Porque la comida también forma parte de la experiencia.',
  },
]

export const eventosEmpresa = [
  {
    imagen: '/galeria/conferencia.jpg',
    titulo: 'Conferencias',
    descripcion:
      'Nos encargamos de la planificación completa, desde la definición de los objetivos del evento hasta la selección de los ponentes y el diseño de la agenda. Te ayudamos a crear un evento que sea relevante, innovador y que cumpla con las expectativas de todos los asistentes.',
  },
  {
    imagen: '/galeria/carpa-noche.jpg',
    titulo: 'Fiestas de empresa',
    descripcion:
      'Si deseas una fiesta con un tema especial, como una fiesta de cuento de hadas, vintage, hollywoodense o temática de algún personaje, ¡lo podemos hacer realidad! Nos encargamos de todos los detalles, desde las invitaciones hasta el último accesorio decorativo.',
  },
  {
    imagen: '/galeria/cp-produccion.jpg',
    titulo: 'Producción audiovisual',
    descripcion:
      'Nos aseguramos de que el evento tenga el apoyo tecnológico necesario para una experiencia fluida: equipos de sonido, pantallas, proyecciones, grabaciones y más.',
  },
]

/* Galería del efecto scroll: imágenes reales de Carlos y Paola */
export const galeria = [
  { src: '/galeria/cp-gal-01.jpg', titulo: 'Momentos únicos' },
  { src: '/galeria/cp-gal-02.jpg', titulo: 'Detalles con amor' },
  { src: '/galeria/cp-gal-03.jpg', titulo: 'El gran día' },
  { src: '/galeria/cp-gal-04.jpg', titulo: 'Celebraciones mágicas' },
  { src: '/galeria/cp-gal-05.jpg', titulo: 'Elegancia y estilo' },
  { src: '/galeria/cp-gal-06.jpg', titulo: 'Recuerdos eternos' },
  { src: '/galeria/cp-gal-07.jpg', titulo: 'Amor en cada detalle' },
  { src: '/galeria/cp-gal-08.jpg', titulo: 'Tu historia, nuestra pasión' },
]

export const videos = [
  { src: '/videos/cp-hero-video.mp4', titulo: 'Hacemos Bodas con Amor' },
]

export const nosotros = {
  titulo: 'Somos Carlos y Paola',
  parrafos: [
    'Una pareja con más de 10 años de experiencia en la planificación y organización de bodas. Nuestro enfoque es personalizar cada evento, cuidando cada detalle para que vivas tu día especial sin preocupaciones.',
    'Una Boda se vive 3 veces: Al planearla, Al celebrarla, Y al recordarla. Desde el primer momento en que comienzas a planear tu boda, hasta el último recuerdo que guardas de ese día tan significativo, estamos aquí para acompañarte en cada paso del camino.',
  ],
  imagen: '/galeria/cp-nosotros.jpg',
  estadisticas: [
    { numero: '+350', etiqueta: 'Eventos realizados' },
    { numero: '10', etiqueta: 'Años de experiencia' },
    { numero: '100%', etiqueta: 'Parejas felices' },
  ],
}

export const testimonios = [
  {
    texto:
      'Un equipo comprometido que supo captar nuestras ideas y plasmarlas en cada momento de nuestra boda.',
    autor: 'Carmela & Martín',
    evento: 'Boda · Bogotá',
  },
  {
    texto:
      'Profesionalismo y dedicación en cada detalle, lograron que nuestro día fuese mágico e inolvidable.',
    autor: 'María & Tomás',
    evento: 'Boda · Bogotá',
  },
  {
    texto:
      'Gracias por hacer de nuestro día algo único, su pasión por lo que hacen se refleja en cada detalle.',
    autor: 'Natalia & José',
    evento: 'Boda · Bogotá',
  },
  {
    texto:
      'Su asesoría nos brindó confianza y tranquilidad, superaron nuestras expectativas.',
    autor: 'Carmela & María',
    evento: 'Boda · Bogotá',
  },
  {
    texto:
      'Profesionales con un toque personal que convirtieron nuestro sueño en una realidad maravillosa.',
    autor: 'Ximena & Simón',
    evento: 'Boda · Bogotá',
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
  { id: 'citas', nombre: 'Contacto' },
]
