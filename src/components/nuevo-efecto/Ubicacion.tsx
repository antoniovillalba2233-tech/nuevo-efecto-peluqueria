import React, { useState } from 'react';
import { Building, Bus, ExternalLink, MapPin, Navigation } from 'lucide-react';
import Reveal from './Reveal';
import EstadoHorario from './EstadoHorario';
import {
  SUCURSALES,
  mapsDireccionesDe,
  mapsEmbedDe,
  mapsLinkDe,
  track,
} from '@/config/site';

/**
 * UBICACIÓN
 * Las sucursales (dirección, referencia, transporte) salen de SUCURSALES
 * en src/config/site.ts. Si hay más de una, se muestra un selector arriba.
 * ⚠️ REEMPLAZAR / AGREGAR sucursales en esa constante.
 */
const Ubicacion: React.FC = () => {
  const [activa, setActiva] = useState(0);
  const sucursal = SUCURSALES[activa];
  const mapsEmbed = mapsEmbedDe(sucursal.mapsQuery);
  const mapsLink = mapsLinkDe(sucursal.mapsQuery);
  const mapsDirecciones = mapsDireccionesDe(sucursal.mapsQuery);

  return (
    <section id="ubicacion" className="scroll-mt-20 bg-carbon py-20 text-crema sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="kicker text-oro">Cómo llegar</p>
          <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Dónde <span className="italic text-oro">estamos</span>
          </h2>
        </Reveal>

        {SUCURSALES.length > 1 && (
          <Reveal delay={80} className="mt-8 flex flex-wrap gap-2.5">
            {SUCURSALES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiva(i);
                  track('cta_click', { ubicacion: 'sucursal', destino: s.id });
                }}
                aria-pressed={activa === i}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activa === i
                    ? 'bg-oro text-carbon'
                    : 'border border-crema/25 text-crema/70 hover:border-oro hover:text-oro'
                }`}
              >
                {s.nombre}
              </button>
            ))}
          </Reveal>
        )}
      </div>

      <div className="mt-10 grid gap-0 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
        {/* Mapa embebido a pantalla ancha, sin API key */}
        <Reveal
          key={`mapa-${sucursal.id}`}
          className="relative h-[22rem] overflow-hidden border-y border-white/10 sm:h-[26rem] lg:h-auto lg:min-h-[30rem] lg:rounded-r-[2.5rem] lg:border-l-0"
        >
          <iframe
            title={`Mapa con la ubicación de Nuevo Efecto — ${sucursal.nombre}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
            allowFullScreen
          />
        </Reveal>

        <div className="mx-auto w-full max-w-7xl px-5 py-10 lg:px-8 lg:py-0">
          <Reveal key={`info-${sucursal.id}`} delay={120} className="lg:pl-2">
            <EstadoHorario tono="oscuro" />

            <div className="mt-8 space-y-7">
              <div className="flex gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-oro/[0.12] text-oro">

                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-crema/50">
                    Dirección · {sucursal.nombre}
                  </h3>
                  <p className="titulo-display mt-1.5 text-xl leading-snug text-crema sm:text-2xl">
                    {sucursal.direccion}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-oro/12 text-oro">
                  <Building className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-crema/50">
                    Referencia
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-crema/70">
                    {sucursal.referencia}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-oro/12 text-oro">
                  <Bus className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-crema/50">
                    Transporte
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-crema/70">
                    {sucursal.transporte}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('cta_click', { ubicacion: 'mapa', destino: 'google_maps' })}
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-oro px-6 py-3.5 text-sm font-semibold text-carbon transition-all hover:bg-oro-soft"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Abrir en Google Maps
              </a>
              <a
                href={mapsDirecciones}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('cta_click', { ubicacion: 'mapa', destino: 'como_llegar' })}
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-crema/25 px-6 py-3.5 text-sm font-semibold text-crema transition-all hover:border-oro hover:text-oro"
              >
                <Navigation className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
