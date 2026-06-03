'use client';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import React, {useState, useEffect} from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Extreme Far Distance Object Re-Identification',
      desc: 'Implemented transformer-based vision models (ViT-B/16) with CLIP for feature extraction from extreme viewpoint and scale variation datasets. Achieved competitive performance at WACV 2026.',
      tech: ['PyTorch', 'Vision Transformers', 'CLIP']
    },
    {
      title: 'Steering Diffusion Policies with RL',
      desc: 'Implemented reinforcement learning pipelines using Actor-Critic (PPO) methods to control diffusion-based policies in latent action spaces with large-scale HPC experiments.',
      tech: ['PyTorch', 'PPO', 'Reinforcement Learning']
    },
    {
      title: 'Visual Imitation via Nearest Neighbors on Robots',
      desc: 'Trained VINN-based imitation learning system for Hello Robot Stretch 3. Integrated self-supervised visual representations for real-time, vision-based multi-joint execution.',
      tech: ['Python', 'Imitation Learning', 'ROS 2']
    }
  ];

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
                  className='text-cyan-300 hover:text-cyan-200 transition-colors duration-300'
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

      {/* Page Header */}
      <section className='min-h-[30vh] relative flex items-center justify-center pt-24 px-6' id='projects-header'>
        <div className='relative z-10 text-center max-w-3xl mx-auto'>
          <h1 className='text-6xl md:text-7xl font-light tracking-tight mb-6 text-white'>
            PROJECTS
          </h1>
          <p className='text-lg md:text-xl text-gray-300 font-light'>
            A selection of my research and development work in robotics, AI, and computer vision.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-32 px-6' id='projects'>
        <div className='max-w-7xl mx-auto'>
          <div className='space-y-32'>
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'>
                  {/* Text Content */}
                  <div className={isEven ? 'md:col-start-1' : 'md:col-start-2'}>
                    <div className='space-y-6'>
                      <div className='space-y-3'>
                        <h3 className='text-4xl md:text-5xl font-light tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-tight'>
                          {project.title}
                        </h3>
                        <div className='w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
                      </div>
                      <p className='text-gray-300 text-lg leading-relaxed font-light'>
                        {project.desc}
                      </p>
                      <div className='flex gap-4 flex-wrap pt-4'>
                        {project.tech.map((tech, i) => (
                          <span key={i} className='px-4 py-2 border border-cyan-500/30 rounded text-xs text-gray-300 font-light tracking-wide hover:border-cyan-500/60 hover:text-cyan-300 transition-colors'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className={`relative group ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
                    <div className='relative aspect-square md:aspect-auto md:h-96 rounded border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/5 flex items-center justify-center'>
                      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
                        <div className='text-5xl md:text-6xl font-bold text-cyan-500/20 mb-4'>
                          #{idx + 1}
                        </div>
                        <div className='text-sm text-gray-400 tracking-widest uppercase'>Featured Project</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </body>
    </html>
  )
}
