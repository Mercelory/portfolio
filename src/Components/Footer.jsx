import React, {useState,useEffect,useRef} from 'react'
import { TbMoon, TbSun } from "react-icons/tb";

export const Footer = () => {
  const style = {
    footerCircles: `w-3 h-3 rounded-full bg-black/50 m-1 ease-in-out duration-300 
                    dark:bg-slate-200/25 
                    hover:bg-blue-500/50 hover:scale-[1.5]`,
  }
  const [toggleState, setToggleState] = useState(0);
  const [theme, setTheme] = useState(null);
  const toggleTab = (index)=>{
    setToggleState(index)
  }

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

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

useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').
    matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }, [])

  useEffect(() =>{
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div  className='footer relative' >
    <div className='footer-elements flex fixed h-screen bottom-0 right-0 flex-col p-5 items-center justify-center
                    md:right-0 md:flex-row md:h-9 md:w-screen'>
      <button className='footer-element' onClick={handleClickScrollToHome} data-aos="fade-up" data-aos-duration="300">
      <div className={style.footerCircles}></div>
      </button>
      <button className='footer-element' onClick={handleClickScrollToAbout} data-aos="fade-up" data-aos-duration="400">
      <div className={style.footerCircles} ></div>
      </button>
      <button className='footer-element'onClick={handleClickScrollToSkills} data-aos="fade-up" data-aos-duration="500">
      <div className={style.footerCircles} ></div>
      </button>
      <button className='footer-element'onClick={handleClickScrollToProjects} data-aos="fade-up" data-aos-duration="600">
      <div className={style.footerCircles} ></div>
      </button>
      <button className='footer-element' onClick={handleThemeSwitch} data-aos="fade-up" data-aos-duration="700">
      {theme === 'dark' ? <TbMoon className='w-6 h-6 dark:text-slate-200/25'/> : <TbSun className='w-6 h-6 text-black/75 transform hover:text-blue-500/50 hover:scale-[1.5]'/>}
      </button>
    </div>
  </div>
  )
}

export default Footer