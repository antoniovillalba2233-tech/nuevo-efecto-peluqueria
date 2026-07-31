import React from 'react';
import { ArrowUpRight, Building2, Layers } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { MENSAJES, track, waLink } from '@/config/site';
import { SERVICIOS_BEAUTY, SERVICIOS_PELUQUERIA, type Servicio } from '@/data/contenido';

type Tono = 'oscuro' | 'claro';

const TarjetaServicio: React.FC<{ servicio: Servicio; tono: Tono; espacio: string; delay: number }> = ({
  servicio,
  tono,
  espacio,
  delay,
}) => {
  const Icono = servicio.icono;
  const oscuro = tono === 'oscuro';

  return (
    <Reveal as="li" delay={delay} className="h-full">
      <article
        className={`group flex h-full flex-col rounded-[1.75rem] border p-6 transition-all duration-500 hover:-translate-y-1.5 sm:p-7 ${
          oscuro
            ? 'border-white/10 bg-carbon-soft hover:border-oro/60 hover:bg-carbon-soft/80'
            : 'border-carbon/10 bg-white hover:border-oro/60 shadow-[0_14px_40px_-32px_rgba(14,14,16,0.4)] hover:shadow-[0_24px_55px_-30px_rgba(14,14,16,0.45)]'
        }`}
      >
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-oro group-hover:text-carbon ${
            oscuro ? 'bg-oro/[0.12] text-oro' : 'bg-crema text-oro-deep'
          }`}
        >

          <Icono className="h-6 w-6" aria-hidden="true" />
        </span>

        <h3
          className={`titulo-display mt-5 text-xl leading-snug sm:text-[1.4rem] ${
            oscuro ? 'text-crema' : 'text-carbon'
          }`}
        >
          {servicio.nombre}
        </h3>


        <p className={`mt-2 flex-1 text-sm leading-relaxed ${oscuro ? 'text-crema/60' : 'text-carbon/60'}`}>
          {servicio.descripcion}
        </p>

        <div
          className={`mt-6 flex items-center justify-between gap-3 border-t pt-4 ${
            oscuro ? 'border-white/10' : 'border-carbon/10'
          }`}
        >
          {/*
            PRECIO — se muestra "Consultar" por defecto.
            ⚠️ PARA CARGAR PRECIOS: editá el campo `precio` del servicio
            en src/data/contenido.ts (ej: precio: '$12.000').
          */}
          <div className="leading-tight">
            <span
              className={`block text-[0.6rem] uppercase tracking-[0.24em] ${
                oscuro ? 'text-crema/40' : 'text-carbon/40'
              }`}
            >
              Precio
            </span>
            <span className={`text-base font-semibold ${oscuro ? 'text-oro' : 'text-oro-deep'}`}>
              {servicio.precio}
            </span>
          </div>

          <a
            href={waLink(MENSAJES.servicio(`${servicio.nombre} (${espacio})`))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track('cta_click', { ubicacion: 'servicio', servicio: servicio.nombre, espacio })
            }
            className="inline-flex items-center gap-1.5 rounded-full bg-wapp px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-wapp-dark hover:gap-2.5"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Reservar
          </a>
        </div>
      </article>
    </Reveal>
  );
};

type BloqueProps = {
  id: string;
  piso: string;
  kicker: string;
  titulo: string;
  tituloItalico: string;
  descripcion: string;
  servicios: Servicio[];
  espacio: string;
  tono: Tono;
};

const BloqueServicios: React.FC<BloqueProps> = ({
  id,
  piso,
  kicker,
  titulo,
  tituloItalico,
  descripcion,
  servicios,
  espacio,
  tono,
}) => {
  const oscuro = tono === 'oscuro';
  const IconoPiso = oscuro ? Building2 : Layers;

  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${oscuro ? 'bg-carbon text-crema' : 'bg-crema text-carbon'}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal
          className={`flex flex-col gap-8 border-b pb-10 lg:flex-row lg:items-end lg:justify-between ${
            oscuro ? 'border-white/10' : 'border-carbon/10'
          }`}
        >

          <div className="max-w-2xl">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] ${
                oscuro ? 'bg-oro text-carbon' : 'bg-carbon text-crema'
              }`}
            >
              <IconoPiso className="h-3.5 w-3.5" aria-hidden="true" />
              {piso}
            </span>
            <p className={`kicker mt-5 ${oscuro ? 'text-oro' : 'text-oro-deep'}`}>{kicker}</p>
            <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {titulo}{' '}
              <span className={`italic ${oscuro ? 'text-oro' : 'text-oro-deep'}`}>{tituloItalico}</span>
            </h2>

          </div>
          <p
            className={`max-w-md text-base leading-relaxed ${oscuro ? 'text-crema/60' : 'text-carbon/65'}`}
          >
            {descripcion}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-4">
          {servicios.map((servicio, i) => (
            <TarjetaServicio
              key={servicio.nombre}
              servicio={servicio}
              tono={tono}
              espacio={espacio}
              delay={(i % 4) * 80}
            />
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12">
          <p className={`text-sm ${oscuro ? 'text-crema/55' : 'text-carbon/55'}`}>
            ¿No encontrás lo que buscás? Escribinos y lo vemos juntos.
          </p>
          <a
            href={waLink(MENSAJES.espacio(espacio))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('cta_click', { ubicacion: 'bloque_servicios', espacio })}
            className={`group inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all ${
              oscuro
                ? 'border-crema/25 text-crema hover:border-oro hover:bg-oro hover:text-carbon'
                : 'border-carbon/20 text-carbon hover:border-oro-deep hover:bg-carbon hover:text-crema'
            }`}
          >
            Consultar por {espacio}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

const Servicios: React.FC = () => (
  <>
    <BloqueServicios
      id="peluqueria"
      piso="Planta baja"
      kicker="Nuevo Efecto | Peluquería"
      titulo="Cortes, barba y"
      tituloItalico="color"
      descripcion="Barbería y peluquería unisex en el salón de abajo. Turnos ágiles, terminación prolija y productos profesionales para hombres, mujeres y chicos."
      servicios={SERVICIOS_PELUQUERIA}
      espacio="Peluquería"
      tono="oscuro"
    />
    <BloqueServicios
      id="beauty"
      piso="1er piso"
      kicker="Nuevo Efecto | Beauty Studio"
      titulo="Estética y"
      tituloItalico="bienestar"
      descripcion="Arriba, en un espacio tranquilo: pestañas, uñas, depilación, masajes, reiki y peinados para eventos. Salís distinta y descansada."
      servicios={SERVICIOS_BEAUTY}
      espacio="Beauty Studio"
      tono="claro"
    />
  </>
);

export default Servicios;
