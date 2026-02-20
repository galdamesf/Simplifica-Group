import type { JumbotronProps } from "../types/type";

export const MainJumbotron = ({
  title,
  subtitle,
  backgroundImage,
}: JumbotronProps) => (
  <div
    className="relative z-20 mt-4 mb-[-80px] h-[450px] md:h-[650px] w-full max-w-[95%] xl:max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center text-center px-6"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center 15%",
    }}
  >
    <div className="absolute inset-0 bg-black/45 z-10" />

    <div className="relative z-20 max-w-5xl">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 drop-shadow-2xl tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow-md italic">
        {subtitle}
      </p>
    </div>
  </div>
);
