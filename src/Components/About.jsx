import React from 'react'
import { TbMail,TbBrandTelegram, TbBrandGithub } from "react-icons/tb";
import CV from '../CV.pdf'
import Typewriter from 'typewriter-effect';

export const About = () => {
  const style ={
    container: `mb-8 shadow-lg shadow-blue-500/50 p-4 rounded-3xl flex items-center ease-in-out duration-300 
                hover:scale-[1.1]`,
  }
  return (
    <>
    <div id = "About" className='shrink-0 snap-start flex flex-col justify-center items-center h-screen'>
        <div className='flex justify-center items-center'>
          <div data-aos="fade-down" data-aos-duration="300">
            <a 
            href ={CV} 
            target="_blank" 
            className='text-4xl font-bold flex items-center mr-8'>
              <p 
              className='duration-300 ease-in-out 
                         hover:scale-[1.2] hover:text-blue-500/50'>CV</p>
            </a>
          </div>
          <div className='flex' >
            <div data-aos="fade-down" data-aos-duration="400">
              <a 
              href='https://github.com/Mercelory' 
              target="_blank" 
              className='mx-1'>
                <TbBrandGithub 
                className='w-10 h-10 duration-300 ease-in-out
                hover:text-blue-500/50 hover:scale-[1.3]'/></a>
              </div>
              <div data-aos="fade-down" data-aos-duration="500">
              <a 
              href='https://t.me/tisdm' 
              target="_blank" 
              className='mx-1' >
                <TbBrandTelegram className='w-10 h-10 duration-300 ease-in-out
                                          hover:text-blue-500/50 hover:scale-[1.3]'/></a>
              </div>
              <div data-aos="fade-down" data-aos-duration="600">
              <a 
              href='mailto:tischenkodmitry01@gmail.com' 
              target="_blank" 
              className='mx-1'>
                <TbMail 
                className='w-10 h-10 duration-300 ease-in-out
                         hover:text-blue-500/50 hover:scale-[1.3]'/></a>
              </div>
          </div>
        </div>
      <h1 className='text-5xl font-bold' data-aos="fade-down" data-aos-duration="1300">I'm Mercelory</h1>
      <p className='text-xl' data-aos="fade-down" data-aos-duration="1400"><Typewriter
  options={{
    strings: ['React developer', 'FrontEnd Developer'],
    autoStart: true,
    loop: true,
  }}
/></p>
      </div> 
            <div data-aos="fade-right"  className='flex justify-center items-center flex-col h-screen'>
            <p className='text-center text-2xl mb-4 mt-3 font-bold 'data-aos="fade-down" data-aos-duration="900">Some infromation about me</p>
              <div className='containers flex justify-between items-center flex-wrap w-3/4
                              md:w-1/5 md:flex-row'>
                <div data-aos="fade-down" data-aos-duration="300">
                <div className={style.container}>
                  <p className='break-words'>My name is Dmitry, I am an active reactive developer. 
                    I haven't had any commercial experience yet. In my portfolio I have 2 completed projects, 
                    and a lot of developments. I continue to develop more and more every day.</p>
                </div>
                </div>
      
                <div data-aos="fade-down" data-aos-duration="400">
                <div className={style.container}>
                <p className='break-words'>At the moment I am a 6th year student at KKNAU (now KRFKNAU). 
                At the Faculty of Computer and Software Engineering</p>
                </div>
                </div>
              </div>
              </div>
              </>
  )
}

export default About