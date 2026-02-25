interface Props {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const TestimonialCard = ({ name, role, image, quote }: Props) => {
  return (
    /* h-full: Obliga a la tarjeta a ocupar todo el alto disponible del grid */
    /* flex flex-col: Permite controlar el espacio interno verticalmente */
    <div className="bg-Navy-850 rounded-xl p-8 flex flex-col h-full shadow-lg">
      {/* flex-grow: Este bloque crecerá para rellenar el espacio vacío si el texto es corto */}
      <blockquote className="text-[15px] mb-6 flex-grow leading-relaxed italic text-white/90">
        “{quote}”
      </blockquote>

      {/* mt-auto: Asegura que el nombre y la foto siempre se queden pegados al fondo */}
      <div className="flex gap-3 items-center mt-auto pt-4 border-t border-white/10">
        <img
          className="size-12 rounded-full object-cover shrink-0"
          src={image}
          alt={name}
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-[13px] leading-tight text-white">
            {name}
          </h3>
          <p className="text-[11px] text-white/60">{role}</p>
        </div>
      </div>
    </div>
  );
};
