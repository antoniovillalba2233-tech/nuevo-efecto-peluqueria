import React from 'react';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { MENSAJES, track, waLink } from '@/config/site';
import { EQUIPO } from '@/data/contenido';

/**
 * EQUIPO
 * ⚠️ Para cambiar nombres, especialidades y fotos: src/data/contenido.ts → EQUIPO
 */
const Equipo: React.FC = () => {
  return (
    <section id="equipo" className="scroll-mt-20 bg-carbon py-20 text-crema sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker text-oro">Quiénes te atienden</p>
          <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            El <span className="italic text-oro">equipo</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-crema/60 sm:text-lg">
            Pedí tu turno directo con la persona que más te gusta cómo trabaja. Todos son parte del
            local, en planta baja y en el primer piso.
          </p>
          <span className="mt-8 block h-px w-32 linea-oro mx-auto" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
          {EQUIPO.map((persona, i) => (
            <Reveal as="li" key={persona.nombre} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col items-center rounded-[1.75rem] border border-white/10 bg-carbon-soft p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-oro/50">
                <div className="relative">
                  <span className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-br from-oro/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* ⚠️ REEMPLAZAR la foto en src/data/contenido.ts */}
                  <img
                    src={persona.foto}
                    alt={`Retrato de ${persona.nombre}, ${persona.especialidad}`}
                    className="relative h-36 w-36 rounded-[1.25rem] border-2 border-white/10 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] sm:h-40 sm:w-40"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-carbon px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-oro ring-1 ring-oro/40">
                    {persona.espacio}
                  </span>
                </div>

                {/* ⚠️ REEMPLAZAR nombre y especialidad en src/data/contenido.ts */}
                <h3 className="titulo-display mt-8 text-2xl text-crema">{persona.nombre}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-oro/80">
                  {persona.especialidad}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-crema/55">{persona.bio}</p>

                <a
                  href={waLink(MENSAJES.persona(persona.nombre))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('cta_click', { ubicacion: 'equipo', persona: persona.nombre })}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-wapp/40 bg-wapp/10 px-4 py-3 text-sm font-semibold text-wapp transition-all hover:bg-wapp hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Pedir turno con {persona.nombre}
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Equipo;
