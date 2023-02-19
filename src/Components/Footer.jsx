import React, {useState,useEffect,useRef} from 'react'
import { TbMoon, TbSun } from "react-icons/tb";
import { HashLink as NavLink } from 'react-router-hash-link';

export const Footer = () => {
  const style = {
    footerCircles: `w-3 h-3 rounded-full bg-black/50 m-1 ease-in-out duration-300 
                    dark:bg-slate-200/25 
                    hover:bg-blue-500/50 hover:scale-[1.5] hover:mx-2 md:hover:w-6 md:hover:h-3 hover:h-6 hover:`,
   footerCirclesActive: `bg-blue-500/50 scale-[1.5] mx-2 md:w-6 md:h-3 h-6`,
  }

  const [toggleState, setToggleState] = useState(0);
  const [theme, setTheme] = useState(null);
  const [activeLink, setActiveLink] = useState(null)

  const handleOnClick = (index) => {
    setActiveLink(index);
  }

  const toggleTab = (index)=>{
    setToggleState(index)
  }

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
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
                      
      <NavLink to = '#Home' onClick={() => handleOnClick(0)} data-aos="fade-up" data-aos-duration="300">
      <div className={`${style.footerCircles} ${activeLink === 0 ? `${style.footerCirclesActive}` : `${style.footerCircles}`}`} ></div>
      </NavLink>
      <NavLink to = '#About' onClick={() => handleOnClick(1)} data-aos="fade-up" data-aos-duration="300">
      <div className={`${style.footerCircles} ${activeLink === 1 ? `${style.footerCirclesActive}` : `${style.footerCircles}`}`} ></div>
      </NavLink>
      <NavLink to = '#Skills' onClick={() => handleOnClick(2)} data-aos="fade-up" data-aos-duration="300">
      <div className={`${style.footerCircles} ${activeLink === 2 ? `${style.footerCirclesActive}` : `${style.footerCircles}`}`} ></div>
      </NavLink>
      <NavLink to = '#Projects' onClick={() => handleOnClick(3)} data-aos="fade-up" data-aos-duration="300">
      <div className={`${style.footerCircles} ${activeLink === 3 ? `${style.footerCirclesActive}` : `${style.footerCircles}`}`} ></div>
      </NavLink>
      <NavLink className='footer-element' onClick={handleThemeSwitch} data-aos="fade-up" data-aos-duration="700">
      {theme === 'dark' ? <TbMoon className='w-6 h-6 dark:text-slate-200/25  ease-in-out duration-300 hover:text-blue-500/50 hover:scale-[1.5] hover:mx-2 '/> : <TbSun className='w-6 h-6 text-black/75 ease-in-out duration-300  hover:text-blue-500/50 hover:scale-[1.5] hover:mx-2'/>}
      </NavLink>
    </div>
  </div>
  )
}

export default Footer