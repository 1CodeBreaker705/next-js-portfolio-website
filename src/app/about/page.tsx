import React from "react";
import { FaCode } from "react-icons/fa";

const AboutPage = () => {
return ( <div className="container max-w-7xl mx-auto py-20 px-4">
    
        {/* About Me */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-center mb-8">
            About Me
          </h1>
      
          <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-9">
            I&apos;m a Computer Science undergraduate and Full Stack Developer who
            enjoys transforming ideas into real-world products. I am passionate
            about building meaningful software, solving challenging problems, and
            continuously improving through hands-on experience.
            <br />
            <br />
            Outside of academics, I spend most of my time building projects,
            participating in hackathons, exploring new technologies, and learning
            from the developer community. Every project teaches me something new
            and helps me grow as both a developer and a problem solver.
            <br />
            <br />
            I believe great software is more than just working code—it&apos;s about
            creating experiences that are intuitive, reliable, and genuinely
            valuable to the people who use them.
          </p>
        </section>
      
        {/* Development Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
            <span>My Development Philosophy </span>
            <FaCode className="h-8 w-8" />  
          </h2>
      
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-dark/50 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
            <p className="text-secondary leading-8">
              I believe the best way to learn is by building.
              <br />
              <br />
              Rather than waiting until I know everything, I prefer to start
              creating, experiment with new ideas, and learn through the
              challenges that arise along the way. Every bug, design decision,
              and technical obstacle becomes an opportunity to improve.
              <br />
              <br />
              My focus is on writing maintainable code, understanding the
              fundamentals, and continuously refining both the product and the
              process behind it.
            </p>
          </div>
        </section>
      
        {/* Why I Build */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why I Build
          </h2>
      
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-dark/50 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
            <p className="text-secondary leading-8">
              What excites me most about software development is the ability to
              turn an idea into something real.
              <br />
              <br />
              A simple concept can become a tool that saves time, solves a
              problem, or improves someone&apos;s experience. That process of
              transforming an idea into a working product is what keeps me
              motivated to learn, create, and keep building.
              <br />
              <br />
              For me, every project is a chance to create something useful while
              pushing my skills a little further than before.
            </p>
          </div>
        </section>
      
        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education
          </h2>
      
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-dark/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Technology in Computer Science
              </h3>
      
              <p className="text-primary mb-2">
                Maharaja Agrasen Institute of Technology • 2023 - 2027
              </p>
      
              <p className="text-secondary">
                Currently Undergraduate
              </p>
            </div>
          </div>
        </section>
      
  </div>
  )
}

export default AboutPage;
