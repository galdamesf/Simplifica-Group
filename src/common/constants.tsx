import type {
  ContactInformation,
  Media,
  Feature,
  Testimonial,
} from "../types/type";
import { FacebookIcon } from "../components/footer/facebook-Icon";
import { XIcon } from "../components/footer/x-icon";
import { InstagramIcon } from "../components/footer/instagram-Icon";

export const contactInformation: ContactInformation[] = [
  {
    text: "Cerro El Plomo 5931, oficina 1707, Las Condes, Santiago",
    iconUrl: "/images/icon-location.svg",
    alt: "Location",
    link: "https://www.google.com/maps/search/?api=1&query=Cerro+El+Plomo+5931+oficina+1707+Las+Condes+Santiago",
  },
  {
    text: "+569 86051089",
    iconUrl: "/images/icon-phone.svg",
    alt: "icon phone",
  },
  {
    text: "info@empresasimplifica.com",
    iconUrl: "/images/icon-email.svg",
    alt: "Email",
  },
];

export const pages: string[] = ["Nosotros", "Servicios", "Clientes"];

export const conditions: string[] = ["Contacto", "Terminos", "Privacidad"];

export const medias: Media[] = [
  {
    text: "facebook",
    icon: <FacebookIcon />,
  },
  {
    text: "x",
    icon: <XIcon />,
  },
  {
    text: "instagram",
    icon: <InstagramIcon />,
  },
];

export const features: Feature[] = [
  {
    title: "Confianza y Transparencia",
    description:
      "Mantenemos una comunicación clara y abierta con nuestros clientes, generando relaciones sólidas y duraderas.",
    iconUrl: "/images/icon-access-anywhere.svg",
  },
  {
    title: "Eficiencia Operativa",
    description:
      "Contamos con un equipo humano, de sólidos conocimientos y capacitado bajo los últimos estándares internacionales de seguridad.",
    iconUrl: "/images/icon-security.svg",
  },
  {
    title: "Experiencia comprobada",
    description:
      "Nuestra trayectoria nos permite ofrecer soluciones adaptadas a cada sector y necesidad, respaldadas por un historial de resultados confiables.",
    iconUrl: "/images/icon-collaboration.svg",
  },
  {
    title: "Capacidad de reacción",
    description:
      "Contamos con una alta capacidad de reacción para dar solución a los problemas presentados en locaciones de nuestros clientes.",
    iconUrl: "/images/icon-any-file.svg",
  },
];

export const testimoninals: Testimonial[] = [
  {
    name: "Cristian Valdés",
    role: "Founder & CEO, Simplifica",
    image: "/images/user.png",
    quote:
      "Durante más de 10 años hemos sido los artífices invisibles de grandes proyectos para diferentes empresas que confiaron y siguen confiando en nosotros.",
  },
  {
    name: "Jose Puen",
    role: "Product Owner, Simplifica",
    image: "/images/user2.jpg",
    quote:
      "Grupo Simplifica se expande, y genera nuevas alianzas para que toda nuestra experiencia, ahora esté a tú alcance, haciendo Tú Vida, más simple.",
  },
  {
    name: "Iva Boyd",
    role: "Product Manager, Simplifica",
    image: "/images/profile-3.jpg",
    quote:
      "En Grupo Simplifica, no solo ofrecemos servicios, sino que nos convertimos en valiosos partners estratégicos, contribuyendo a la sostenibilidad operativa de nuestros clientes.",
  },
];
