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
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-4">
            <span>My Development Philosophy</span>
            <FaCode className="h-8 w-8" />  
          </h2>
      
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-dark/50 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
            <p className="text-secondary leading-8">
              I enjoy learning by creating projects that push me beyond my current skill level. Every application I build 
              introduces new challenges—whether it's designing better user experiences, structuring scalable backend
              systems, or debugging unexpected issues in production.
              <br/>  
              <br/> 
              Over time, I've learned that good software is not just about writing code. It requires understanding users, 
              making thoughtful decisions, and continuously refining details that improve the overall experience.
                
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
                What motivates me most is seeing an idea evolve from a simple concept into something people can
                actually use.
                <br/>  
                <br/> 
                From personal projects to hackathon submissions, I enjoy the entire process of turning ideas
                into products—planning features, solving technical challenges, and watching everything come together into a
                working application.
                <br/>  
                <br/> 
                Building software allows me to combine creativity, problem-solving, and continuous learning, which is
                why I find it so rewarding.
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
