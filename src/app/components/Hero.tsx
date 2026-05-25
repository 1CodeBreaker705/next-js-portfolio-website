"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";
const Hero = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-18 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div> 
    <div className="container max-w-7xl mx-auto px-4">
      <div className=" max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <motion.div {...scaleIn} transition={{delay:0.2}}>
             <div className="w-45 h-45 rounded-full overflow-hidden ring-4 ring-primary/80 shadow-2xl shadow-primary/25 mb-8">
              <Image
                src="/Profile.jpeg"
                alt="profileimage"
                width={500}
                height={500}
                className="w-full h-full object-cover object-bottom scale-[1.03] "
              />
            </div>
          </motion.div>
          
          <motion.h1 {...fadeInUp} transition={{delay:0.4}} className="text-4xl font-bold md:text-6xl mb-6">
            Hi, I&apos;m{" "}
            <span className="text-primary">
              <Typewriter
                words={["Ranjan"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={400}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{delay:0.5}} className="text-xl md:text-2xl md:whitespace-nowrap text-gray-600 dark:text-gray-300 mb-8  text-center">
            Full Stack Developer | UI/UX Enthusiast | Building Modern Web
            Experiences
          </motion.p>
          <div className="flex justify-center space-x-5 mb-8 ">
            <Link
              href="https://github.com/1CodeBreaker705"
               target="_blank"
               rel="noopener noreferrer"
              className="text-xl md:text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ranjan-singh-63a653350/"
               target="_blank"
               rel="noopener noreferrer"
              className="text-xl md:text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://leetcode.com/u/ranjansingh0661/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <SiLeetcode />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
            <Link
              href="/projects"
              className="bg-primary inline-block w-1/2 md:w-auto text-white px-5 py-2 rounded-lg hover:bg-primary/75 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border border-gray-400 text-gray-700 inline-block w-1/2 md:w-auto px-5 py-2 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>   
    </section>
  );
};

export default Hero;
