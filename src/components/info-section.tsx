interface InfoSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  image: string;
  reverse?: boolean; // Para alternar si la imagen va a la izquierda o derecha
}

export const InfoSection = ({
  title,
  subtitle,
  content,
  image,
  reverse,
}: InfoSectionProps) => {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-20">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Contenedor de Imagen */}
        <div className={`w-full ${reverse ? "md:order-last" : ""}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-2xl object-cover aspect-video md:aspect-square"
          />
        </div>

        {/* Contenedor de Texto */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-Orange-800">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-xl font-semibold text-Dark-850 -mt-2">
              {subtitle}
            </h3>
          )}
          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};
