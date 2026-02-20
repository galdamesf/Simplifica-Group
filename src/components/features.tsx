import { features } from "../common/constants";
import type { Feature } from "../types/type";

export const Features = () => {
  return (
    <div className="grid grid-cols-1 p-6 gap-y-20 gap-x-10 mt-[40px] md:grid-cols-2 max-w-[920px] mx-auto">
      {features.map(({ title, description, iconUrl }: Feature) => (
        <div
          key={title}
          className="flex flex-col items-center text-center text-white"
        >
          <div className="h-20 flex items-center justify-center mb-8">
            <img
              src={iconUrl}
              alt={title}
              className="h-full w-auto object-contain"
              style={{
                filter:
                  "invert(56%) sepia(81%) saturate(3062%) hue-rotate(346deg) brightness(130%) contrast(80%)",
              }}
            />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2 leading-tight">{title}</h3>
            <p className="text-sm md:text-base opacity-90 max-w-[350px]">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
