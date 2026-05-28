"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const fullText = `> booting terminal...
> loading developer mindset...
> initializing creative systems...
> ready.

~/ brain.exe

⚡ overloaded but functioning...

~/ motivation

Building things that people genuinely find useful and enjoy using.

~/ fun_fact

I like crafting visually polished interfaces, smooth interactions,
and backend systems that scale beyond just the UI.

~/ current_state

while(alive) {
   code();
}`;

const TerminalSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isInView]);

  const renderLine = (line, i) => {
    // boot sequence
    if (line.startsWith(">")) {
      return (
        <div key={i} className="text-cyan-500 dark:text-cyan-400">
          {line}
        </div>
      );
    }

    // commands
    if (line.startsWith("~/")) {
      return (
        <div
          key={i}
          className="text-green-600 dark:text-green-400 font-semibold mt-4"
        >
          {line}
        </div>
      );
    }

    // code block
    if (
      line.includes("while(alive)") ||
      line.includes("code();") ||
      line.includes("}")
    ) {
      return (
        <div key={i} className="text-yellow-600 dark:text-yellow-300">
          {line}
        </div>
      );
    }

    // normal text
    return (
      <div key={i} className="text-gray-800 dark:text-gray-300">
        {line}
      </div>
    );
  };

  return (
    <section className="pb-16" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4">

        {/* simple heading */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          Terminal
        </h2>

        <div className="w-full bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">

          {/* terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#161b22] border-b border-gray-300 dark:border-gray-800">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
              ranjan@dev:~
            </span>
          </div>

          {/* terminal body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap min-h-[420px]">

            {displayedText.split("\n").map((line, i) =>
              renderLine(line, i)
            )}

            {/* blinking cursor */}
            {displayedText.length < fullText.length && (
              <span className="inline-block w-3 h-5 ml-1 bg-black dark:bg-white animate-pulse rounded-sm align-middle"></span>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
