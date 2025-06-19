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
    <section className="container py-28 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <motion.div {...scaleIn} transition={{delay:0.2}}>
              <Image
            src="/Profile.jpeg"
            alt="profileimage"
            width={500}
            height={500}
            className="rounded-full mb-4 w-45 h-45 object-cover ring-2 ring-primary"
          />
          </motion.div>
          
          <motion.h1 {...fadeInUp} transition={{delay:0.4}} className="text-4xl font-bold md:text-6xl mb-6">
            Hi, I&apos;m{" "}
            <span className="text-primary">
              <Typewriter
                words={["Ranjan"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={550}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{delay:0.5}} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:whitespace-nowrap text-center">
            Full Stack Developer | UI/UX Enthusiast | Building Modern Web
            Experiences
          </motion.p>
          <div className="flex justify-center space-x-5 mb-8 ">
            <Link
              href="https://github.com/1CodeBreaker705"
              className="text-xl md:text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ranjan-singh-63a653350/"
              className="text-xl md:text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://leetcode.com/u/ranjansingh0661/"
              className="text-xl md:text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <SiLeetcode />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
            <Link
              href="/projects"
              className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/75 transition-colors"
            >
              View Project
            </Link>
            <Link
              href="/contact"
              className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
