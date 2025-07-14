import { TIMELINE } from "../../constants/aboutConstants";

export const JourneySection = () => (
  <section className="mb-16 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-10 text-center">
      Our Journey
    </h2>

    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500" />

      <div className="relative z-10">
        {TIMELINE.map((item, idx) => (
          <div
            key={item.year}
            className={`mb-16 flex flex-col md:flex-row items-center ${idx % 2 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* text box */}
            <div className="md:w-1/2 md:px-12 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">{item.year}</h3>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-300">{item.description}</p>
            </div>

            {/* dot */}
            <div
              className={`rounded-full bg-gray-800 border-4 ${idx % 2 ? "border-cyan-500" : "border-purple-500"
                } w-10 h-10 absolute left-1/2 -translate-x-1/2`}
            />

            {/* spacer */}
            <div className="md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
