import { testimoninals } from "../common/constants";
import type { Testimonial } from "../types/type";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
  return (
    <div
      className="mt-20 relative w-[320px] md:w-[480px] xl:w-[1100px] mx-auto pb-2 pt-6
                    grid grid-cols-1 gap-6 
                    xl:grid-cols-3 items-stretch"
    >
      <img
        className="size-6 absolute -top-4 left-8"
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
