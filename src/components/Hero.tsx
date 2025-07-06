import React from "react";
import { CodeIcon } from "lucide-react";
import { CodeSnippet } from "./modular/CodeSnippet";
import { CODE_SAMPLES } from "../constants/globalConstants";


export const Hero = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold h-fit tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Test Your</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Coding Knowledge!
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Challenge yourself with our interactive coding quizzes. Test
                your skills, learn new concepts, and track your progress.
              </p>
              {/* <div
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                aria-label="Hero Call To Actions"
              >
                <button
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                >
                  <CodeIcon size={20} className="mr-2" />
                  Start Test
                </button>
                <button
                  className="mt-3 sm:mt-0 sm:ml-3 w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-cyan-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div> */}
            </div>
          </main>
        </div>
      </div>

      <aside className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900">
        <div className="h-full w-full flex items-center justify-center px-8">
          <CodeSnippet />
        </div>
      </aside>
    </section>
  );
};
