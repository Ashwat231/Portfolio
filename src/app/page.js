"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin,AiOutlineMobile,AiFillGithub,AiOutlineArrowUp} from 'react-icons/ai';
import {TbBrandNextjs} from 'react-icons/tb';
import ReactCardFlip from 'react-card-flip';
import {BiLogoReact,BiLogoAngular,BiLogoTailwindCss,BiLogoWordpress,BiLogoPython} from 'react-icons/bi';
import React, { useState,useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';


export default function Home() {

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');  
  const [isVisible, setIsVisible] = useState(false);
  const [color,setColor] = useState(true);
  const [isFlipped,setIsFlipped] = useState(false);
  const form = useRef();

  function handleClear1() {
    setText1('');
  }
  function handleClear2() {
    setText2('');
  }
  function handleClear3() {
    setText3('');
  }
  

  function sendEmail(e){
    alert('Message Successfully Sent');
    e.preventDefault(); 
    emailjs.sendForm('service_zzczf1f', 'template_ff1oyb9', form.current, 'bjfPNuA27thibvI6x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  function flipCard(){
    setIsFlipped(!isFlipped);
  }

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  const toggleColor = () =>{
    setColor(!color)
  }

  return (
    <html className=' scroll-smooth'>
    <head>
      <title>Portfolio</title>
    </head>
    <body>
<section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 flex flex-col justify-between px-10 max-sm:px-0" id='about-me'>

<nav className='py-10 mb-12 flex justify-between max-sm:pb-0 max-sm:px-5' id='about-me'>
  <h1 className={`text-2xl ${color ? 'text-teal-600' : 'text-yellow-600'} font-bold max-sm:text-lg`}><a href='#about-me'>PORTFOLIO</a></h1>
  <ul className='flex gap-20 text-sm tracking-widest max-md:hidden'>
    <li> <a href="#about-me" className=' font-bold text-white hover:text-xl duration-500'>ABOUT ME</a></li>
    <li> <a href="#skills" className=' font-bold text-white hover:text-xl duration-500'>SKILLS</a></li>
    <li> <a href="#projects" className=' font-bold text-white hover:text-xl duration-500'>PROJECTS</a></li>
  </ul>
  <ul className='flex items-center'>
    <li>  <BsFillMoonStarsFill className='cursor-pointer text-2xl text-yellow-400 max-md:hidden' onClick={toggleColor}/></li>
    <li>  <a href="/Ashwat_Rajbhandari_Resume.pdf" download='Ashwat_Rajbhandari_Resume' className='max-sm:text-xs bg-gradient-to-l from-cyan-500 to-teal-500 py-2 px-4 max-sm:px-2  rounded-lg text-white ml-8'>
      Resume
    </a>  </li>
    <li className='hidden cursor-pointer py-2 mx-4 rounded-lg text-white  rotate-90 max-md:block max-sm:text-xs' id='hamburger'><button onClick={toggleNavbar}>|||</button></li>
  </ul>
</nav>

<nav className={`max-sm:-mt-8 max-sm:mb-5 max-sm:mx-10 md:hidden gap-5 -mt-16 mb-10 bg-gradient-to-b from-gray-900 to-gray-700 overflow-hidden transition-all duration-1000 ${isVisible ? 'h-64 opacity-100' : 'h-0 opacity-0'} rounded-full`}>
  <ul>
    <li className=' hover:text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-5 text-white text-center'><a href='#about-me' onClick={ ()=>{ setIsVisible(false)}}>ABOUT ME</a></li>
    <li className=' hover:text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-5 text-white text-center'><a href='#skills' onClick={ ()=>{ setIsVisible(false)}}>SKILLS</a></li>
    <li className=' hover:text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-5 text-white text-center'><a href='#projects' onClick={( )=>{ setIsVisible(false)}}>PROJECTS</a></li>
    <li className=' hover:text-xl p-5 flex justify-center'><BsFillMoonStarsFill className=' cursor-pointer text-3xl text-yellow-400' onClick={toggleColor}/></li>
  </ul>
</nav>

<div className='flex justify-around max-md:flex-col max-sm:px-10'>

  <div>
    <img src='Me.jpg' className='rounded-full max-md:mb-10  max-md:mx-auto'></img>
  </div>

<div className='w-1/2 max-md:w-auto'>
  <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
  <div className= {`border-x-2 border-b-2 ${color? 'border-teal-600 shadow-lg shadow-teal-600' : 'border-yellow-600 shadow-lg shadow-yellow-600'}  rounded-2xl p-8 flex flex-col justify-around max-md:w-full`}>
    <p className='text-white max-md:p-2 pb-5'>Hi, my name is</p>
    <h1 className={`text-5xl pb-5 max-md:p-2 ${ color ? 'text-teal-500': 'text-yellow-600'} font-bold max-sm:text-3xl`}>ASHWAT RAJBHANDARI</h1>
    <h3 className=' text-2xl pb-5 max-md:p-2 text-white max-sm:text-lg'>BTech Computer Science & Engineering | Specialization In IOT | Software Engineer </h3>
    <h3 className='text-white pb-5 max-md:p-2 max-sm:text-xs'>I am a graduate in Computer Science Engineering with specialization in Internet of things. Interested in AI and web development, looking to gain more experience and knowledge from working and learning.</h3>
    <a href = '#' className='text-yellow-400 font-bold text-right max-md:py-2 max-md:text-sm' onClick={(e)=>{
      flipCard();
      e.preventDefault();
      }}> Contact Me -) </a>
  </div>

  <div className= {`border-x-2 border-b-2 ${color? 'border-teal-600 shadow-lg shadow-teal-600' : 'border-yellow-600 shadow-lg shadow-yellow-600'}  rounded-2xl p-8 flex flex-col justify-around max-md:w-full w-4/5 max-sm:p-5`}>
    <h1 className={`font-bold text-teal-500 text-3xl mb-5 max-sm:text-xl ${ color ? 'text-teal-500': 'text-yellow-600'}`}>Write Me A Message</h1>
    <form className='text-white max-sm:text-sm' ref={form} onSubmit={sendEmail}>

      <label className='flex-col flex font-bold'>
        Your Name
      <input type='text' value={text1} onChange={(e)=>{setText1(e.target.value)}} name='from_name' className='border-2 border-teal-600 my-3 text-black rounded-full h-10 p-5'/>
      </label>

      <label className='flex-col flex font-bold'>
        Your Email Address
      <input type='text' value={text2} onChange={(e)=>{setText2(e.target.value)}} name='from-email' className='border-2 border-teal-600 my-3 text-black rounded-full h-10 p-5'/>
      </label>

      <label className='flex-col flex font-bold'>
        Your Message
        <textarea rows="4" cols="50" value={text3} onChange={(e)=>{setText3(e.target.value)}} name='message' className='border-2 border-teal-600 my-3 text-black p-2 rounded-lg'/>
      </label>

      <button className=' mx-2 bg-gradient-to-l from-cyan-500 to-teal-500 px-5 py-2 border-2 border-black mt-5 rounded-full' type='submit'>SEND</button>
      <button className=' mx-2 bg-gradient-to-l from-yellow-700 to-yellow-500 px-5 py-2 border-2 border-black mt-5 rounded-full' type='button' onClick={()=>{handleClear1();handleClear2();handleClear3();}}>CLEAR</button>


    </form>
    <a href = '#' className='text-yellow-400 font-bold text-right max-md:py-2 max-md:text-sm mt-5' onClick={(e)=>{
      e.preventDefault();
      flipCard();
    }}> About Me -) </a>
  </div>
  </ReactCardFlip>
</div>


</div>

<div className='py-10 text-4xl gap-12 flex justify-center'>
<a href='https://github.com/Ashwat231'><AiFillGithub className='text-white cursor-pointer hover:text-black duration-500'/></a>
      <a href='https://www.linkedin.com/in/ashwat-rajbhandari-b9b809194/'><AiFillLinkedin className='text-white cursor-pointer hover:text-blue-600 duration-500'/></a>
      <a href='https://www.instagram.com/_ashwat_/'><AiFillInstagram className='text-white cursor-pointer hover:text-orange-600 duration-500'/></a> 
</div>

</section>


      <section className='px-10 my-16' id='skills'>
          <h3 className={`text-3xl py-1 w-1 text-teal-600 font-bold ${color ? 'text-teal-500': 'text-yellow-600'}`}>Skills</h3>
          <div class="border-b-2 border-gray-400 my-4"></div>
          <p className='font-bold'>Some of the things I have worked with:</p>
          <div className='p-10 m-5 h-auto shadow-2xl border-black rounded-3xl bg-gradient-to-t from-gray-900 to-gray-700 flex flex-col w-auto'>
            <ul className='flex justify-between items-center mb-10 max-md:overflow-hidden flex-wrap max-as:justify-center'>
              <li className=' text-center text-white mx-5 my-5'><BiLogoReact className='text-8xl text-blue-500 max-md:text-7xl' /> React JS</li>
              <li className=' text-center text-white mx-5 my-5'><BiLogoPython className='text-8xl text-yellow-500 max-md:text-7xl'/> Python</li>
              <li className=' text-center text-white mx-5 my-5'><AiFillGithub className='text-8xl text-white max-md:text-7xl'/> Github</li>
              <li className=' text-center text-white mx-5 my-5'><BiLogoTailwindCss className='text-8xl text-blue-500 max-md:text-7xl'/> TAILWIND</li>

            </ul>
            <ul className='flex justify-between items-center max-md:overflow-hidden flex-wrap max-as:justify-center'>
              <li className=' text-center text-white mx-5 my-5'><BiLogoAngular className='text-8xl text-red-900 max-md:text-7xl'/> Angular JS</li>
              <li className=' text-center text-white mx-5 my-5'><TbBrandNextjs className='text-8xl text-white max-md:text-7xl'/> Next JS</li>
              <li className=' text-center text-white mx-5 my-5'><AiOutlineMobile className='text-8xl text-orange-500 max-md:text-7xl'/> React <br/>Native</li>
              <li className=' text-center text-white mx-5 my-5'><BiLogoWordpress className='text-8xl text-gray-600 max-md:text-7xl'/> Wordpress</li>

            </ul>
          </div>
      </section>

      <section className='px-10 my-16' id='projects'>
          <h3 className={`text-3xl py-1 text-teal-600 font-bold ${color ? 'text-teal-500': 'text-yellow-600'}`}>Projects</h3>
          <div class="border-b-2 border-gray-400 my-4"></div>

          <div className='p-10 m-5 h-auto shadow-2xl bg-gradient-to-t from-gray-900 to-gray-700 rounded-3xl flex justify-center items-center'>
            <p className=' text-3xl text-center text-white'>COMING SOON</p>
          </div>
          <a href='#' className='absolute right-1 mb-36'><AiOutlineArrowUp className=' text-4xl text-yellow-500 p-2 bg-black rounded-full max-as:text-4xl'/></a>

      </section>


    <footer className='p-5 bg-gradient-to-b from-gray-900 to-gray-700 text-white text-center flex flex-col gap-5'>

      <p>Created With NextJS & TailwindCSS</p>
      <div className='flex justify-center gap-10'>
      <a href='https://github.com/Ashwat231'><AiFillGithub className='text-white cursor-pointer hover:text-black text-5xl duration-500'/></a>
      <a href='https://www.linkedin.com/in/ashwat-rajbhandari-b9b809194/'><AiFillLinkedin className='text-white cursor-pointer hover:text-blue-600 text-5xl duration-500'/></a>
      <a href='https://www.instagram.com/_ashwat_/'><AiFillInstagram className='text-white cursor-pointer hover:text-orange-600 text-5xl duration-500'/></a> 
      </div>
    </footer>

    </body>
    </html>
  )
}