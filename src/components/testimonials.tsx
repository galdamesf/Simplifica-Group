import { testimoninals } from "../common/constants";
import type { Testimonial } from "../types/type";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
  return (
    <div className="mt-20 flex flex-col gap-6 items-center py-10 relative w-[320px] md:w-[480px] mx-auto xl:flex-row xl:w-[920px]">
      <img
        className="size-6 absolute top-0 left-8"
        src="/images/bg-quotes.png"
        alt="bg quotes"
        style={{
          filter:
            "invert(56%) sepia(81%) saturate(3062%) hue-rotate(346deg) brightness(140%) contrast(125%)",
        }}
      />

      {testimoninals.map((testimonial: Testimonial) => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </div>
  );
};
