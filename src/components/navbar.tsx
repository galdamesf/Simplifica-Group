export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <a className="hover:text-Gray-600" href="/Features">
            Nosotros
          </a>
        </li>
        <li>
          <a className="hover:text-Gray-600" href="/Team">
            Servicios
          </a>
        </li>
        <li>
          <a className="hover:text-Gray-600" href="/Sign In">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
