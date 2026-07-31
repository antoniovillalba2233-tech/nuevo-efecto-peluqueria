import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import Reveal from './Reveal';
import { GALERIA } from '@/data/contenido';
import { track } from '@/config/site';

const ALTURAS: Record<string, string> = {
  alta: 'h-[26rem] sm:h-[32rem]',
  media: 'h-[20rem] sm:h-[24rem]',
  baja: 'h-[16rem] sm:h-[19rem]',
};

/**
 * GALERÍA tipo mosaico con lightbox.
 * ⚠️ Para cambiar las fotos: src/data/contenido.ts → GALERIA
 */
const Galeria: React.FC = () => {
  const [indice, setIndice] = useState<number | null>(null);
  const abierto = indice !== null;

  const cerrar = useCallback(() => setIndice(null), []);
  const anterior = useCallback(
    () => setIndice((i) => (i === null ? null : (i - 1 + GALERIA.length) % GALERIA.length)),
    [],
  );
  const siguiente = useCallback(
    () => setIndice((i) => (i === null ? null : (i + 1) % GALERIA.length)),
    [],
  );

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar();
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') siguiente();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [abierto, cerrar, anterior, siguiente]);

  const foto = indice !== null ? GALERIA[indice] : null;

  return (
    <section id="galeria" className="scroll-mt-20 bg-crema py-20 text-carbon sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="kicker text-oro-deep">Nuestros trabajos</p>
            <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Galería del <span className="italic text-oro-deep">salón</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-carbon/60">
            Tocá cualquier foto para verla en grande. Cortes, color, uñas y los dos espacios del
            local.
          </p>
        </Reveal>

        {/* Mosaico en columnas: se reacomoda solo según el ancho */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALERIA.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => {
                  setIndice(i);
                  track('gallery_open', { foto: item.titulo });
                }}
                className="group relative block w-full overflow-hidden rounded-[1.5rem] focus-visible:ring-2 focus-visible:ring-oro"
                aria-label={`Ampliar foto: ${item.titulo}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${ALTURAS[item.alto]}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-left">
                  <span className="titulo-display text-lg text-crema sm:text-xl">{item.titulo}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crema/15 text-crema backdrop-blur transition-colors group-hover:bg-oro group-hover:text-carbon">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {foto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${foto.titulo}`}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-carbon-deep/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={cerrar}
        >
          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-crema transition-colors hover:border-oro hover:text-oro sm:right-7 sm:top-7"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-carbon/60 text-crema transition-colors hover:border-oro hover:text-oro sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              className="mx-auto max-h-[76vh] w-auto rounded-[1.5rem] object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="titulo-display text-xl text-crema">{foto.titulo}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.24em] text-oro/70">
                {(indice ?? 0) + 1} / {GALERIA.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
            aria-label="Foto siguiente"
            className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-carbon/60 text-crema transition-colors hover:border-oro hover:text-oro sm:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Galeria;
