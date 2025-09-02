import React, { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

// Componente del ícono de WhatsApp usando SVG
const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.687"
      fill={color}
    />
  </svg>
);

const WhatsAppFloatingButton = ({
  phoneNumber,
  message = "Hola! Me interesa saber más información.",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón después de un pequeño delay para mejor UX
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    // Limpiar el número de espacios, guiones y caracteres especiales
    const cleanNumber = phoneNumber.replace(/[\s\-()]/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    console.log("Opening WhatsApp URL:", whatsappURL); // Para debug
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const toggleTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip/Mensaje expandido */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 mb-2 w-64 animate-in slide-in-from-bottom-2 border">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar mensaje"
          >
            <X size={16} />
          </button>
          <div className="pr-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              ¡Hablemos por WhatsApp!
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              ¿Necesitas asesoría empresarial? Estamos aquí para simplificar tus
              operaciones.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Iniciar chat
            </button>
          </div>
          {/* Flecha del tooltip */}
          <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* Botón principal */}
      <div className="relative">
        <button
          onClick={toggleTooltip}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce relative z-10"
          style={{
            animationDelay: "2s",
            animationDuration: "2s",
            animationIterationCount: "3",
            animationFillMode: "forwards",
          }}
          aria-label="Abrir chat de WhatsApp"
        >
          <WhatsAppIcon size={24} color="white" />
        </button>
      </div>

      {/* Botón directo de WhatsApp (oculto, para funcionalidad directa) */}
      <button
        onClick={handleWhatsAppClick}
        className="sr-only"
        aria-label="Ir directamente a WhatsApp"
      >
        Contactar por WhatsApp
      </button>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Grupo Simplifica
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            brindando soluciones especificas
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          En Grupo Simplifica, no solo ofrecemos servicios, sino que nos
          convertimos en valiosos partners estratégicos, contribuyendo a la
          sostenibilidad operativa de nuestros clientes. ¡Confía en nosotros
          para simplificar tus operaciones y potenciar tu éxito empresarial!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Formulario
          </a>
        </div>
        <div className="flex mt-10 justify-center px-10">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatingButton
        phoneNumber="56951596668" // Número con código país de Chile
        message="¡Hola! Vi el sitio de Grupo Simplifica y me interesa conocer más sobre sus servicios de consultoría empresarial."
      />
    </>
  );
};

export default HeroSection;
