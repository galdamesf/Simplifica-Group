import {
  MainJumbotron,
  Header,
  Hero,
  Features,
  MoreInformation,
  Testimonials,
  SnapCarousel,
  Form,
  Contact,
  Footer,
} from "../components";

interface CurvyBgProps {
  className?: string;
}

const CurvyBg = ({ className }: CurvyBgProps) => (
  <svg
    className={className}
    viewBox="0 0 1440 449"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H0V413.956z"
      className="fill-Dark-850"
    />
  </svg>
);

export const Home = () => {
  return (
    <main className="m-auto">
      <section className="bg-Orange-800 p-6 relative overflow-hidden pb-10">
        <Header />

        <div className="relative z-20 mt-[-14px] flex flex-row flex-nowrap gap-2 md:gap-4 justify-center px-2 md:px-4 w-full max-w-[1400px] mx-auto overflow-visible">
          <img
            className="w-[30%] min-w-[100px] md:w-full max-w-[420px] aspect-[3/4] rounded-lg md:rounded-xl object-cover shadow-xl"
            src="/images/simplifica2.jpg"
            alt="intro illustration"
          />

          <img
            className="w-[30%] min-w-[100px] md:w-full max-w-[420px] aspect-[3/4] rounded-lg md:rounded-xl object-cover shadow-xl"
            src="/images/simplifica.jpg"
            alt="intro illustration"
          />

          <img
            className="w-[30%] min-w-[100px] md:w-full max-w-[420px] aspect-[3/4] rounded-lg md:rounded-xl object-cover shadow-xl"
            src="/images/simplifica4.jpg"
            alt="intro illustration"
          />
        </div>

        <CurvyBg className="absolute bottom-0 left-0 w-[101%] z-0 pointer-events-none h-auto" />
      </section>

      <section className="bg-Dark-850 p-6 pb-[300px] md:pb-[450px] ">
        <Hero />

        <Features />

        <div className="relative pb-15 z-20 mt-25">
          <MainJumbotron
            title="Simplificamos tus proyectos, construimos tus ideas"
            subtitle=""
            backgroundImage="/images/constructor.jpg"
          />
        </div>

        <MoreInformation />

        <SnapCarousel />

        <Testimonials />
      </section>

      <section className="bg-Orange-800 p-10 relative rounded-tl-[100px] rounded-tr-[100px] -mt-[20px] md:-mt-[100px] pt-14 py-2">
        <Form />

        <Contact />

        <Footer />
      </section>
    </main>
  );
};
