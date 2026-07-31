import React from 'react';
import Seo from '@/components/nuevo-efecto/Seo';
import Navbar from '@/components/nuevo-efecto/Navbar';
import Hero from '@/components/nuevo-efecto/Hero';
import Espacios from '@/components/nuevo-efecto/Espacios';
import Servicios from '@/components/nuevo-efecto/Servicios';
import Equipo from '@/components/nuevo-efecto/Equipo';
import Galeria from '@/components/nuevo-efecto/Galeria';
import Ubicacion from '@/components/nuevo-efecto/Ubicacion';
import Horarios from '@/components/nuevo-efecto/Horarios';
import Preguntas from '@/components/nuevo-efecto/Preguntas';
import Produccion from '@/components/nuevo-efecto/Produccion';
import Footer from '@/components/nuevo-efecto/Footer';

import BotonWhatsApp from '@/components/nuevo-efecto/BotonWhatsApp';

/**
 * NUEVO EFECTO — sitio de una sola página.
 * Toda la configuración editable está en:
 *   · src/config/site.ts     → WhatsApp, dirección, mapa, Instagram, horarios
 *   · src/data/contenido.ts  → servicios, precios, equipo, galería, imágenes
 */
const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-carbon text-crema">
      <Seo />

      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-oro focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-carbon"
      >
        Ir al contenido
      </a>

      <Navbar />

      <main>
        <Hero />
        <Espacios />
        <Servicios />
        <Equipo />
        <Galeria />
        <Ubicacion />
        <Horarios />
        <Preguntas />
        <Produccion />

      </main>

      <Footer />
      <BotonWhatsApp />
    </div>
  );
};

export default AppLayout;
