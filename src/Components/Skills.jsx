import React from 'react'
import html_ico from '../img/html5-plain 1.svg'
import css_ico from '../img/css3-plain 1.svg'
import js_ico from '../img/javascript-plain 1.svg'
import tailwind_ico from '../img/tailwindcss-plain 1.svg'
import sass_ico from '../img/sass-original 1.svg'
import materialUI_ico from '../img/materialui-original 1.svg'
import react_ico from '../img/react-original 1.svg'
import git_ico from '../img/git-original 1.svg'


export const Skills = () => {
  const style ={
    skills: `shadow-lg shadow-blue-500/50 rounded-xl p-3 m-2 w-16 ease-in-out duration-300 hover:scale-[1.3]`,
  }
  return (
    <div data-aos="fade-right"  id = "Skills" className='flex flex-col items-center justify-center h-screen'>
        <p className='mt-3 text-3xl font-bold'data-aos="fade-down" data-aos-duration="900">My skills</p>
        <div className='skiils_containers flex mt-4 justify-center items-center'>
            <div className='css flex flex-wrap justify-between items-center w-1/2'>
              <div data-aos="fade-right" data-aos-duration="300"><img className={style.skills} src ={html_ico}/></div>
              <div data-aos="fade-right" data-aos-duration="300"><img className={style.skills} src ={css_ico}/></div>
              <div data-aos="fade-left" data-aos-duration="400"><img className={style.skills} src ={tailwind_ico}/></div>
              <div data-aos="fade-left" data-aos-duration="400"><img className={style.skills} src ={sass_ico}/></div>
              <div data-aos="fade-right" data-aos-duration="500"><img className={style.skills} src ={js_ico}/></div>
              <div data-aos="fade-right" data-aos-duration="500"><img className={style.skills} src ={react_ico}/></div>
              <div data-aos="fade-left" data-aos-duration="600"><img className={style.skills} src ={git_ico}/></div>
              <div data-aos="fade-left" data-aos-duration="600"><img className={style.skills} src ={materialUI_ico}/></div>
            </div>
        </div>
        </div>
  )
}

export default Skills