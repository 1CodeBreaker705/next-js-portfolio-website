'use client'

import Link from "next/link"
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload
} from "react-icons/fa"

const ContactPage = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact
        </h1>

        <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          Feel free to reach out for collaborations,
          opportunities, or just to connect.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left */}
        <div className="bg-gray-50 dark:bg-dark/50 rounded-2xl p-8 shadow-md border border-white/10">
          <h2 className="text-2xl font-semibold mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6">

            {/* Email */}
            <Link
              href="mailto:ranjansingh0661@gmail.com"
              className="flex items-center gap-5 p-5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            >
              <div className="p-4 rounded-full bg-primary/10">
                <FaEnvelope className="text-primary text-xl" />
              </div>

              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-secondary text-sm">
                  ranjansingh0661@gmail.com
                </p>
              </div>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/ranjan-singh-63a653350/"
              target="_blank"
              className="flex items-center gap-5 p-5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            >
              <div className="p-4 rounded-full bg-primary/10">
                <FaLinkedin className="text-primary text-xl" />
              </div>

              <div>
                <h3 className="font-medium">My LinkedIn</h3>
                <p className="text-secondary text-sm">
                  Connect professionally
                </p>
              </div>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/1CodeBreaker705"
              target="_blank"
              className="flex items-center gap-5 p-5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            >
              <div className="p-4 rounded-full bg-primary/10">
                <FaGithub className="text-primary text-xl" />
              </div>

              <div>
                <h3 className="font-medium">My GitHub</h3>
                <p className="text-secondary text-sm">
                  View my projects
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-50 dark:bg-dark/50 rounded-2xl p-8 shadow-md border border-white/10 flex flex-col justify-between">

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              About
            </h2>

            <p className="text-secondary leading-relaxed mb-8">
              Focused on building projects,making contributions
              and continuously improving my skills through
              practical experience and modern technologies.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-10">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl transition-colors duration-300"
            >
              <FaFileDownload />
              Resume
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage
