/* =============================================================================
 *  CONTENIDO DEL SITIO (servicios, equipo, galería, espacios)
 *  Un solo lugar para editar textos, precios, nombres y fotos.
 * ========================================================================== */
import {
  AlarmClock,
  Baby,
  CalendarCheck,
  CalendarX,
  CreditCard,
  Crown,
  Droplets,
  Eye,
  Feather,
  Flower2,
  Gem,
  Hand,
  Palette,
  Scissors,
  Sparkles,
  Timer,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import fotoEzequiel from '@/assets/equipo/ezequiel.jpg';
import fotoPatri from '@/assets/equipo/patri.jpg';
import fotoNayla from '@/assets/equipo/nayla.jpg';
import fotoRuben from '@/assets/equipo/ruben.jpg';


/* -----------------------------------------------------------------------------
 * IMÁGENES
 * Son imágenes de muestra de alta calidad (placeholders).
 * ⚠️ REEMPLAZAR cada URL por las fotos reales del local y del equipo.
 * -------------------------------------------------------------------------- */
export const IMAGENES = {
  /**
   * HERO (foto grande de arriba).
   * ⚠️ REEMPLAZAR POR LA FOTO REAL DE LA FACHADA / ENTRADA DEL LOCAL.
   * Sugerencia: descargá la foto de la ficha del local en Google Maps
   * (o sacá una de frente, con la luz de la tarde) y pegá acá su URL.
   */
  hero: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/b7d69d5eb95a417f.webp',

  /** Salón de PLANTA BAJA (peluquería / barbería). ⚠️ REEMPLAZAR por foto real. */
  peluqueria: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/284660e2bb974fc7.webp',

  /** Sala del 1er PISO (beauty studio). ⚠️ REEMPLAZAR por foto real. */
  beauty: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/ac101d74630c4fd5.webp',

  /** Detalles de trabajos. ⚠️ REEMPLAZAR por fotos reales del local. */
  salon: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/b7d69d5eb95a417f.webp',
  corteFade: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/284660e2bb974fc7.webp',
  unas: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/7b113e73e6164a28.webp',

  /** Retratos del equipo. ⚠️ REEMPLAZAR por las fotos del equipo real. */
  retrato1: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/e683ac2bc94f4c60.webp',
  retrato2: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/e4c418e223ab4cc2.webp',
  retrato3: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/cb5ea3c80e1a4359.webp',
  retrato4: 'https://d38kszyerljeoa.cloudfront.net/posts/scb_e845f6e74f1ece2c0984592f/4083dc805618471a.webp',
};

/* -----------------------------------------------------------------------------
 * PRECIOS
 * Se muestra "Consultar" en todos los servicios.
 * ⚠️ PARA CARGAR PRECIOS: cambiá el campo `precio` de cada servicio
 *    (por ejemplo: precio: '$12.000').
 * -------------------------------------------------------------------------- */
export const PRECIO_POR_DEFECTO = 'Consultar';

export type Servicio = {
  nombre: string;
  descripcion: string;
  precio: string;
  icono: LucideIcon;
};

/* ---------------------------- PELUQUERÍA · PLANTA BAJA -------------------- */
export const SERVICIOS_PELUQUERIA: Servicio[] = [
  {
    nombre: 'Corte de cabello Hombre',
    descripcion: 'Corte a tijera o máquina, terminación prolija y peinado final.',
    precio: PRECIO_POR_DEFECTO,
    icono: Scissors,
  },
  {
    nombre: 'Corte de cabello Mujer',
    descripcion: 'Diagnóstico del cabello, corte a medida y terminación con brushing.',
    precio: PRECIO_POR_DEFECTO,
    icono: Waves,
  },
  {
    nombre: 'Corte y perfilado de cejas',
    descripcion: 'Diseño de cejas para hombre y mujer, según los rasgos de tu cara.',
    precio: PRECIO_POR_DEFECTO,
    icono: Eye,
  },
  {
    nombre: 'Barba y afeitado',
    descripcion: 'Perfilado de barba, toalla caliente y afeitado clásico a navaja.',
    precio: PRECIO_POR_DEFECTO,
    icono: Feather,
  },
  {
    nombre: 'Corte para niños',
    descripcion: 'Paciencia, juego y un corte rápido para que la pasen bien.',
    precio: PRECIO_POR_DEFECTO,
    icono: Baby,
  },
  {
    nombre: 'Lavado y peinado',
    descripcion: 'Lavado con masaje capilar, acondicionador y peinado a tu gusto.',
    precio: PRECIO_POR_DEFECTO,
    icono: Droplets,
  },
  {
    nombre: 'Color / tintura',
    descripcion: 'Cobertura de canas, tonos parejos y productos de primera línea.',
    precio: PRECIO_POR_DEFECTO,
    icono: Palette,
  },
];

/* --------------------------- BEAUTY STUDIO · 1er PISO --------------------- */
export const SERVICIOS_BEAUTY: Servicio[] = [
  {
    nombre: 'Teñido / coloración',
    descripcion: 'Color global, balayage y matices con cuidado de la fibra capilar.',
    precio: PRECIO_POR_DEFECTO,
    icono: Palette,
  },
  {
    nombre: 'Corte y peinados',
    descripcion: 'Cortes de tendencia, brushing, ondas y planchado.',
    precio: PRECIO_POR_DEFECTO,
    icono: Scissors,
  },
  {
    nombre: 'Pestañas',
    descripcion: 'Extensiones pelo por pelo y lifting con tintura para una mirada abierta.',
    precio: PRECIO_POR_DEFECTO,
    icono: Eye,
  },
  {
    nombre: 'Depilación',
    descripcion: 'Cera tibia y descartable para rostro, piernas, axilas y cavado.',
    precio: PRECIO_POR_DEFECTO,
    icono: Sparkles,
  },
  {
    nombre: 'Masajes',
    descripcion: 'Descontracturante, relajante y drenaje linfático en camilla.',
    precio: PRECIO_POR_DEFECTO,
    icono: Hand,
  },
  {
    nombre: 'Reiki',
    descripcion: 'Sesión de energía para bajar el estrés y volver a tu eje.',
    precio: PRECIO_POR_DEFECTO,
    icono: Flower2,
  },
  {
    nombre: 'Uñas',
    descripcion: 'Esculpidas, semipermanente, manicura y embellecimiento natural.',
    precio: PRECIO_POR_DEFECTO,
    icono: Gem,
  },
  {
    nombre: 'Peinados para eventos',
    descripcion: 'Casamientos, quinces y egresados: peinado y prueba previa.',
    precio: PRECIO_POR_DEFECTO,
    icono: Crown,
  },
];

/* -----------------------------------------------------------------------------
 * LOS DOS ESPACIOS
 * -------------------------------------------------------------------------- */
export type Espacio = {
  id: string;
  piso: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  /** Clase de Tailwind para encuadrar la foto dentro de la tarjeta. */
  encuadre: string;
  destacados: string[];
  ancla: string;
};

export const ESPACIOS: Espacio[] = [
  {
    id: 'peluqueria',
    piso: 'PLANTA BAJA',
    titulo: 'Nuevo Efecto | Peluquería',
    subtitulo: 'Barbería y peluquería unisex',
    descripcion:
      'El salón de abajo: cortes para hombre, mujer y chicos, barba a navaja, cejas y color. Entrás, te sentás y salís con la cabeza liviana.',
    imagen: IMAGENES.peluqueria,
    imagenAlt: 'Corte de cabello degradado recién terminado en la peluquería de planta baja',
    encuadre: 'object-[50%_28%]',
    destacados: ['Cortes unisex', 'Barba y afeitado', 'Color y tintura'],
    ancla: '#peluqueria',
  },
  {
    id: 'beauty',
    piso: '1er PISO',
    titulo: 'Nuevo Efecto | Beauty Studio',
    subtitulo: 'Estética y bienestar',
    descripcion:
      'Arriba, en silencio: pestañas, uñas, depilación, masajes y reiki. Un espacio pensado para que el turno también sea un descanso.',
    imagen: IMAGENES.beauty,
    imagenAlt: 'Sala de estética del primer piso con camilla, toallas y luz natural',
    encuadre: 'object-center',
    destacados: ['Pestañas y uñas', 'Masajes y reiki', 'Peinados para eventos'],
    ancla: '#beauty',
  },
];

/* -----------------------------------------------------------------------------
 * EQUIPO
 * ⚠️ REEMPLAZAR nombres, especialidades y fotos por los del equipo real.
 * Podés agregar o quitar tarjetas: la grilla se acomoda sola.
 * -------------------------------------------------------------------------- */
export type Integrante = {
  nombre: string;
  especialidad: string;
  espacio: string;
  bio: string;
  foto: string;
};

export const EQUIPO: Integrante[] = [
  {
    nombre: 'Ezequiel',
    especialidad: 'Cortes masculinos y femeninos',
    espacio: 'Planta baja',
    bio: 'Profesional, dedicado y detallista. Se toma el tiempo para escucharte y encontrar el corte ideal para vos.',
    foto: fotoEzequiel,
  },
  {
    nombre: 'Patri',
    especialidad: 'Colorista · Mechas y coloración',
    espacio: 'Planta baja',
    bio: 'Cálida y talentosa. Peinados que van de lo elegante a lo natural, siempre con un acabado impecable.',
    foto: fotoPatri,
  },
  {
    nombre: 'Nayla',
    especialidad: 'Multifacética · Cortes, barbería y color',
    espacio: 'Planta baja',
    bio: 'Amorosa y creativa. Cortes femeninos y masculinos, barbería, coloración, peinados y depilación de rostro.',
    foto: fotoNayla,
  },
  {
    nombre: 'Rubén',
    especialidad: 'Barbero · Cortes modernos',
    espacio: 'Planta baja',
    bio: 'Precisión y creatividad en cada corte, con estilos que reflejan personalidad y elegancia.',
    foto: fotoRuben,
  },
];

/* -----------------------------------------------------------------------------
 * GALERÍA
 * ⚠️ REEMPLAZAR por fotos reales de trabajos hechos en el local.
 * `alto` define el tamaño de la tarjeta dentro del mosaico.
 * -------------------------------------------------------------------------- */
export type FotoGaleria = {
  src: string;
  titulo: string;
  alt: string;
  alto: 'alta' | 'media' | 'baja';
};

export const GALERIA: FotoGaleria[] = [
  {
    src: IMAGENES.corteFade,
    titulo: 'Fade a máquina',
    alt: 'Detalle de un corte de cabello degradado terminado en la peluquería',
    alto: 'alta',
  },
  {
    src: IMAGENES.salon,
    titulo: 'El salón de abajo',
    alt: 'Sillones y espejos de la peluquería en planta baja',
    alto: 'baja',
  },
  {
    src: IMAGENES.retrato2,
    titulo: 'Brushing y ondas',
    alt: 'Estilista del salón con el cabello peinado en ondas suaves',
    alto: 'media',
  },
  {
    src: IMAGENES.unas,
    titulo: 'Uñas esculpidas',
    alt: 'Manos con uñas esculpidas en tono nude con detalle dorado',
    alto: 'alta',
  },
  {
    src: IMAGENES.beauty,
    titulo: 'Sala del 1er piso',
    alt: 'Sala de estética con camilla de masajes y luz natural',
    alto: 'baja',
  },
  {
    src: IMAGENES.retrato4,
    titulo: 'Corte texturizado',
    alt: 'Corte de cabello masculino texturizado terminado',
    alto: 'media',
  },
  {
    src: IMAGENES.retrato1,
    titulo: 'Barba perfilada',
    alt: 'Barba prolija y perfilada luego del servicio de barbería',
    alto: 'media',
  },
  {
    src: IMAGENES.retrato3,
    titulo: 'Estética y bienestar',
    alt: 'Cosmetóloga del Beauty Studio lista para atender un turno',
    alto: 'baja',
  },
];

/* -----------------------------------------------------------------------------
 * EVENTO DEL DÍA
 * Aviso que titila en rojo suave junto al botón "Pedir turno" del Hero.
 * ⚠️ Para cambiar el evento de hoy: editar título, descripción y fotos.
 * Para OCULTARLO (si no hay evento ese día): poner activo: false.
 * -------------------------------------------------------------------------- */
export type FotoEvento = { src: string; alt: string };

export const EVENTO_HOY: {
  activo: boolean;
  etiqueta: string;
  titulo: string;
  descripcion: string;
  fotos: FotoEvento[];
} = {
  activo: true,
  etiqueta: 'Evento de hoy',
  titulo: 'Sorteo de corte + barba gratis ✂️',
  descripcion:
    'Hoy sorteamos un corte con barba gratis entre las personas que pasen por el salón y sigan nuestro Instagram. El ganador se anuncia a la tarde en el local y por redes.',
  fotos: [
    { src: IMAGENES.salon, alt: 'Ambiente del salón durante el evento de hoy' },
    { src: IMAGENES.corteFade, alt: 'Trabajo realizado durante la jornada del evento' },
  ],
};

/* -----------------------------------------------------------------------------
 * NUESTRA PRODUCCIÓN
 * Sección con fotos de cortes, peinados y trabajos del equipo.
 * ⚠️ REEMPLAZAR por fotos reales. Mismo formato que GALERIA.
 * -------------------------------------------------------------------------- */
export const PRODUCCION: FotoGaleria[] = [
  {
    src: IMAGENES.corteFade,
    titulo: 'Fade prolijo',
    alt: 'Corte de cabello degradado terminado',
    alto: 'alta',
  },
  {
    src: IMAGENES.retrato2,
    titulo: 'Color y brillo',
    alt: 'Trabajo de coloración terminado con brillo natural',
    alto: 'media',
  },
  {
    src: IMAGENES.retrato4,
    titulo: 'Texturizado moderno',
    alt: 'Corte de cabello masculino con textura',
    alto: 'baja',
  },
  {
    src: IMAGENES.unas,
    titulo: 'Detalle de manos',
    alt: 'Manicura terminada con esmaltado prolijo',
    alto: 'media',
  },
  {
    src: IMAGENES.retrato1,
    titulo: 'Barba a navaja',
    alt: 'Barba perfilada a navaja luego del servicio',
    alto: 'alta',
  },
  {
    src: IMAGENES.retrato3,
    titulo: 'Peinado de fiesta',
    alt: 'Peinado elaborado para una ocasión especial',
    alto: 'baja',
  },
];


 * ⚠️ REVISAR las respuestas para que coincidan con las reglas reales del local
 *    (medios de pago, aviso de cancelación, tolerancia de demora).
 * -------------------------------------------------------------------------- */
export type Pregunta = {
  id: string;
  /** Etiqueta corta para filtrar/agrupar visualmente. */
  tema: string;
  pregunta: string;
  /** Cada string es un párrafo de la respuesta. */
  respuesta: string[];
  icono: LucideIcon;
};

export const PREGUNTAS: Pregunta[] = [
  {
    id: 'turno-previo',
    tema: 'Turnos',
    pregunta: '¿Hace falta turno previo o puedo caer sin avisar?',
    respuesta: [
      'Trabajamos siempre con turno previo, así cada persona tiene su horario reservado y nadie espera de más. Lo más rápido es escribirnos por WhatsApp: nos contás qué servicio querés y te pasamos los horarios libres más cercanos.',
      'Si estás por la zona y querés probar suerte, pasá igual o mandanos un mensaje antes: a veces se libera un lugar por una cancelación y te podemos acomodar en el día, sobre todo para corte de hombre o perfilado de barba.',
    ],
    icono: CalendarCheck,
  },
  {
    id: 'formas-de-pago',
    tema: 'Pagos',
    pregunta: '¿Qué formas de pago aceptan?',
    respuesta: [
      'Aceptamos efectivo, transferencia (te pasamos el alias en el momento) y tarjetas de débito y crédito. También cobramos con billeteras virtuales por QR, como Mercado Pago.',
      'El pago es al finalizar el servicio. En efectivo o transferencia no hay recargo; con tarjeta se aplica el recargo del sistema, y en algunos servicios de color o alisado te pedimos una seña para reservar el horario, porque son turnos largos.',
    ],
    icono: CreditCard,
  },
  {
    id: 'cancelaciones',
    tema: 'Turnos',
    pregunta: '¿Cómo es la política de cancelación?',
    respuesta: [
      'Si no podés venir, avisanos con al menos 24 horas de anticipación por WhatsApp y reprogramamos tu turno sin ningún costo. Con ese aviso liberamos el horario para otra persona y todos salimos ganando.',
      'Cuando la cancelación llega con menos de 3 horas, o directamente no viene nadie al turno, la seña no se devuelve y queda como crédito solo si es la primera vez. Después de dos ausencias sin aviso te vamos a pedir seña para reservar cualquier turno.',
    ],
    icono: CalendarX,
  },
  {
    id: 'duracion',
    tema: 'Servicios',
    pregunta: '¿Cuánto dura cada servicio?',
    respuesta: [
      'Corte de hombre o de niño: 30 a 40 minutos. Corte de mujer con lavado y brushing: 60 a 75 minutos. Perfilado de barba: 20 a 30 minutos. Uñas esculpidas o semipermanente: 60 a 90 minutos. Lifting o extensión de pestañas: alrededor de 90 minutos. Masaje descontracturante o reiki: 50 minutos.',
      'Los servicios de color son los más largos: raíz y retoque, unas 2 horas; balayage, mechas o nanoplastia, entre 3 y 4 horas según el largo y el estado del pelo. Cuando reservás te confirmamos el tiempo estimado de tu caso, así organizás el día tranquila.',
    ],
    icono: Timer,
  },
  {
    id: 'ninos',
    tema: 'Servicios',
    pregunta: '¿Atienden niños?',
    respuesta: [
      'Sí, atendemos chicos y chicas de todas las edades, y tenemos tarifa de corte infantil hasta los 12 años. Para el primer corte nos tomamos el tiempo que haga falta: sin apuro, con la maquinita apoyada primero en la mano para que pierdan el miedo y con la silla elevada.',
      'Nuestro consejo es reservar temprano a la mañana o en el primer turno de la tarde, cuando el salón está más tranquilo. Puede acompañarlo una sola persona adulta, así el nene no se distrae y terminamos más rápido.',
    ],
    icono: Baby,
  },
  {
    id: 'pelo-lavado',
    tema: 'Antes de venir',
    pregunta: '¿Tengo que venir con el pelo lavado?',
    respuesta: [
      'No hace falta: el lavado está incluido en el corte y en el brushing, así que podés venir directo del trabajo o del gimnasio sin preocuparte.',
      'Hay dos excepciones. Para color, mechas o balayage es mejor venir con el pelo seco y sin lavar de uno o dos días: la grasitud natural protege el cuero cabelludo. Para alisados y tratamientos de keratina, en cambio, sí conviene venir con el pelo recién lavado y sin ningún producto, ni acondicionador ni spray.',
    ],
    icono: Droplets,
  },
  {
    id: 'cuidado-color',
    tema: 'Cuidados',
    pregunta: '¿Cómo cuido el color en casa para que dure?',
    respuesta: [
      'Dejá pasar 48 a 72 horas antes del primer lavado y después usá shampoo sin sulfatos, específico para pelo con color. Lavá con agua tibia o fría —el agua muy caliente abre la cutícula y se va el pigmento— y no más de dos o tres veces por semana.',
      'Sumá una máscara de nutrición una vez por semana, protector térmico siempre antes de la planchita o el secador, y si vas a la pile o al mar, mojate el pelo con agua dulce antes de entrar. Para los rubios, el shampoo con matizador violeta cada tres lavados mantiene el frío. Te dejamos anotado en el turno qué productos usar según tu color.',
    ],
    icono: Palette,
  },
  {
    id: 'llegar-tarde',
    tema: 'Turnos',
    pregunta: '¿Qué pasa si llego tarde?',
    respuesta: [
      'Tenés 15 minutos de tolerancia y hacemos el servicio completo igual. Si te vas a demorar, avisanos por WhatsApp mientras venís en camino: muchas veces reacomodamos el orden y no pierdes el turno.',
      'Pasados los 15 minutos depende de la agenda: si hay alguien reservado después, hacemos una versión más corta del servicio en el tiempo que queda o lo pasamos al primer horario libre, para no atrasar a quien viene después. Cuando la demora supera los 30 minutos el turno se considera perdido y hay que reprogramar.',
    ],
    icono: AlarmClock,
  },
];
