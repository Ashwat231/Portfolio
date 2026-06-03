'use client';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';


export default function PublicationsPage() {
  const publications = [
    {
      title: 'Scale-Aware Vision Language Adaptation for Extreme Far-Distance Video Person Re-Identification',
      venue: 'CVPR 2026, AERO-HPR Workshop - Proceedings Track',
      author: 'First Author',
      arxiv: '2604.04183',
      year: '2026'
    },
    {
      title: 'VReID-XFD: Video-based Person Re-identification at Extreme Far Distance (Aerial–Ground VReID) Challenge Results',
      venue: 'WACV 2026 Workshop',
      author: 'Co-author',
      arxiv: '2601.01312',
      year: '2026'
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
                  className='hover:text-cyan-300 transition-colors duration-300'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='/publications'
                  className='text-cyan-300 hover:text-cyan-200 transition-colors duration-300'
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
      <section className='min-h-[30vh] relative flex items-center justify-center pt-24 px-6'>
        <div className='relative z-10 text-center max-w-3xl mx-auto'>
          <h1 className='text-6xl md:text-7xl font-light tracking-tight mb-6 text-white'>
            PUBLICATIONS
          </h1>
          <p className='text-lg md:text-xl text-gray-300 font-light items-center justify-center flex gap-4'>
                      <a
                        href='https://scholar.google.com/citations?user=vVF6HB0AAAAJ&hl=en&oi=ao'
                        target='_blank'
                        className='w-12 h-12 mb-8 rounded-full border border-cyan-500/50 flex items-center justify-center hover:border-cyan-400 hover:bg-white transition-all text-cyan-400 hover:text-cyan-300'
                      > 
                        <SiGooglescholar className='text-xl' /> 
                      </a> 
          </p>

          <p className='text-lg md:text-xl text-gray-300 font-light border-b border-cyan-500/20 pb-6'>
            Peer-reviewed research and publications in computer vision and robotics.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className='py-8 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='space-y-12'>
            {publications.map((pub, idx) => (
              <div key={idx} className='border-b border-cyan-500/20 pb-12 group'>
                <h3 className='text-2xl font-light mb-3 text-white group-hover:text-cyan-300 transition-colors'>{pub.title}</h3>
                <p className='text-cyan-300 text-sm font-light mb-2'>{pub.venue}</p>
                <p className='text-gray-300 text-sm mb-4'>
                  <span className='text-gray-400'>{pub.author}</span> • <span className='text-gray-400'>{pub.year}</span>
                </p>
                <a 
                  href={`https://arxiv.org/abs/${pub.arxiv}`} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='text-cyan-300 hover:text-cyan-200 transition-colors text-sm tracking-widest'
                >
                  arXiv:{pub.arxiv} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </body>
    </html>
  )
}
