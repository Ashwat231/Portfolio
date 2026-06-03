'use client';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export default function ResumePage() {
  return (
    <html className='scroll-smooth'>
    <body className='bg-slate-950 text-white overflow-x-hidden'>
        {/* Navigation */}
        <nav className='fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20'>
          <div className='max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-center'>
            <ul className='hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.3em] text-gray-300 font-light'>
              <li>
                <a
                  href='/'
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/projects'
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='/publications'
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href='/resume'
                  className='text-cyan-300 hover:text-cyan-200 transition-colors duration-300'
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

      {/* Page Header */}
      <section className='min-h-[30vh] relative flex items-center justify-center pt-24 px-6'>
        <div className='relative z-10 text-center max-w-3xl mx-auto'>
          <h1 className='text-6xl md:text-7xl font-light tracking-tight mb-6 text-white'>
            RESUME
          </h1>
          <p className='text-lg md:text-xl text-gray-300 font-light'>
            Education, experience, and professional background.
          </p>
        </div>
      </section>

      {/* Resume Content */}
      <section className='py-16 px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-12'>
            <div>
              <h2 className='text-4xl font-light tracking-tight mb-8 text-cyan-300'>EDUCATION</h2>
              <div className='space-y-6'>
                <div className='border-l-2 border-cyan-500/50 pl-6'>
                  <h3 className='text-2xl font-light text-white mb-2'>Master of Science in Artificial Intelligence</h3>
                  <p className='text-cyan-300 text-sm font-light mb-2'>Arizona State University, Tempe, AZ — May 2026</p>
                  <p className='text-gray-300 font-light'>Specialization: Robotics & Autonomous Systems</p>
                  <p className='text-gray-400 text-sm mt-2'>GPA: 3.85/4.0</p>
                </div>
                <div className='border-l-2 border-cyan-500/50 pl-6'>
                  <h3 className='text-2xl font-light text-white mb-2'>Bachelor of Technology in Computer Science & Engineering</h3>
                  <p className='text-cyan-300 text-sm font-light mb-2'>Jain University, Bangalore, India — May 2023</p>
                  <p className='text-gray-400 text-sm mt-2'>GPA: 3.75/4.0</p>
                </div>
              </div>
            </div>

            <div className='pt-8 border-t border-cyan-500/20'>
              <h2 className='text-4xl font-light tracking-tight mb-8 text-cyan-300'>BACKGROUND</h2>
              <p className='text-gray-300 text-lg leading-relaxed font-light mb-6'>
                With expertise spanning AI, robotics, full-stack development, and computer vision, I approach each project with precision and innovation. My work bridges the gap between cutting-edge AI research and practical real-world applications, from autonomous systems to web technologies.
              </p>
              <p className='text-gray-300 text-lg leading-relaxed font-light'>
                Currently, I'm a Research Assistant at the NICE Lab at ASU, focusing on cutting-edge research in computer vision and robotics. My research interests include visual perception at extreme scales, reinforcement learning for robot control, and visual imitation learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
    </html>
  )
}
