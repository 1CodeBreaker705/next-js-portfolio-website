import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const Footer = () => {
  return (
    <footer className='mt-20 bg-gray-50 dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
        <div className='container max-w-7xl mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                       <Link href="/" className="text-xl font-bold text-primary">
                    DevWithRanjan&trade;
                 </Link>
                  <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} DevWithRanjan. All rights reserved.
                 </p>
                </div>
                <div className="flex space-x-6">
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
            </div>

        </div>
    </footer>
  )
}

export default Footer
