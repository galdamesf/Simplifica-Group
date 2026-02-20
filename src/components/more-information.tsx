export const MoreInformation = () => {
  return (
    <div className="mt-30 pb-15 md:flex md:items-center md:gap-4 max-w-[920px] mx-auto">
      <img
        className="mb-2 md:w-[380px] rounded-xl"
        src="/images/constructor1.jpg"
        alt="illustration stay productive"
      />

      <div>
        <h2 className="font-bold mb-4">Simplifica Constructora</h2>

        <p className="text-sm mb-4">
          En Grupo Simplifica trabajamos con retail y grandes tiendas.
          Ejecutamos construcciones, remodelaciones y mantenciones, sin afectar
          la operación del negocio. Cumplimos plazos, protocolos, estándares
          técnicos y coordinación total con cada cliente.
        </p>

        <p className="text-sm mb-4">
          Sabemos que en retail, el tiempo es dinero, y los errores no son
          opción. Ofrecemos un servicio profesional, para aquellas empresas que
          no pueden parar!
        </p>

        <a
          href="#"
          className="text-Orange-400 flex item-center gap-2 hover:text-Orange-800 cursor-pointer"
        >
          <p>Conoce nuestros servicios</p>
          <img src="/images/icon-arrow.svg" alt="icon arrow" />
        </a>
      </div>
    </div>
  );
};
