import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal';
import { ESPACIOS } from '@/data/contenido';
import { track } from '@/config/site';

const Espacios: React.FC = () => {
  return (
    <section id="espacios" className="scroll-mt-24 bg-crema py-20 text-carbon sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="kicker text-oro-deep">Un local, dos mundos</p>
          <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Dos espacios,
            <br />
            <span className="italic text-oro-deep">dos pisos</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-carbon/65 sm:text-lg">
            Elegí dónde querés tu turno: abajo la peluquería y la barbería, arriba el estudio de
            estética y bienestar. Mismo equipo, misma obsesión por el detalle.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {ESPACIOS.map((espacio, i) => (
            <Reveal key={espacio.id} as="article" delay={i * 120} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-carbon/10 bg-white shadow-[0_18px_50px_-30px_rgba(14,14,16,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-oro/50 hover:shadow-[0_30px_70px_-30px_rgba(14,14,16,0.5)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* ⚠️ REEMPLAZAR la foto en src/data/contenido.ts → IMAGENES */}
                  <img
                    src={espacio.imagen}
                    alt={espacio.imagenAlt}
                    className={`h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${espacio.encuadre}`}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-carbon/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-oro px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-carbon shadow-lg">
                    {espacio.piso}
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-oro-soft">
                      {espacio.subtitulo}
                    </p>
                    <h3 className="titulo-display mt-1.5 text-2xl text-crema sm:text-3xl">
                      {espacio.titulo}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-[0.95rem] leading-relaxed text-carbon/70">
                    {espacio.descripcion}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {espacio.destacados.map((d) => (
                      <li
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-full bg-crema px-3 py-1.5 text-xs font-medium text-carbon/75"
                      >
                        <Check className="h-3.5 w-3.5 text-oro-deep" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <a
                      href={espacio.ancla}
                      onClick={() => track('cta_click', { ubicacion: 'espacios', espacio: espacio.id })}
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-carbon px-6 py-3.5 text-sm font-semibold text-crema transition-all hover:bg-oro hover:text-carbon sm:w-auto"
                    >
                      Ver servicios de {espacio.id === 'peluqueria' ? 'peluquería' : 'beauty studio'}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Espacios;
