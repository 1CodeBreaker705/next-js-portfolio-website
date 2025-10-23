import Image from 'next/image'
import React from 'react'
import { FaCode } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold text-center mb-8'>About Me</h1>
       {/*bio section*/}
      <section className='mb-15'>
       <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
           Hi, I&apos;m a Full-Stack Web Developer who enjoys turning ideas into real web experiences. I&apos;m currently focused on building personal projects, improving my problem-solving skills, and preparing for future opportunities. I&apos;m passionate about clean design, smooth user experience, and writing code that just works. Every day, I&apos;m learning something new and getting one step closer to my goals.
        </p> 
      </section>
      <FaCode className='h-12 w-12 text-black dark:text-white mb-16 mx-auto'/>
      {/* experience section */}
      <section className='mb-16'>
           <h2 className='text-3xl font-bold mb-8 text-center'>Experience</h2>
           <div className='max-w-3xl mx-auto space-y-8'>
             <div className='bg-gray-50 dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2 text-center'>Full Stack Course Completed</h3>
                <div className='flex justify-center mb-4'>
                  <Image src="/course_certificate.jpg" alt='course' height={500} width={500} className='object-contain '/>
                </div>
                <ul className='text-secondary list-disc list-inside'>
                  <li className='mb-2'>
                    It took me around 4 months to complete this course
                  </li>
                  <li>
                    This course helped me to make strong foundation in both frontend and backend concepts
                  </li>
                </ul>
             </div>
           </div>
      </section>
      {/*education section*/}
       <section>
         <h2 className='text-3xl font-bold mb-8 text-center'>Education</h2>
         <div className='max-w-3xl mx-auto'>
            <div className='bg-gray-50 dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                 <h3 className='text-xl font-semibold mb-2 '>Bachelor of Technology in Computer Science</h3>
                 <p className='text-primary mb-2'>Maharaja Agrasen Institute Of Technology•2023-2027</p>
                 <p className='text-secondary'>Currently Undergraduate</p>
            </div>
         </div>
       </section>
    
    </div>
    
  )
}

export default AboutPage

