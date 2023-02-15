import React from 'react'
import weather_app from '../img/Weather-app.png'
import todo from '../img/To-do-app.png'

export const Projects = () => {
  const style ={
    container: `mb-8 shadow-lg shadow-blue-500/50 p-4 rounded-3xl flex items-center ease-in-out duration-300 
              hover:scale-[1.1]`,
  }
  return (
    <div id = "Projects" className='flex flex-col items-center justify-center h-fit' >
        <h1 className='text-3xl font-bold mb-12'>My projects</h1>
        <div className='flex flex-col h-fit'>
          <div data-aos="fade-down" data-aos-duration="900" >
            <a id = "weather" href='https://mercelory.github.io/weather/' target="_blank" className={style.container} ><img className='w-24 md:w-48 ' src={weather_app}>
              </img>
              <div className='flex flex-col justify-center items-center text-center break-word '>
              <h1 className='font-bold text-center text-3xl mt-8'>Weather-app</h1>
              <span className=' text-center text-xl'>See current and forecasted weather. Made with React and Axios</span>
              </div>
              </a>
              </div>

              <div data-aos="fade-down" data-aos-duration="1000">
              <a  id = "to-do" href='https://mercelory.github.io/weather/' target="_blank" className={style.container} ><img className='w-24 md:w-48' src={todo}>
              </img>
              <div className='flex flex-col justify-center items-center text-center break-word'>
              <h1 className='font-bold text-center text-3xl mt-8'>To-do-app</h1>
              <span className=' text-center text-xl'>Create to do lists & track your productivity. Made with React and Firebase</span>
              </div>
              </a>
              </div>
        </div>
        </div>
  )
}

export default Projects