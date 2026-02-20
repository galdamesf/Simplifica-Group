import type { Slide } from "../types/type";

export const SnapCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      content: "First slide",
      image: "/images/constructor2.jpg",
      isAlternate: true,
    },
    { id: 2, content: "Second slide", image: "/images/imagen2.jpg" },
    { id: 3, content: "Third slide", image: "/images/imagen3.jpg" },
    {
      id: 4,
      content: "Fourth slide",
      image: "/images/imagen4.jpg",
      isAlternate: true,
    },
    { id: 5, content: "Fifth slide", image: "/images/imagen5.jpg" },
    { id: 6, content: "Sixth slide", image: "/images/imagen1.jpg" },
  ];

  const carouselConfig = JSON.stringify({
    loadingClasses: "opacity-0",
    slidesQty: { xs: 1, lg: 3 },
    isCentered: true,
    isSnap: true,
  });

  return (
    <div
      id="snap"
      data-carousel={carouselConfig}
      className="relative w-full overflow-hidden py-6"
    >
      <div className="carousel h-[350px] flex overflow-x-auto overflow-y-hidden snap-x snap-proximity scroll-smooth touch-pan-y">
        <div className="carousel-body flex h-full gap-2 opacity-100 w-full px-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="carousel-slide h-full snap-center min-w-full lg:min-w-[33.333%] flex-shrink-0"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-base-200 shadow-sm">
                <img
                  src={slide.image}
                  alt={slide.content}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
