"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TerminalSection = () => {
  return (
    <section className="pb-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Terminal
      </h2>
      <div className="container max-w-7xl mx-auto px-4">

        <div className="w-full bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">

          {/* terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#161b22] border-b border-gray-300 dark:border-gray-800 transition-colors duration-300">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
              ranjan@dev:~
            </span>
          </div>

          {/* terminal body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base text-black dark:text-gray-300 leading-relaxed whitespace-pre-line transition-colors duration-300">

            <Typewriter
              words={[
`> brain.exe

⚡ overloaded but functioning...

> motivation

Building things that people genuinely find useful and enjoy using.

> fun_fact

I like crafting visually polished interfaces, smooth interactions,
and backend systems that scale beyond just the UI.

> current_state

while(alive) {
   code();
}`
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={28}
              deleteSpeed={0}
              delaySpeed={999999}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
