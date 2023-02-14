import github_ico from './img/github.svg'
import gmail_ico from './img/gmail.svg'  
import linkedin_ico from './img/linkedin.svg'  
import telegram_ico from './img/telegram.svg'    
import html_ico from './img/html5-plain 1.svg'
import css_ico from './img/css3-plain 1.svg'
import js_ico from './img/javascript-plain 1.svg'
import tailwind_ico from './img/tailwindcss-plain 1.svg'
import sass_ico from './img/sass-original 1.svg'
import materialUI_ico from './img/materialui-original 1.svg'
import react_ico from './img/react-original 1.svg'
import git_ico from './img/git-original 1.svg'
import weather_app from './img/weather.svg'
import todo from './img/todo.svg'
import {BsMouse,BsMicrosoft,BsX} from 'react-icons/bs'
import CV from './CV.pdf'
import { motion } from "framer-motion"
import React,{useRef, useState} from 'react'

function App() {
  const scrollRef = useRef(null)
  const handleClickScrollToHome = () => {
    const element = document.getElementById('Home');
      element.scrollIntoView();
    }
    const handleClickScrollToAbout = () => {
      const element = document.getElementById('About');
        element.scrollIntoView();
      }
      const handleClickScrollToSkills = () => {
        const element = document.getElementById('Skills');
          element.scrollIntoView();
        }
        const handleClickScrollToProjects = () => {
          const element = document.getElementById('Projects');
            element.scrollIntoView();
          }
  const style ={
    CV: `shadow-lg shadow-zinc-500/50 p-2.5 rounded-3xl mr-3 ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3 hover:-skew-x-3`,
    contacts: `shadow-lg shadow-zinc-500/50 p-2.5 rounded-3xl flex ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3 hover:-skew-x-3`
  }
  const textAnimation = {
    hidden: {
      y:-100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2  },
    })
  }
  const [toggleState,setToggleState] = useState(0);
  const toggleTab = (index)=>{
    setToggleState(index)
  }
  return (
    <motion.section
    initial='hidden'
    whileInView='visible'>
          <div className='snap-start snap-mandatory snap-y scroll-smooth w-full m-auto box-border h-screen overflow-hidden overflow-y-scroll bg-gradient-to-r from-blue-300 to-purple-300 bg-cover bg-center bg-fixed'>
      <motion.div  custom={1} variants={textAnimation} id = "Home" className=' flex justify-center items-center h-screen snap-start'>
        <div  className='flex flex-col text-center h-24 overflow-hidden'>
        <h1 speed={-10} className='text-6xl font-bold'>Hello?</h1>
          <motion.p custom={2} variants={textAnimation} className='text-sm animate-bounce flex items-center mr-5 text-center justify-center'><BsMouse/>scroll down</motion.p>
        </div>
      </motion.div>

      <motion.div custom={2} variants={textAnimation}>
      <div  id = "About" className='flex flex-col justify-center items-center h-screen snap-always snap-start'>
        <div className='contacts flex justify-center items-center'>
          <div className={style.CV}>
            <a href ={CV} download target="_blank" className='text-4xl font-bold'>CV</a>
          </div>
          <div className = {style.contacts}>
              <a href='https://github.com/Mercelory' target="_blank" className='mx-2'><img className ='w-9' src={github_ico} alt='github'></img></a>
              <a href='https://t.me/tisdm' target="_blank" className='mx-2'><img className ='w-9' src={telegram_ico} alt='telegram'></img></a>
              <a href='mailto:tischenkodmitry01@gmail.com' target="_blank" className='mx-2'><img className ='w-10' src={gmail_ico} alt='gmail'></img></a>
          </div>
        </div>
      <h1 className='text-5xl mt-7 font-bold'>I'm Mercelory</h1>
      <p className='text-xl'>React-developer</p>
      </div>
      </motion.div>   
  <motion.div custom={5} variants={textAnimation}>
      <div className='flex justify-center items-center h-screen snap-start flex-col'>
      <p className='text-center text-2xl mb-4 mt-3 font-bold '>Some infromation about me</p>
        <div className='containers flex justify-between items-center w-1/2 flex-wrap'>
          <div className='w-64 mb-12 h-fit shadow-lg shadow-zinc-500/50 p-4 rounded-3xl ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3 hover:-skew-x-1'>
            <p className='break-words'>My name is Dmitry, I am an active reactive developer. 
              I haven't had any commercial experience yet. In my portfolio I have 2 completed projects, 
              and a lot of developments. I continue to develop more and more every day.</p>
          </div>

          <div className='container_2 w-64 h-fit shadow-lg shadow-zinc-500/50 flex-2 p-4 rounded-3xl ease-in-out duration-300 hover:scale-[1.1] hover:-translate-y-3 hover:-skew-x-1'>
          <p className='break-words'>At the moment I am a 6th year student at KKNAU (now KRFKNAU). 
          At the Faculty of Computer and Software Engineering</p>
          </div>
        </div>
      </div>
      </motion.div>
  <motion.div custom={2} variants={textAnimation}>
      <div id = "Skills" className='flex flex-col items-center justify-center h-screen snap-start p-4'>
        <p className='mt-3 text-3xl'>My skills</p>
        <div className='skiils_containers flex mt-4 justify-center items-center w-fit'>
          <div className='shadow-lg shadow-zinc-500/50 rounded-3xl h-fit p-10 flex  flex-wrap ease-in-out duration-300 hover:scale-[1.1] hover:-translate-y-3 hover:-skew-x-1'>
            <div className='css flex flex-wrap justify-between items-center '>
            <img className ='m-2 w-12' src ={html_ico}/>
              <img className='m-2 w-12' src ={css_ico}/>
              <img className= 'm-2 w-12' src ={tailwind_ico}/>
              <img className='m-2 w-12' src ={sass_ico}/>
              <img className= 'm-2 w-12' src ={js_ico}/>
              <img className='m-2 w-12' src ={react_ico}/>
              <img className='m-2 w-12' src ={git_ico}/>
              <img className='m-2 w-12' src ={materialUI_ico}/>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
  <motion.div custom={3} variants={textAnimation} id = "Projects" className='flex flex-col items-center justify-center h-screen snap-start p-4'>
      <div>
        <h1 className='text-3xl text-center mt-3 font-bold'>My projects</h1>
        <div className='mt-12 flex justify-evenly items-center w-fit'>
            <a href='https://mercelory.github.io/weather/' target="_blank" className='shadow-lg shadow-zinc-500/50 p-5 rounded-3xl mr-3 ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-1 font-bold' ><img className='w-24 bg-transparent  rounded-xl p-3' src={weather_app}></img>Weather app</a>
            <a href='https://mercelory.github.io/to-do/' target="_blank" className='shadow-lg shadow-zinc-500/50 p-5 rounded-3xl mr-3 ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-1 font-bold' ><img className='w-20 bg-transparent p-3 rounded-xl' src={todo}></img>To-do app</a>
        </div>
        </div>
        </motion.div>
        </div>
    <motion.div custom={2} variants={textAnimation} className='footer fixed inset-x-0 bottom-0 p-5 m-auto items-center justify-center flex'>
    <div className='footer-elements flex justify-between items-center font-bold px-3 absolute bottom-12 h-12 w-36 flex-wrap'>
      <motion.button
       custom={3}
        variants={textAnimation}
         className=''
          onClick={handleClickScrollToHome}>
        <div className='w-3 h-3 rounded-full bg-black/25 ease-in-out duration-300 active:bg-black/75 active:scale-[2] hover:scale-[2] hover:bg-black/75'/>
      </motion.button>
      <motion.button custom={4} variants={textAnimation} className='footer-element' onClick={handleClickScrollToAbout}>
      <div className='w-3 h-3 rounded-full bg-black/25 ease-in-out duration-300 active:bg-black/75 active:scale-[2] hover:scale-[2] hover:bg-black/75'/>
      </motion.button>
      <motion.button custom={5} variants={textAnimation} className='footer-element'onClick={handleClickScrollToSkills}>
      <div className='w-3 h-3 rounded-full bg-black/25  ease-in-out duration-300 active:bg-black/75 active:scale-[2] hover:scale-[2] hover:bg-black/75'/>
      </motion.button>
      <motion.button custom={6} variants={textAnimation} className='footer-element'onClick={handleClickScrollToProjects}>
      <div className='w-3 h-3 rounded-full bg-black/25 ease-in-out duration-300 active:bg-black/75 active:scale-[2] hover:scale-[2] hover:bg-black/75'/>
      </motion.button>

    </div>
  </motion.div>
  
  </motion.section>
  );
}

export default App;
