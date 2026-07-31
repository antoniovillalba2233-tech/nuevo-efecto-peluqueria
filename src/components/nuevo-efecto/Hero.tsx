import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import EstadoHorario from './EstadoHorario';
import EventoHoy from './EventoHoy';
import { DIRECCION, MENSAJES, NEGOCIO, track, waLink } from '@/config/site';
import { IMAGENES } from '@/data/contenido';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-carbon-deep"
    >
      {/*
        ⚠️ FOTO DEL HERO — REEMPLAZAR POR LA FOTO REAL DE LA FACHADA / ENTRADA.
        La URL sale de src/data/contenido.ts → IMAGENES.hero
        Podés usar la foto de la ficha del local en Google Maps.
      */}
      <img
        src={IMAGENES.hero}
        alt="Interior del salón de Nuevo Efecto con sillones y espejos iluminados"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        loading="eager"
        decoding="async"
      />



      {/* Overlay oscuro degradado para que el texto se lea siempre */}
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/40" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_10%,rgba(14,14,16,0.85)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <div className="animate-hero-in">
            <EstadoHorario tono="oscuro" />
          </div>

          <p
            className="kicker mt-8 text-oro animate-hero-in"
            style={{ animationDelay: '80ms' }}
          >
            Peluquería · Barbería · Estética
          </p>

          <h1
            className="titulo-display mt-4 text-[3.1rem] leading-[0.92] text-crema animate-hero-in sm:text-7xl lg:text-8xl"
            style={{ animationDelay: '160ms' }}
          >
            {NEGOCIO.nombre}
          </h1>

          <p
            className="titulo-display mt-4 text-2xl italic text-oro animate-hero-in sm:text-3xl lg:text-4xl"
            style={{ animationDelay: '240ms' }}
          >
            {NEGOCIO.bajada}
          </p>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-crema/75 animate-hero-in sm:text-lg"
            style={{ animationDelay: '320ms' }}
          >
            {NEGOCIO.descripcionCorta}
          </p>

          <div
            className="mt-9 flex flex-col gap-3 animate-hero-in sm:flex-row sm:items-center"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href={waLink(MENSAJES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('cta_click', { ubicacion: 'hero', destino: 'whatsapp' })}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-wapp px-7 py-4 text-base font-semibold text-white shadow-xl shadow-wapp/25 transition-all hover:bg-wapp-dark hover:shadow-2xl hover:shadow-wapp/40 sm:text-lg"
            >
              <WhatsAppIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
              Pedir turno por WhatsApp
            </a>
            <EventoHoy />
            <a
              href="#espacios"
              onClick={() => track('cta_click', { ubicacion: 'hero', destino: 'servicios' })}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-crema/30 bg-white/5 px-7 py-4 text-base font-semibold text-crema backdrop-blur transition-all hover:border-oro hover:bg-oro hover:text-carbon sm:text-lg"
            >
              Ver servicios
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <p
            className="mt-8 flex items-start gap-2 text-sm text-crema/55 animate-hero-in"
            style={{ animationDelay: '480ms' }}
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-oro" aria-hidden="true" />
            {/* La dirección se edita en src/config/site.ts → DIRECCION */}
            {DIRECCION}
          </p>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="pointer-events-none absolute bottom-5 right-5 hidden flex-col items-center gap-3 lg:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-crema/40 [writing-mode:vertical-rl]">
          Deslizá
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-oro to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
