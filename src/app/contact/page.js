'use client';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export default function ContactPage() {
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
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-cyan-300 hover:text-cyan-200 transition-colors duration-300'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

      {/* Page Header */}
      <section className='min-h-[40vh] relative flex items-center justify-center pt-24 px-6'>
        <div className='relative z-10 text-center max-w-3xl mx-auto'>
          <h1 className='text-6xl md:text-7xl font-light tracking-tight mb-6 text-white'>
            GET IN TOUCH
          </h1>
          <p className='text-lg md:text-xl text-gray-300 font-light'>
            Interested in collaboration, research opportunities, or just want to chat about AI and robotics?
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-32 px-6 border-t border-cyan-500/20'>
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-16'>
            {/* Contact Methods */}
            <div>
              <h2 className='text-4xl font-light tracking-tight mb-12 text-cyan-300'>REACH OUT</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Email */}
                <div className='border border-cyan-500/20 rounded p-8 hover:border-cyan-500/50 transition-colors'>
                  <h3 className='text-2xl font-light text-white mb-4'>Email</h3>
                  <a 
                    href='mailto:arajbhan@asu.edu'
                    className='text-cyan-300 hover:text-cyan-200 transition-colors font-light'
                  >
                    arajbhan@asu.edu
                  </a>
                </div>

                {/* Phone */}
                <div className='border border-cyan-500/20 rounded p-8 hover:border-cyan-500/50 transition-colors'>
                  <h3 className='text-2xl font-light text-white mb-4'>Phone</h3>
                  <a 
                    href='tel:+16236663240'
                    className='text-cyan-300 hover:text-cyan-200 transition-colors font-light'
                  >
                    (623) 666-3240
                  </a>
                </div>

                {/* Location */}
                <div className='border border-cyan-500/20 rounded p-8 hover:border-cyan-500/50 transition-colors'>
                  <h3 className='text-2xl font-light text-white mb-4'>Location</h3>
                  <p className='text-gray-300 font-light'>
                    Tempe, Arizona, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='pt-8 border-t border-cyan-500/20'>
              <h2 className='text-4xl font-light tracking-tight mb-8 text-cyan-300'>CONNECT</h2>
              <div className='flex gap-6'>
                <a 
                  href='https://github.com/Ashwat231' 
                  target='_blank'
                  className='px-6 py-3 border border-cyan-500/50 rounded hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-cyan-300 hover:text-cyan-200 tracking-widest text-sm'
                >
                  GITHUB
                </a>
                <a 
                  href='https://www.linkedin.com/in/ashwat-rajbhandari/' 
                  target='_blank'
                  className='px-6 py-3 border border-cyan-500/50 rounded hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-cyan-300 hover:text-cyan-200 tracking-widest text-sm'
                >
                  LINKEDIN
                </a>
              </div>
            </div>

            {/* Message */}
            <div className='pt-8 border-t border-cyan-500/20'>
              <p className='text-gray-300 text-lg leading-relaxed font-light'>
                I'm always interested in hearing about exciting opportunities, research collaborations, or interesting projects. 
                Feel free to reach out through any of the contact methods above. I'll get back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-6 border-t border-cyan-500/20 mt-20'>
        <div className='max-w-6xl mx-auto text-center text-gray-400 text-sm tracking-widest'>
          <p>© 2024 ASHWAT RAJBHANDARI. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </body>
    </html>
  )
}
