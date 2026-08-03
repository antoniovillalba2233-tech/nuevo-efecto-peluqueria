/* =============================================================================
 *  NUEVO EFECTO — ARCHIVO ÚNICO DE CONFIGURACIÓN
 * -----------------------------------------------------------------------------
 *  Todo lo que cambia seguido (WhatsApp, dirección, mapa, Instagram, horarios)
 *  vive ACÁ. Editás este archivo y se actualiza toda la página.
 * ========================================================================== */

/* -----------------------------------------------------------------------------
 * WHATSAPP
 * Formato internacional, SIN el signo "+", sin espacios ni guiones.
 * Ejemplo para un celular de Buenos Aires: 5491122334455
 * ⚠️ REEMPLAZAR por el número real de WhatsApp del local.
 * -------------------------------------------------------------------------- */
export const WHATSAPP = '5490000000000';

/* -----------------------------------------------------------------------------
 * INSTAGRAM  ·  ⚠️ REEMPLAZAR por el usuario real (sin @)
 * -------------------------------------------------------------------------- */
export const INSTAGRAM_USUARIO = 'nuevo.efecto_peluquerias';
export const INSTAGRAM = `https://instagram.com/${INSTAGRAM_USUARIO}`;

/* -----------------------------------------------------------------------------
 * SUCURSALES
 * El local tiene más de una dirección. La primera del array es la PRINCIPAL
 * (la que se muestra por defecto en el Hero, el Footer y los datos SEO).
 * ⚠️ REEMPLAZAR / AGREGAR sucursales acá si cambian las direcciones.
 * -------------------------------------------------------------------------- */
export type Sucursal = {
  id: string;
  nombre: string;
  direccion: string;
  referencia: string;
  transporte: string;
  mapsQuery: string;
};

export const SUCURSALES: Sucursal[] = [
  {
    id: 'ranelagh',
    nombre: 'Ranelagh',
    direccion: 'Antártida Argentina 374, e/ 253 y 254, Ranelagh, Buenos Aires',
    referencia: 'Sucursal principal de Nuevo Efecto.',
    transporte: 'Colectivos y estacionamiento en la zona.',
    mapsQuery: 'Antártida Argentina 374, Ranelagh, Buenos Aires, Argentina',
  },
  {
    id: 'berazategui',
    nombre: 'Berazategui',
    direccion: 'Av. 14 Nº 3553, e/ 135 y 136, Berazategui, Buenos Aires',
    referencia: 'Sucursal Berazategui de Nuevo Efecto.',
    transporte: 'Colectivos y estacionamiento en la zona.',
    mapsQuery: 'Av. 14 3553, Berazategui, Buenos Aires, Argentina',
  },
];

/** Sucursal que se muestra por defecto (Hero, Footer, datos SEO). */
export const SUCURSAL_PRINCIPAL = SUCURSALES[0];

/* -----------------------------------------------------------------------------
 * DIRECCIÓN (alias de la sucursal principal, para compatibilidad)
 * -------------------------------------------------------------------------- */
export const DIRECCION = SUCURSAL_PRINCIPAL.direccion;
export const DIRECCION_REFERENCIA = SUCURSAL_PRINCIPAL.referencia;
export const DIRECCION_TRANSPORTE = SUCURSAL_PRINCIPAL.transporte;

/* -----------------------------------------------------------------------------
 * MAPA (Google Maps sin API key)
 * Helpers genéricos: reciben la consulta (mapsQuery) de la sucursal que sea.
 * -------------------------------------------------------------------------- */
export const MAPS_QUERY = SUCURSAL_PRINCIPAL.mapsQuery;

export function mapsEmbedDe(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function mapsLinkDe(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsDireccionesDe(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

/** Iframe embebido de la sucursal principal. */
export const MAPS_EMBED = mapsEmbedDe(MAPS_QUERY);

/** Abrir la ficha de la sucursal principal en Google Maps. */
export const MAPS_LINK = mapsLinkDe(MAPS_QUERY);

/** Indicaciones paso a paso ("Cómo llegar") a la sucursal principal. */
export const MAPS_DIRECCIONES = mapsDireccionesDe(MAPS_QUERY);

/* -----------------------------------------------------------------------------
 * HORARIOS
 * abre / cierra en formato "HH:MM" (24 h). null = cerrado ese día.
 * diaSemana: 0 = domingo, 1 = lunes ... 6 = sábado
 * ⚠️ REEMPLAZAR por los horarios reales del local.
 * -------------------------------------------------------------------------- */
export type Horario = {
  dia: string;
  corto: string;
  diaSemana: number;
  abre: string | null;
  cierra: string | null;
};

export const HORARIOS: Horario[] = [
  { dia: 'Lunes', corto: 'Lun', diaSemana: 1, abre: '09:00', cierra: '20:00' },
  { dia: 'Martes', corto: 'Mar', diaSemana: 2, abre: '09:00', cierra: '20:00' },
  { dia: 'Miércoles', corto: 'Mié', diaSemana: 3, abre: '09:00', cierra: '20:00' },
  { dia: 'Jueves', corto: 'Jue', diaSemana: 4, abre: '09:00', cierra: '21:00' },
  { dia: 'Viernes', corto: 'Vie', diaSemana: 5, abre: '09:00', cierra: '21:00' },
  { dia: 'Sábado', corto: 'Sáb', diaSemana: 6, abre: '09:00', cierra: '18:00' },
  { dia: 'Domingo', corto: 'Dom', diaSemana: 0, abre: null, cierra: null },
];

/** Zona horaria del local: el cartel "Abierto ahora" se calcula con esta hora. */
export const ZONA_HORARIA = 'America/Argentina/Buenos_Aires';

/* -----------------------------------------------------------------------------
 * MARCA / TEXTOS BASE
 * -------------------------------------------------------------------------- */
export const NEGOCIO = {
  nombre: 'NUEVO EFECTO',
  bajada: 'Peluquería & Beauty Studio',
  descripcionCorta:
    'Dos espacios, dos pisos, un mismo cuidado: peluquería y barbería en planta baja, estética y bienestar en el primer piso.',
};

/* -----------------------------------------------------------------------------
 * HELPERS
 * -------------------------------------------------------------------------- */

/** Arma el link de WhatsApp con un mensaje ya escrito. */
export function waLink(mensaje: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

/** Mensajes pre-cargados de WhatsApp. */
export const MENSAJES = {
  general: '¡Hola! Quiero pedir un turno en Nuevo Efecto',
  servicio: (servicio: string) => `¡Hola! Quiero reservar un turno para: ${servicio}`,
  persona: (nombre: string) => `¡Hola! Quiero pedir un turno con ${nombre} en Nuevo Efecto`,
  espacio: (espacio: string) => `¡Hola! Quiero pedir un turno en ${espacio} (Nuevo Efecto)`,
};

/** Evento de analítica (nunca rompe la página si el tracker no cargó). */
export function track(evento: string, props: Record<string, string | number | boolean> = {}) {
  try {
    (window as unknown as { supercool?: { track?: (e: string, p?: Record<string, unknown>) => void } })
      .supercool?.track?.(evento, props);
  } catch {
    /* no-op */
  }
}

function aMinutos(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

/** Hora local del LOCAL (no del visitante): día de la semana + minutos del día. */
function ahoraEnLocal(fecha: Date): { diaSemana: number; minutos: number } {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: ZONA_HORARIA,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const partes = fmt.formatToParts(fecha);
  const dias: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const weekday = partes.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const hora = Number(partes.find((p) => p.type === 'hour')?.value ?? '0');
  const minuto = Number(partes.find((p) => p.type === 'minute')?.value ?? '0');
  return { diaSemana: dias[weekday] ?? 1, minutos: (hora % 24) * 60 + minuto };
}

export function horarioDe(diaSemana: number): Horario | undefined {
  return HORARIOS.find((h) => h.diaSemana === diaSemana);
}

export type EstadoApertura = {
  abierto: boolean;
  etiqueta: string;
  detalle: string;
  diaActual: number;
};

/** "Abierto ahora / Cerrado" calculado con los horarios de arriba. */
export function estadoApertura(fecha: Date = new Date()): EstadoApertura {
  const { diaSemana, minutos } = ahoraEnLocal(fecha);
  const hoy = horarioDe(diaSemana);

  if (hoy?.abre && hoy.cierra) {
    const desde = aMinutos(hoy.abre);
    const hasta = aMinutos(hoy.cierra);
    if (minutos >= desde && minutos < hasta) {
      return {
        abierto: true,
        etiqueta: 'Abierto ahora',
        detalle: `Hoy atendemos hasta las ${hoy.cierra} h`,
        diaActual: diaSemana,
      };
    }
    if (minutos < desde) {
      return {
        abierto: false,
        etiqueta: 'Cerrado',
        detalle: `Hoy abrimos a las ${hoy.abre} h`,
        diaActual: diaSemana,
      };
    }
  }

  // Buscamos el próximo día con atención.
  for (let i = 1; i <= 7; i++) {
    const siguiente = horarioDe((diaSemana + i) % 7);
    if (siguiente?.abre) {
      const cuando = i === 1 ? 'mañana' : `el ${siguiente.dia.toLowerCase()}`;
      return {
        abierto: false,
        etiqueta: 'Cerrado',
        detalle: `Abrimos ${cuando} a las ${siguiente.abre} h`,
        diaActual: diaSemana,
      };
    }
  }

  return { abierto: false, etiqueta: 'Cerrado', detalle: 'Escribinos por WhatsApp', diaActual: diaSemana };
}
