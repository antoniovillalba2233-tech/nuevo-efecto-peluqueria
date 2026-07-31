import React, { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { MENSAJES, track, waLink } from '@/config/site';

/** Botón flotante de WhatsApp, visible en toda la página. */
const BotonWhatsApp: React.FC = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  useEffect(() => {
    // La etiqueta aparece sola después de un rato, para invitar al click.
    const id = window.setTimeout(() => setMostrarTexto(true), 2600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <a
      href={waLink(MENSAJES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir un turno por WhatsApp"
      onClick={() => track('cta_click', { ubicacion: 'boton_flotante', destino: 'whatsapp' })}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-wapp p-4 text-white shadow-2xl shadow-wapp/40 animate-wapp-pulse transition-all duration-300 hover:bg-wapp-dark hover:pr-6 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ${
          mostrarTexto ? 'max-w-[9rem] opacity-100' : 'max-w-0 opacity-0'
        } group-hover:max-w-[9rem] group-hover:opacity-100`}
      >
        Pedir turno
      </span>
    </a>
  );
};

export default BotonWhatsApp;
