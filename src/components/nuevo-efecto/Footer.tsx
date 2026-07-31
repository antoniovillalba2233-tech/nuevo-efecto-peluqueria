import React from 'react';
import { ArrowUp, Instagram, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import {
  HORARIOS,
  INSTAGRAM,
  INSTAGRAM_USUARIO,
  MENSAJES,
  NEGOCIO,
  SUCURSALES,
  mapsLinkDe,
  track,
  waLink,
} from '@/config/site';

const LINKS_SECCIONES = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Los dos espacios', href: '#espacios' },
  { label: 'Peluquería', href: '#peluqueria' },
  { label: 'Beauty Studio', href: '#beauty' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Preguntas frecuentes', href: '#faq' },

];

const Footer: React.FC = () => {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-carbon-deep text-crema">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <p className="titulo-display text-2xl tracking-[0.2em] text-crema">{NEGOCIO.nombre}</p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.3em] text-oro/80">
              {NEGOCIO.bajada}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-crema/55">
              {NEGOCIO.descripcionCorta}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink(MENSAJES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('cta_click', { ubicacion: 'footer', destino: 'whatsapp' })}
                className="inline-flex items-center gap-2 rounded-full bg-wapp px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-wapp-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('cta_click', { ubicacion: 'footer', destino: 'instagram' })}
                className="inline-flex items-center gap-2 rounded-full border border-crema/25 px-5 py-3 text-sm font-semibold text-crema transition-colors hover:border-oro hover:text-oro"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                @{INSTAGRAM_USUARIO}
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Secciones del sitio">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-oro">Secciones</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {LINKS_SECCIONES.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-crema/60 transition-colors hover:text-oro"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dirección + horarios */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-oro">
              Dónde y cuándo
            </h2>
            <ul className="mt-5 space-y-3">
              {SUCURSALES.map((s) => (
                <li key={s.id}>
                  <a
                    href={mapsLinkDe(s.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('cta_click', { ubicacion: 'footer', destino: `mapa_${s.id}` })}
                    className="group flex items-start gap-2 text-sm leading-relaxed text-crema/60 transition-colors hover:text-oro"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-oro" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-crema/40">
                        {s.nombre}
                      </span>
                      <span className="underline-offset-4 group-hover:underline">{s.direccion}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-5 space-y-1.5">
              {HORARIOS.map((h) => (
                <li key={h.dia} className="flex justify-between gap-4 text-sm text-crema/55">
                  <span>{h.corto}</span>
                  <span className="font-mono text-xs sm:text-sm">
                    {h.abre && h.cierra ? `${h.abre} – ${h.cierra}` : 'Cerrado'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-crema/40 sm:text-left">
            © {anio} {NEGOCIO.nombre}. Todos los derechos reservados.
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-crema/50 transition-colors hover:text-oro"
          >
            Volver arriba
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
