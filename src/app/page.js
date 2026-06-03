'use client';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { SiGooglescholar } from 'react-icons/si';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
                  className='text-cyan-300 hover:text-cyan-200 transition-colors duration-300'
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
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section with Orbs */}
        <section
          className='min-h-screen relative flex items-center justify-center pt-20 px-6 overflow-hidden'
          id='home'
        >
          {/* Animated Orbs Background */}
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            
            {/* Large center orb - Cyan */}
            <div
              className='absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-600/40 via-blue-900/20 to-slate-950 shadow-2xl opacity-60 blur-3xl'
              style={{
                boxShadow:
                  '0 0 80px rgba(34, 211, 238, 0.3), inset -20px -20px 60px rgba(0,0,0,0.8)',
                transform: `translate(${mousePosition.x / 50 - 5}px, ${
                  mousePosition.y / 50 - 5
                }px)`,
              }}
            ></div>

            {/* Top right orb - Blue */}
            <div
              className='absolute w-72 h-72 -top-24 -right-24 rounded-full bg-gradient-to-br from-blue-600/30 via-slate-900/20 to-slate-950 shadow-2xl opacity-40 blur-2xl'
              style={{
                boxShadow: '0 0 60px rgba(59, 130, 246, 0.25)',
                transform: `translate(${-mousePosition.x / 80}px, ${
                  mousePosition.y / 80
                }px)`,
              }}
            ></div>

            {/* Bottom left orb - Purple/Cyan */}
            <div
              className='absolute w-64 h-64 -bottom-20 -left-20 rounded-full bg-gradient-to-br from-purple-600/30 via-slate-900/20 to-slate-950 shadow-2xl opacity-35 blur-2xl'
              style={{
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.2)',
                transform: `translate(${mousePosition.x / 100}px, ${
                  -mousePosition.y / 100
                }px)`,
              }}
            ></div>
          </div>

          {/* Hero Content */}
          <div className='relative z-10 text-center max-w-3xl mx-auto'>
            <h1 className='text-7xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight'>
              ASHWAT
            </h1>

            <h2 className='text-5xl md:text-6xl font-light tracking-tight mb-8 text-gray-300'>
              RAJBHANDARI
            </h2>

            <p className='text-lg md:text-xl text-gray-400 mb-6 font-light tracking-wide max-w-2xl mx-auto'>
              AI Researcher & Full Stack Developer
            </p>

            <p className='text-gray-200 mb-12 leading-relaxed max-w-lg mx-auto font-light'>
              Specializing in Robotics, Autonomous Systems, and AI. Building
              intelligent systems that perceive, reason, and act in the real
              world.
            </p>

            <div className='flex gap-6 justify-center mb-12'>
              <a
                href='https://github.com/Ashwat231'
                target='_blank'
                className='w-12 h-12 rounded-full border border-cyan-500/50 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-cyan-400 hover:text-cyan-300'
              >
                <AiFillGithub className='text-xl' />
              </a>

              <a
                href='https://www.linkedin.com/in/ashwat-rajbhandari/'
                target='_blank'
                className='w-12 h-12 rounded-full border border-cyan-500/50 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-cyan-400 hover:text-cyan-300'
              >
                <AiFillLinkedin className='text-xl' />
              </a>

              <a
                href='https://scholar.google.com/citations?user=vVF6HB0AAAAJ&hl=en&oi=ao'
                target='_blank'
                className='w-12 h-12 rounded-full border border-cyan-500/50 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-cyan-400 hover:text-cyan-300'
              >
                <SiGooglescholar className='text-xl' />
              </a>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 justify-center flex-wrap'>
              <a
                href='/resume'
                className='px-8 py-3 border hover:bg-gray-500 rounded-full border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all tracking-widest text-sm text-cyan-400 hover:text-cyan-300'
              >
                RESUME
              </a>

              <a
                href='/projects'
                className='px-8 py-3 border hover:bg-gray-500 rounded-full border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all tracking-widest text-sm text-cyan-400 hover:text-cyan-300'
              >
                PROJECTS
              </a>

              <a
                href='/contact'
                className='px-8 py-3 border hover:bg-gray-500 rounded-full border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all tracking-widest text-sm text-cyan-400 hover:text-cyan-300'
              >
                CONTACT
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}