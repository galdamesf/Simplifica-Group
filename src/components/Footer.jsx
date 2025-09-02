import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  const footerSections = {
    useful: [
      { text: "Acerca de nosotros", href: "/" },
      { text: "Nuestros clientes", href: "/" },
      { text: "Para empresas", href: "/empresas" },
    ],
    legal: [
      { text: "Política de privacidad", href: "#" },
      { text: "Términos de servicio", href: "#" },
    ],
    social: [
      {
        text: "Lunes a domingo de 09:00 a 19:00 hrs.",
        href: "#",
        isDescription: true,
      },
    ],
  };

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <img src={Logo} alt="Simplifica Group Logo" className="h-35 mb-4" />
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-white">
              Enlaces Útiles
            </h3>
            <ul className="space-y-2">
              {footerSections.useful.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-white">
              Horario de atención
            </h3>
            <ul className="space-y-2">
              {footerSections.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 pt-8 border-t border-neutral-700">
          <div className="flex items-center justify-center">
            <p className="ml-2 text-neutral-300">
              Simplifica Group © {new Date().getFullYear()} - Todos los derechos
              reservados
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-4">
            {/* Twitter */}
            <a
              href="#"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
