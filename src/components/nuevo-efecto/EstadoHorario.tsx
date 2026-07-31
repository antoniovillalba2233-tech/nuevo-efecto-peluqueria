import React, { useEffect, useState } from 'react';
import { estadoApertura, type EstadoApertura } from '@/config/site';

/** Cartel "Abierto ahora / Cerrado" — se recalcula cada minuto. */
export function useEstadoApertura(): EstadoApertura {
  const [estado, setEstado] = useState<EstadoApertura>(() => estadoApertura());

  useEffect(() => {
    const id = window.setInterval(() => setEstado(estadoApertura()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return estado;
}

type Props = {
  className?: string;
  /** Variante clara para fondos crema, oscura para fondos carbón. */
  tono?: 'claro' | 'oscuro';
  mostrarDetalle?: boolean;
};

const EstadoHorario: React.FC<Props> = ({ className = '', tono = 'oscuro', mostrarDetalle = true }) => {
  const estado = useEstadoApertura();

  const base =
    tono === 'claro'
      ? 'border-carbon/10 bg-white/70 text-carbon'
      : 'border-white/10 bg-white/5 text-crema';

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border px-4 py-2 backdrop-blur ${base} ${className}`}
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span
            className={`absolute inline-flex h-full w-full rounded-full ${
              estado.abierto ? 'animate-ping bg-wapp/70' : 'bg-transparent'
            }`}
          />
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
              estado.abierto ? 'bg-wapp' : 'bg-oro/70'
            }`}
          />
        </span>
        {estado.etiqueta}
      </span>
      {mostrarDetalle && (
        <span className={tono === 'claro' ? 'text-sm text-carbon/60' : 'text-sm text-crema/60'}>
          {estado.detalle}
        </span>
      )}
    </div>
  );
};

export default EstadoHorario;
