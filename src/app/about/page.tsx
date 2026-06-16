import React from 'react'
import { FaCode } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20 px-4'>
      
      {/* About Me */}
      <section className='mb-20'>
        <h1 className='text-4xl font-bold text-center mb-8'>
          About Me
        </h1>

        <p className='text-lg text-secondary max-w-3xl mx-auto text-center leading-9'>
          I&apos;m a Computer Science undergraduate and Full Stack Developer who
          enjoys turning ideas into real-world products. I am passionate about
          building meaningful software, solving challenging problems, and
          continuously learning through hands-on experience.
          <br />
          <br />
          Beyond development, I actively participate in hackathons, contribute
          to open-source initiatives, and strengthen my problem-solving
          abilities through Data Structures and Algorithms. I see every project
          as an opportunity to learn something new, collaborate with others,
          and grow both as a developer and as a problem solver.
        </p>
      </section>

      

      {/* Development Philosophy */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          My Development Philosophy <span><FaCode className='h-12 w-12 text-black dark:text-white/></span>
        </h2>

        <div className='max-w-3xl mx-auto bg-gray-50 dark:bg-dark/50 p-8 rounded-lg shadow-md'>
          <p className='text-secondary leading-8'>
            I believe the best way to learn technology is by building.
            Every project teaches something valuable—whether it&apos;s designing
            better user experiences, writing cleaner code, improving
            performance, or understanding how people interact with software.
            <br />
            <br />
            For me, development is a continuous journey of curiosity,
            experimentation, and improvement. I focus on learning by creating,
            embracing challenges, and constantly looking for ways to build
            better solutions than I did yesterday.
          </p>
        </div>
      </section>

      {/* Why I Build */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Why I Build
        </h2>

        <div className='max-w-3xl mx-auto bg-gray-50 dark:bg-dark/50 p-8 rounded-lg shadow-md'>
          <p className='text-secondary leading-8'>
            I enjoy creating software that solves real problems and delivers
            meaningful value to users. Whether it&apos;s a productivity tool,
            an ecommerce platform, or an innovative hackathon project, I find
            satisfaction in transforming ideas into working products.
            <br />
            <br />
            My goal is not just to learn technologies but to understand how
            software can create impact, improve experiences, and make life
            easier for the people who use it.
          </p>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Education
        </h2>

        <div className='max-w-3xl mx-auto'>
          <div className='bg-gray-50 dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>
              Bachelor of Technology in Computer Science
            </h3>

            <p className='text-primary mb-2'>
              Maharaja Agrasen Institute of Technology • 2023 - 2027
            </p>

            <p className='text-secondary'>
              Currently Undergraduate
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage
