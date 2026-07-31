import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PREGUNTAS } from '@/data/contenido';
import { MENSAJES, track, waLink } from '@/config/site';

/**
 * PREGUNTAS FRECUENTES (acordeón)
 * ⚠️ Para editar preguntas y respuestas: src/data/contenido.ts → PREGUNTAS
 */
const Preguntas: React.FC = () => {
  const [abierta, setAbierta] = useState<string>('');

  const alCambiar = (valor: string) => {
    setAbierta(valor);
    if (valor) {
      const item = PREGUNTAS.find((p) => p.id === valor);
      track('faq_open', { pregunta: item?.pregunta ?? valor, tema: item?.tema ?? '' });
    }
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-carbon py-20 text-crema sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Columna de texto */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="kicker text-oro">Antes de tu turno</p>
              <h2 className="titulo-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                Preguntas
                <br />
                <span className="italic text-oro">frecuentes</span>
              </h2>
              <span className="mt-7 block h-px w-32 linea-oro" />
              <p className="mt-7 max-w-md text-base leading-relaxed text-crema/60 sm:text-lg">
                Lo que más nos consultan por WhatsApp, respondido de una vez: turnos, pagos,
                cuánto dura cada servicio y cómo cuidar el trabajo cuando volvés a casa.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-9">
              <div className="rounded-[1.75rem] border border-white/10 bg-carbon-soft p-6 sm:p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oro/15 text-oro">
                  <HelpCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="titulo-display mt-4 text-xl text-crema sm:text-2xl">
                  ¿Te quedó otra duda?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-crema/55">
                  Escribinos y te contestamos con el horario libre más cercano. Sin vueltas.
                </p>
                <a
                  href={waLink(MENSAJES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('cta_click', { ubicacion: 'faq', destino: 'whatsapp' })}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-wapp px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-wapp-dark sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Preguntar por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Acordeón */}
          <Reveal delay={80}>
            <Accordion
              type="single"
              collapsible
              value={abierta}
              onValueChange={alCambiar}
              className="flex flex-col gap-3.5"
            >
              {PREGUNTAS.map((p, i) => {
                const activa = abierta === p.id;
                const Icono = p.icono;
                return (
                  <AccordionItem
                    key={p.id}
                    value={p.id}
                    className={`overflow-hidden rounded-[1.5rem] border bg-carbon-soft transition-colors duration-300 ${
                      activa
                        ? 'border-oro/45 bg-carbon-soft'
                        : 'border-white/10 hover:border-oro/30'
                    }`}
                  >
                    <AccordionTrigger className="group gap-4 px-5 py-5 text-left hover:no-underline sm:px-7 sm:py-6 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-oro/70">
                      <span className="flex flex-1 items-start gap-4">
                        <span
                          className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                            activa
                              ? 'border-oro/40 bg-oro/15 text-oro'
                              : 'border-white/10 bg-white/[0.04] text-crema/60 group-hover:text-oro'
                          }`}
                        >
                          <Icono className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                        </span>
                        <span className="flex flex-col gap-1.5">
                          <span className="flex items-center gap-2.5">
                            <span className="font-mono text-[0.7rem] text-oro/60">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-crema/40">
                              {p.tema}
                            </span>
                          </span>
                          <span className="titulo-display text-lg leading-snug text-crema transition-colors group-hover:text-oro sm:text-xl">
                            {p.pregunta}
                          </span>
                        </span>
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="space-y-3.5 px-5 pb-6 pt-0 sm:px-7 sm:pb-7 sm:pl-[4.5rem]">
                      {p.respuesta.map((parrafo) => (
                        <p
                          key={parrafo.slice(0, 24)}
                          className="text-[0.95rem] leading-relaxed text-crema/65"
                        >
                          {parrafo}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
