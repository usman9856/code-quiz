import { LanguageCard } from "./LanguageCard";
import { LANGUAGES } from "../constants/globalConstants";

export const LanguageGrid = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Language
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Select a programming language to test your knowledge and improve
            your skills.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANGUAGES.map((language, index) => {
            const Icon = language.icon;
            return (
              <LanguageCard
                key={index}
                title={language.title}
                description={language.description}
                icon={<Icon />}
                color={language.color}

              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
