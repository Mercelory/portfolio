import React from 'react'
import {TbMouse} from "react-icons/tb";

export const Home = () => {
  return (
    <div id = "Home" className='snap-start shrink-0 flex justify-center items-center h-screen' >
    <div  className='flex flex-col text-center h-24'>
    <h1 
    className='text-6xl font-bold' 
    data-aos="fade-right" 
    data-aos-duration="300">Hello?</h1>
      <p  
      className='text-sm animate-bounce flex items-center mr-5 text-center justify-center' 
      data-aos="fade-down" 
      data-aos-duration="400"><TbMouse/>scroll down</p>
    </div>
  </div>
  )
}

export default Home