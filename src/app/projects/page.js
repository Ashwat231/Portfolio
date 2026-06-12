'use client';

import {AiFillGithub, AiFillLinkedin, AiOutlineLink} from 'react-icons/ai';
import React, {useState, useEffect} from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Visual Imitation via Nearest Neighbors on Stretch 3',
      desc: ['Trained an encoder on a VINN-based imitation learning system, used self-supervised visual representations and k-nearest-neighbor for action retrieval, on collected dataset of picking up cards and stacking blocks. ',
        'Integrated the Encoder with the Hello Robot Stretch 3, enabling real-time, vision-based, multi-joint execution in the real world which successfully picked cards. '
      ],
      tech: ['Python', 'Representation Learning', 'ROS 2', 'K-Nearest Neighbors', 'Computer Vision', 'Behaviour Cloning'],
      image: 'VINN.gif'
    },
    {
      title: 'QiMinerals - Business Website',
      desc: ['Built and deployed a static production multi-page business website for a mineral processing company using Next.js and Tailwind CSS, featuring service pages, events calendar, and consulting scheduler with responsive design.',
        'Designed a component-based UI with reusable React components and optimized page performance via Next.js static generation deployed to production on Vercel with a custom domain.',
        'Implemented reusable UI components in Tailwind CSS to improve development efficiency and maintain design consistency across pages'
      ],
      tech: ['NextJS', 'Tailwind', 'Vercel'],
      image: 'QiMinerals.gif',
      linkType: 'url',
      linkHref: 'https://www.qiminerals.com/',
      linkLabel: 'URL'
    },
    {
      title: 'Extreme Far Distance Object Re-Identification',
      desc: ['Implemented and trained transformer-based vision models (ViT-B/16) along with CLIP  in PyTorch for feature extraction from a large dataset consisting of frames under extreme viewpoint, scale, and resolution variation.',
        'Further enhanced performance by scaling to a larger backbone (ViT-L/14), incorporated temporal information through frame aggregation techniques, improving robustness to occlusions and motion blur.',
        'Executed training, evaluation, and hyperparameter tuning to improve mAP score on the stress test dataset (DetReID-XFD). ',
        'Achieved competitive challenge performance, resulting in a peer-reviewed publication at the WACV 2026 Workshop & AERO-HPR @ CVPR 2026. '
      ],
      tech: ['Python','PyTorch', 'Vision Transformers', 'CLIP', 'Re-Identification', 'High Performance Computing', 'DetReID-XFD Dataset'],
      image: 'REID.png',
      labels: [
        {text: 'CVPR 2026', href: 'https://arxiv.org/abs/2604.04183'},
        {text: 'WACV 2026', href: 'https://arxiv.org/abs/2601.01312'},
        {text: 'Code', href: 'https://github.com/Ashwat231/VReID-XFD'},
        
      ]
    },
    {
      title: 'Soccer Score Prediction',
      desc: ['holder',
        'holder 2',
        'holder 3'
      ],
      tech: ['Python', 'Machine Learning', 'Pandas', 'FastAPI', 'Dockers', 'Render', 'NextJS', 'TailWind', 'Vercel', 'Github'],
      image: 'holder.gif',
      linkType:'url',
      linkHref: 'https://www.predictsoccer.vercel.app',
      linkLabel: 'URL'
    },
    {
      title: 'Steering Diffusion Policies with RL (DSRL)',
      desc: ['Reproduced reinforcement learning pipeline using Actor-Critic (PPO) method to control diffusion-based policies in latent action spaces with large-scale HPC experiments on Libero Simulation/Benchmark.',
        'Conducted large-scale simulation experiments to analyze training stability, convergence properties, and generalization across various benchmark tasks, demonstrating the effectiveness of DSRL in learning complex control policies with fewer sample size.',
      ],
      tech: ['PyTorch', 'PPO', 'Reinforcement Learning', 'Diffusion Policies', 'High Performance Computing'],
      image: 'DSRL2.gif',
      linkType: 'url',
      linkHref: 'https://github.com/Ashwat231/dsrl_pi0',
      linkLabel: 'Code'
    },
  ];

  return (
    <html className='scroll-smooth'>
    <body className='bg-slate-950 text-white overflow-x-hidden px-4 sm:px-6 lg:px-10'>
        {/* Navigation */}
        <nav className='fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-400/20'>
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
            </ul>
          </div>
        </nav>

      {/* Page Header */}
      <section className='min-h-[30vh] relative flex items-center justify-center pt-20 sm:pt-24 px-6' id='projects-header'>
        <div className='relative z-10 text-center max-w-3xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white'>
            PROJECTS
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-slate-300 font-light'>
            A selection of my research and development work in robotics, AI, and computer vision.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-16 xl:px-24' id='projects'>
        <div className="space-y-16">

        {projects.map((project, index) => (
          <div key={index} className='max-w-auto bg-slate-900/70 ring-1 ring-cyan-400/10 flex flex-col lg:flex-row rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:ring-cyan-300/30 hover:shadow-[0_25px_80px_rgba(34,211,238,0.08)]'>

            {/* LEFT SIDE */}
            <div className="w-full lg:flex-[3] p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-100 flex items-center justify-center">
              <div>
                <img src={project.image} alt="Image" className="rounded-xl overflow-hidden border border-cyan-300/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)] w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover transition-transform duration-300 hover:scale-[1.02]" />
              </div>
            </div>
      
            {/* RIGHT SIDE */}
            <div className="w-full lg:flex-[7] p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-slate-800/60 via-slate-900/40 to-slate-950 flex items-center justify-center flex-col">
              <div className="bg-slate-900/80 w-full p-6 sm:p-8 rounded-3xl ring-1 ring-cyan-400/10">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold tracking-tight text-white">{project.title}</h1>
                {project.linkType === 'url' ? (
                  <a
                    className="mb-8 bg-cyan-500/10 inline-flex items-center gap-2 rounded-full px-3 py-1 border border-cyan-300/30 text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-200/40 transition-colors"
                    href={project.linkHref}
                  >
                    <AiOutlineLink size={20} />
                    <p>{project.linkLabel}</p>
                  </a>
                ) : null}

                {project.labels && project.labels.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.labels.map((label, labelIndex) =>
                      label.href ? (
                        <a
                          key={labelIndex}
                          className="bg-cyan-400/10 text-cyan-100 border border-cyan-300/30 rounded-full px-3 py-1 text-sm hover:bg-cyan-400/20 hover:border-cyan-200/40 transition-colors inline-flex items-center gap-2"
                          href={label.href}
                        >
                          <AiOutlineLink size={16} />
                          {label.text}
                        </a>
                      ) : (
                        <span
                          key={labelIndex}
                          className="bg-cyan-400/10 text-cyan-100 border border-cyan-300/30 rounded-full px-3 py-1 text-sm"
                        >
                          {label.text}
                        </span>
                      )
                    )}
                  </div>
                )}

                <ul className="list-disc space-y-4 text-slate-200 marker:text-cyan-300 text-lg pl-5">
                  {project.desc.map((a,b) => (
                    <li key={b}>{a}</li>
                  )
                )}
                  
                </ul> 
              </div>

              <ul className="flex flex-wrap gap-3 sm:gap-4 mt-4">
                {project.tech.map((t,i) =>(
                <li key={i} className="bg-slate-950/80 rounded-full px-3 py-2 border border-cyan-400/20 text-slate-100">{t}</li>
                )
              )}
              </ul> 
            </div>

          </div>
        ) 
        
        )}
        </div>
      </section>
    </body>
    </html>
  )
}
