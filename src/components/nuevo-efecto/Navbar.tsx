import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { MENSAJES, track, waLink } from '@/config/site';

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Peluquería', href: '#peluqueria' },
  { label: 'Beauty Studio', href: '#beauty' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Producción', href: '#produccion' },

];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Resalta el link de la sección visible.
      const y = window.scrollY + 140;
      let actual = '#inicio';
      LINKS.forEach(({ href }) => {
        const el = document.querySelector(href) as HTMLElement | null;
        if (el && el.offsetTop <= y) actual = href;
      });
      setActivo(actual);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || abierto
          ? 'border-b border-white/10 bg-carbon/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-carbon/70 to-transparent'
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
      >
        <a
          href="#inicio"
          onClick={() => setAbierto(false)}
          className="group flex flex-col leading-none"
        >
          <span className="titulo-display text-lg tracking-[0.22em] text-crema transition-colors group-hover:text-oro sm:text-xl">
            NUEVO EFECTO
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-oro/80">
            Peluquería &amp; Beauty
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-oro ${
                  activo === link.href ? 'text-oro' : 'text-crema/75'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-oro transition-transform duration-300 ${
                    activo === link.href ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waLink(MENSAJES.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('cta_click', { ubicacion: 'navbar', destino: 'whatsapp' })}
            className="hidden items-center gap-2 rounded-full bg-wapp px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-wapp/20 transition-all hover:bg-wapp-dark hover:shadow-wapp/30 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir turno
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-mobile"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-crema transition-colors hover:border-oro hover:text-oro lg:hidden"
          >
            {abierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-white/10 bg-carbon/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${

          abierto ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setAbierto(false)}
                className="flex items-center justify-between border-b border-white/5 py-4 titulo-display text-xl text-crema transition-colors hover:text-oro"
              >
                {link.label}
                <span className="text-xs text-oro/50">0{LINKS.indexOf(link) + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pb-6">
          <a
            href={waLink(MENSAJES.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setAbierto(false);
              track('cta_click', { ubicacion: 'menu_mobile', destino: 'whatsapp' });
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-wapp px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-wapp-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir turno por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
