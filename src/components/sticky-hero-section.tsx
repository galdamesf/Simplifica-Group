import { useEffect, useRef, useState } from "react";

interface StickyHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const StickyHeroSection = ({
  title,
  subtitle,
  backgroundImage,
}: StickyHeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculamos qué tan lejos está el centro de la sección del centro de la pantalla
      const sectionCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      const distanceFromCenter = sectionCenter - screenCenter;

      const speed = 0.2; // Ajusta este valor para más o menos movimiento
      setOffset(distanceFromCenter * speed);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al inicio para posicionar correctamente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-Gray-600"
    >
      {/* Imagen con corrección de desplazamiento */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // El scale(1.3) da más margen para que el translateY no muestre bordes negros
          transform: `translateY(${offset}px) scale(1.8)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Texto */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-white mt-6 text-lg md:text-2xl font-light drop-shadow-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
