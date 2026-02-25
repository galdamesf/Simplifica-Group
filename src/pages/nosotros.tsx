import {
  Header,
  InfoSection,
  StickyHeroSection,
  Testimonials,
  Footer,
} from "../components";

export const Nosotros = () => {
  return (
    <main className="m-auto overflow-x-hidden bg-white">
      <section className="bg-Orange-800 p-4 relative overflow-hidden pb-2">
        <Header />
      </section>
      <StickyHeroSection
        title="Nuestra Historia y Compromiso"
        subtitle="Conoce más sobre el equipo detrás de tus proyectos"
        backgroundImage="/images/santiago.jpg"
      />

      <InfoSection
        title="Historia"
        content="Fundada con una visión clara, nuestra empresa ha sido un pilar en el desarrollo de infraestructuras de alta precisión. A lo largo de los años, hemos consolidado nuestra presencia mediante la excelencia en la gestión y un compromiso ético inquebrantable.\n\nBuscamos permanentemente nuevos desafíos que nos permitan aportar soluciones tecnológicas de vanguardia en cada proyecto."
        image="/images/constructor.jpg"
      />

      <InfoSection
        title="Quiénes somos"
        subtitle="Construir valores"
        content="Somos un grupo humano profesional con altas competencias dedicado al servicio de nuestras obras y clientes. \n\nLograr excelencia en la gestión para apoyar a nuestros clientes en sus desafíos con una mirada de largo plazo es lo que nos define."
        image="/images/imagen7.jpg"
        reverse={true}
      />

      <StickyHeroSection
        title="Calidad que trasciende"
        subtitle="Especialistas en estructuras metálicas y obras civiles"
        backgroundImage="/images/imagen6.jpg"
      />

      <section className="bg-Dark-850 py-32 px-6">
        <Testimonials />
      </section>

      <section className="bg-Orange-800 p-10 relative rounded-tl-[100px] rounded-tr-[100px] -mt-[20px] md:-mt-[100px] pt-14 py-2">
        <Footer />
      </section>
    </main>
  );
};
