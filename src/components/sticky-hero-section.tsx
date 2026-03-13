// StickyHeroSection.tsx
import { useEffect, useRef } from "react";

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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!titleRef.current || !subtitleRef.current) return;

        if (entry.isIntersecting) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "translateY(0)";
        } else {
          titleRef.current.style.opacity = "0";
          titleRef.current.style.transform = "translateY(24px)";
          subtitleRef.current.style.opacity = "0";
          subtitleRef.current.style.transform = "translateY(24px)";
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[65vh] md:h-[80vh] overflow-hidden"
    >
      {/* Imagen estática */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Texto */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms 300ms, transform 700ms 300ms",
            }}
          >
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-white mt-6 text-lg md:text-2xl font-light drop-shadow-lg"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms 500ms, transform 700ms 500ms",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
