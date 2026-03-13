import { team } from "../common/constants";

export const TeamSection = () => {
  return (
    <section className="bg-Dark-850 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Nuestro Equipo
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              {/* Foto */}
              <div className="w-full aspect-[3/4] bg-gray-700 rounded-xl overflow-hidden mb-4">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Nombre y cargo */}
              <h3 className="text-white font-semibold text-center text-sm md:text-base">
                {member.name}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm text-center mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
