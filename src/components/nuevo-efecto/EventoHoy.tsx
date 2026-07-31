import React, { useEffect, useState } from 'react';
import { PartyPopper, X } from 'lucide-react';
import { EVENTO_HOY } from '@/data/contenido';
import { track } from '@/config/site';

/**
 * EVENTO DEL DÍA
 * Aviso en rojo suave, con un titileo sutil, ubicado junto al botón
 * "Pedir turno por WhatsApp" en el Hero. Al tocarlo, abre el detalle
 * del evento de hoy con texto y fotos.
 *
 * ⚠️ Para cambiar el evento (o apagarlo si no hay uno ese día):
 *    src/data/contenido.ts → EVENTO_HOY
 */
const EventoHoy: React.FC = () => {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [abierto]);

  if (!EVENTO_HOY.activo) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setAbierto(true);
          track('cta_click', { ubicacion: 'hero', destino: 'evento_hoy' });
        }}
        className="group inline-flex animate-evento-pulse items-center justify-center gap-2.5 rounded-full border border-red-400/40 bg-red-500/[0.12] px-6 py-4 text-base font-semibold text-red-300 backdrop-blur transition-all hover:border-red-400/70 hover:bg-red-500/20 sm:text-lg"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-evento-blink rounded-full bg-red-400" />
        </span>
        {EVENTO_HOY.etiqueta}
      </button>

      {abierto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={EVENTO_HOY.titulo}
          className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-carbon-deep/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setAbierto(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl animate-slide-in overflow-y-auto rounded-[1.75rem] border border-red-400/25 bg-carbon-soft p-7 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/[0.12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                <PartyPopper className="h-3.5 w-3.5" aria-hidden="true" />
                {EVENTO_HOY.etiqueta}
              </span>
              <button
                type="button"
                onClick={() => setAbierto(false)}
                aria-label="Cerrar"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-crema/70 transition-colors hover:border-oro hover:text-oro"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h3 className="titulo-display mt-5 text-2xl leading-snug text-crema sm:text-3xl">
              {EVENTO_HOY.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-crema/70 sm:text-base">
              {EVENTO_HOY.descripcion}
            </p>

            {EVENTO_HOY.fotos.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {EVENTO_HOY.fotos.map((foto, i) => (
                  <img
                    key={`${foto.src}-${i}`}
                    src={foto.src}
                    alt={foto.alt}
                    className="h-40 w-full rounded-2xl border border-white/10 object-cover sm:h-48"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventoHoy;
