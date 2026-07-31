import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Página no encontrada — NUEVO EFECTO';
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-carbon px-5 text-crema">
      <div className="max-w-md text-center">
        <p className="kicker text-oro">Error 404</p>
        <h1 className="titulo-display mt-4 text-5xl leading-tight sm:text-6xl">
          No encontramos <span className="italic text-oro">esta página</span>
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-crema/60">
          Puede que el link esté viejo o mal escrito. Volvé al inicio para ver los servicios de la
          peluquería y del beauty studio.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-oro px-6 py-3.5 text-sm font-semibold text-carbon transition-colors hover:bg-oro-soft"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
