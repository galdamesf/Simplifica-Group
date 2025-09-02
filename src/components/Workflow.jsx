import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import imagen from "../assets/imagen.png";
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.jpg";
import imagen5 from "../assets/imagen5.jpg";

// Datos de ejemplo para la demo
const checklistItems = [
  {
    title: "Líderes en Facility Services",
    description:
      "Grupo Simplifica, un referente en Facility y servicios integrales. Nos destacamos por atender a grandes empresas en los sectores corporativo, retail, alimenticio y comercial",
  },
  {
    title: "Eficiencia Garantizada",
    description:
      "Con una sólida trayectoria, hemos brindado soluciones efectivas en Santiago, Valparaíso, Viña del Mar y más. Nuestra capacidad de reacción es excepcional, asegurando respuestas rápidas a cualquier desafío en las locaciones de nuestros clientes",
  },
  {
    title: "Compromiso con la Excelencia",
    description:
      "En Grupo Simplifica, no solo ofrecemos servicios, sino que nos convertimos en valiosos partners estratégicos, contribuyendo a la sostenibilidad operativa de nuestros clientes. ",
  },
  {
    title: "Tu Éxito, Nuestro Objetivo",
    description:
      "¡Confía en nosotros para simplificar tus operaciones y potenciar tu éxito empresarial!",
  },
];

// Todos los servicios en un array para renderizar con map
const services = [
  {
    title: "Mantenimiento e instalación de especialidades",
    description:
      "Climatización (Industrial, comercial y domiciliaria), Gasfitería (incluye empalmes de AP y alcantarillado), Eléctrica (Técnicos con certificación SEC), Mobiliario en general.",
    image: imagen1,
    color: "orange-400",
    shadow: "hover:shadow-orange-500/20",
  },
  {
    title: "Mantenimiento de Infraestructura",
    description:
      "Infraestructura metálica, infraestructura liviana, revestimientos, cielos, pavimentos, cubiertas, pinturas exteriores e interiores.",
    image: imagen2,
    color: "green-400",
    shadow: "hover:shadow-green-500/20",
  },
  {
    title: "Trade Marketing",
    description:
      "Mobiliario, stands, gráficas, letreros/bastidores, proyectos y eventos, merchandising en general, diseño gráfico, producción e implementación.",
    image: imagen3,
    color: "blue-400",
    shadow: "hover:shadow-blue-500/20",
  },
  {
    title: "Obras Civiles",
    description:
      "Menores de edificación e infraestructura general (obra gruesa y terminaciones).",
    image: imagen4,
    color: "pink-400",
    shadow: "hover:shadow-pink-500/20",
  },
  {
    title: "Auditorias Sanitarias",
    description:
      "(gestión en resoluciones sanitarias SEREMI, auditorias de levantamiento previo y post operación) CERTIFICADOS HACCP - E-ISO 22.000, RCA y capacitaciones mensuales.",
    image: imagen5,
    color: "yellow-400",
    shadow: "hover:shadow-yellow-500/20",
  },
];

const Workflow = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <div className="mt-20 min-h-screen text-white px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center pt-6 tracking-wide">
        Quiénes{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Somos
        </span>
      </h2>

      {/* Sección con imagen y lista */}
      <div className="flex flex-wrap items-center justify-center max-w-7xl mx-auto mb-20">
        <div className="p-2 w-full lg:w-1/2 flex justify-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-sm">
            <img
              src={imagen}
              alt="Imagen de código"
              className="w-full rounded-t-2xl shadow-lg"
            />
            <div className="p-4 text-center">
              <h5 className="text-xl font-semibold text-white">
                Cristopher Valdés Vergara{" "}
              </h5>
              <p className="text-neutral-400">Jefe de proyectos y mantención</p>
            </div>
          </div>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className={`flex mb-12 transition-all duration-700 ease-out transform ${
                visibleItems.includes(index)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              } hover:translate-x-2 hover:scale-105 cursor-pointer group`}
            >
              <div className="text-green-400 mx-6 bg-neutral-800 h-10 w-10 p-2 justify-center items-center rounded-full transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                <CheckCircle2 className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="transition-all duration-300 group-hover:translate-y-1">
                <h5 className="mt-1 mb-2 text-xl transition-colors duration-300 group-hover:text-orange-400">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de servicios con las cards separadas en 2 filas */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 text-white">
          Nuestros{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Servicios
          </span>
        </h3>

        {/* Fila superior para las 3 primeras cards */}
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700 transition-all duration-700 ease-out transform w-full md:w-1/3 hover:-translate-y-2 hover:scale-105 cursor-pointer group shadow-2xl ${service.shadow}`}
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index)
                  ? "translateY(0px)"
                  : "translateY(20px)",
              }}
            >
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h4
                  className={`text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-${service.color}`}
                >
                  {service.title}
                </h4>
                <p className="text-neutral-400 text-lg leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fila inferior para las 2 cards restantes */}
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3} // Se agrega +3 para asegurar que las keys sean únicas
              className={`bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700 transition-all duration-700 ease-out transform w-full md:w-1/3 hover:-translate-y-2 hover:scale-105 cursor-pointer group shadow-2xl ${service.shadow}`}
              style={{
                transitionDelay: `${(index + 3) * 200}ms`, // Se ajusta el delay
                opacity: visibleItems.includes(index + 3) ? 1 : 0,
                transform: visibleItems.includes(index + 3)
                  ? "translateY(0px)"
                  : "translateY(20px)",
              }}
            >
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h4
                  className={`text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-${service.color}`}
                >
                  {service.title}
                </h4>
                <p className="text-neutral-400 text-lg leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .group:nth-child(odd):hover {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Workflow;
