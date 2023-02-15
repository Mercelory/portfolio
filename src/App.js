import React,{useRef, useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Home} from './Components/Home'
import {About} from './Components/About'
import {Skills} from './Components/Skills'
import {Projects} from './Components/Projects'
import {Footer} from './Components/Footer'

function App() {

  useEffect(() => {
    AOS.init({ duration: 300 })
  }, []);

  
  return (
    <section className='bg-gradient-to-br box-border from-blue-300 to-purple-300 bg-fixed h-fit
                        dark:from-[#000000] dark:to-[#251e49] dark:text-[#bbbbbb]'>    

    <Home/>

    <About/>

    <Skills/>

    <Projects/>

    <Footer/>

  </section>
  );
}

export default App;
