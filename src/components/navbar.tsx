export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-6 mt-8">
        <li>
          <a className="hover:text-Gray-600" href="/Nosotros">
            Nosotros
          </a>
        </li>
        <li>
          <a className="hover:text-Gray-600" href="/Servicios">
            Servicios
          </a>
        </li>
        <li>
          <a className="hover:text-Gray-600" href="/Contacto">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
