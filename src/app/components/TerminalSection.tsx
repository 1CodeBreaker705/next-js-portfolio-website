"use client";

import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "framer-motion";

const TerminalSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartTyping(true);
    }
  }, [isInView]);

  return (
    <section className="pb-16" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4">

        {/* section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono">
          Terminal
        </h2>

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
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed whitespace-pre-line transition-colors duration-300 min-h-[420px]">

            {startTyping && (
              <>
                {/* boot sequence */}
                <div className="text-cyan-500 dark:text-cyan-400 mb-8">
                  <Typewriter
                    words={[
`> booting terminal...
> loading developer mindset...
> initializing creative systems...
> ready.

`
                    ]}
                    loop={1}
                    cursor={false}
                    typeSpeed={35}
                    deleteSpeed={0}
                    delaySpeed={500}
                  />
                </div>

                {/* main content */}
                <div className="text-gray-800 dark:text-gray-300">

                  <div className="text-green-600 dark:text-green-400">
                    <Typewriter
                      words={["➜ brain.exe"]}
                      loop={1}
                      cursor={false}
                      typeSpeed={40}
                      deleteSpeed={0}
                      delaySpeed={500}
                    />
                  </div>

                  <p className="mt-3 mb-6">
                    ⚡ overloaded but functioning...
                  </p>

                  <div className="text-green-600 dark:text-green-400">
                    ➜ motivation
                  </div>

                  <p className="mt-3 mb-6 text-gray-700 dark:text-gray-300">
                    Building things that people genuinely find useful and enjoy using.
                  </p>

                  <div className="text-green-600 dark:text-green-400">
                    ➜ fun_fact
                  </div>

                  <p className="mt-3 mb-6 text-gray-700 dark:text-gray-300">
                    I like crafting visually polished interfaces, smooth interactions,
                    and backend systems that scale beyond just the UI.
                  </p>

                  <div className="text-green-600 dark:text-green-400">
                    ➜ current_state
                  </div>

                  <pre className="mt-3 text-gray-700 dark:text-gray-300">
{`while(alive) {
   code();
}`}
                  </pre>

                  {/* blinking cursor */}
                  <div className="mt-6 flex items-center">
                    <span className="text-green-600 dark:text-green-400">
                      ➜
                    </span>

                    <span className="ml-2 w-3 h-5 bg-black dark:bg-white animate-pulse rounded-sm"></span>
                  </div>

                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
