import { useEffect } from 'react';
import {
  DIRECCION,
  HORARIOS,
  INSTAGRAM,
  MAPS_LINK,
  NEGOCIO,
  WHATSAPP,
} from '@/config/site';
import { IMAGENES, PREGUNTAS } from '@/data/contenido';


const DIAS_SCHEMA: Record<number, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

/**
 * Metadatos SEO + datos estructurados schema.org (HairSalon / BeautySalon).
 * Todo se arma desde src/config/site.ts, así que se actualiza solo.
 */
const Seo = () => {
  useEffect(() => {
    const titulo = `${NEGOCIO.nombre} — ${NEGOCIO.bajada} | Turnos por WhatsApp`;
    const descripcion =
      'Peluquería, barbería y centro de estética en dos pisos. Cortes, color, barba, pestañas, uñas, depilación, masajes y reiki. Pedí tu turno por WhatsApp.';

    document.title = titulo;
    document.documentElement.lang = 'es-AR';

    const setMeta = (attr: 'name' | 'property', clave: string, valor: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${clave}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, clave);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', valor);
    };

    setMeta('name', 'description', descripcion);
    setMeta('property', 'og:title', titulo);
    setMeta('property', 'og:description', descripcion);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', 'es_AR');
    setMeta('property', 'og:site_name', NEGOCIO.nombre);
    setMeta('property', 'og:image', IMAGENES.hero);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', titulo);
    setMeta('name', 'twitter:description', descripcion);
    setMeta('name', 'twitter:image', IMAGENES.hero);

    setMeta('name', 'theme-color', '#0E0E10');

    const horariosSchema = HORARIOS.filter((h) => h.abre && h.cierra).map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DIAS_SCHEMA[h.diaSemana],
      opens: h.abre,
      closes: h.cierra,
    }));

    const datos = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HairSalon',
          '@id': '#peluqueria',
          name: 'Nuevo Efecto | Peluquería',
          description:
            'Barbería y peluquería unisex en planta baja: cortes de hombre, mujer y niños, barba, cejas y color.',
          image: IMAGENES.peluqueria,
          telephone: `+${WHATSAPP}`,
          priceRange: '$$',
          currenciesAccepted: 'ARS',
          address: { '@type': 'PostalAddress', streetAddress: DIRECCION, addressCountry: 'AR' },
          hasMap: MAPS_LINK,
          sameAs: [INSTAGRAM],
          openingHoursSpecification: horariosSchema,
        },
        {
          '@type': 'BeautySalon',
          '@id': '#beauty',
          name: 'Nuevo Efecto | Beauty Studio',
          description:
            'Estética y bienestar en el primer piso: pestañas, uñas, depilación, masajes, reiki y peinados para eventos.',
          image: IMAGENES.beauty,
          telephone: `+${WHATSAPP}`,
          priceRange: '$$',
          currenciesAccepted: 'ARS',
          address: { '@type': 'PostalAddress', streetAddress: DIRECCION, addressCountry: 'AR' },
          hasMap: MAPS_LINK,
          sameAs: [INSTAGRAM],
          openingHoursSpecification: horariosSchema,
        },
        {
          '@type': 'FAQPage',
          '@id': '#faq',
          mainEntity: PREGUNTAS.map((p) => ({
            '@type': 'Question',
            name: p.pregunta,
            acceptedAnswer: {
              '@type': 'Answer',
              text: p.respuesta.join(' '),
            },
          })),
        },
      ],

    };

    const id = 'nuevo-efecto-schema';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(datos);
  }, []);

  return null;
};

export default Seo;
