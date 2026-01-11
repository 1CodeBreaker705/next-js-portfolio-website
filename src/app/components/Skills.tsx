import React from "react";
import Image from "next/image";
import { skills } from "@/contents/skills";
const Skills = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 mb-50">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My Skills And Tech-Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6  gap-8">
        {skills.map((skill, index) => (
          <article
            key={index}
            className="group bg-light dark:bg-dark/50 rounded-lg shadow-md  text-center ring-2 ring-black dark:ring-white transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:cursor-pointer hover:ring-primary "
          >
            <div className=" flex justify-center mb-3 ">
              <Image
                src={skill.image}
                alt={skill.title}
                height={100}
                width={100}
                className="object-contain w-20 h-20 border-4"
              />
             </div>
            <div className="bg-gray-900 text-white dark:text-black dark:bg-gray-200 py-1 group-hover:bg-primary group-hover:text-white">
              <h2 className=" text-sm md:text-xl font-semibold mb-2">
                {skill.title}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
