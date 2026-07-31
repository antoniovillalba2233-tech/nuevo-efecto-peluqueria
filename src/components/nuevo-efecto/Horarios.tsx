import React from 'react';
import { Clock } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { useEstadoApertura } from './EstadoHorario';
import { HORARIOS, MENSAJES, track, waLink } from '@/config/site';

/**
 * HORARIOS
 * ⚠️ Para cambiar los horarios: src/config/site.ts → HORARIOS
 * El cartel "Abierto ahora / Cerrado" se calcula solo con esos valores.
 */
const Horarios: React.FC = () => {
  const estado = useEstadoApertura();

  return (
    <section id="horarios" className="scroll-mt-20 bg-crema py-20 text-carbon sm:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="kicker text-oro-deep">Cuándo venir</p>
          <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl">
            Horarios de <span className="italic text-oro-deep">atención</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-[2rem] border border-carbon/10 bg-white shadow-[0_20px_60px_-40px_rgba(14,14,16,0.5)]">
            <div
              className={`flex flex-col items-start gap-3 border-b border-carbon/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 ${
                estado.abierto ? 'bg-wapp/10' : 'bg-crema'

              }`}
            >
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-carbon text-oro">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span
                    className={`block text-base font-bold ${
                      estado.abierto ? 'text-wapp-dark' : 'text-carbon'
                    }`}
                  >
                    {estado.etiqueta}
                  </span>
                  <span className="block text-sm text-carbon/55">{estado.detalle}</span>
                </span>
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.22em] text-carbon/40">
                Hora de Argentina
              </span>
            </div>

            <table className="w-full text-left">
              <caption className="sr-only">Horarios de atención de lunes a domingo</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Día</th>
                  <th scope="col">Horario</th>
                </tr>
              </thead>
              <tbody>
                {HORARIOS.map((h) => {
                  const esHoy = h.diaSemana === estado.diaActual;
                  return (
                    <tr
                      key={h.dia}
                      className={`border-b border-carbon/[0.07] transition-colors last:border-0 hover:bg-crema/70 ${
                        esHoy ? 'bg-oro/10' : ''
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-left align-middle sm:px-8 sm:py-[1.15rem]"
                      >
                        <span
                          className={`titulo-display text-lg sm:text-xl ${
                            esHoy ? 'text-oro-deep' : 'text-carbon'
                          }`}
                        >
                          {h.dia}
                        </span>
                        {esHoy && (
                          <span className="ml-2 rounded-full bg-oro px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-carbon">
                            Hoy
                          </span>
                        )}
                      </th>
                      <td className="px-6 py-4 text-right align-middle sm:px-8 sm:py-[1.15rem]">
                        {h.abre && h.cierra ? (
                          <span className="font-mono text-sm font-medium text-carbon/80 sm:text-base">
                            {h.abre} – {h.cierra} h
                          </span>
                        ) : (
                          <span className="text-sm font-medium uppercase tracking-[0.14em] text-carbon/35">
                            Cerrado
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-carbon/55">
            Atendemos con turno previo. Si necesitás otro horario, escribinos y lo acomodamos.
          </p>
          <a
            href={waLink(MENSAJES.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('cta_click', { ubicacion: 'horarios', destino: 'whatsapp' })}
            className="inline-flex items-center gap-2 rounded-full bg-wapp px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-wapp-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Consultar disponibilidad
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Horarios;
