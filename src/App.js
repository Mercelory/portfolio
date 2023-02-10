import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
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
import firebase_ico from './img/firebase-plain 1.svg'
import weather_app from './img/weather.svg'
import todo from './img/todo.svg'


function App() {
  const style ={
    CV: `shadow-lg shadow-zinc-500/50 p-2.5 rounded-3xl mr-3 ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3`,
    contacts: `shadow-lg shadow-zinc-500/50 p-2.5 rounded-3xl flex ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3`
  }
  return (
    <div className='w-full m-auto box-border'>
    <ParallaxProvider>
        <div
      className='relative flex justify-center items-center h-screen'>
        <div className='flex flex-col text-center'>
          <h1 className='text-3xl'>Hello?</h1>
          <p className='text-sm'>scroll down</p>
        </div>
      </div>
      <div>
        <div className='h-screen flex flex-col justify-center items-center'>
          <div className='contacts flex justify-center items-center'>
            <div className={style.CV}>
              <a href ="#" className='text-4xl'>CV</a>
            </div>
            <div className = {style.contacts}>
                <a href = "#" className='mx-2'><img className ='w-9' src={github_ico} alt='github'></img></a>
                <a href = "#" className='mx-2'><img className ='w-9' src={telegram_ico} alt='telegram'></img></a>
                <a href = "#" className='mx-2'><img className ='w-10' src={gmail_ico} alt='gmail'></img></a>
                <a href = "#" className='mx-2'><img className ='w-10' src={linkedin_ico} alt='linkedin'></img></a>
            </div>
          </div>
        <h1 className='text-3xl mt-7'>I'm Mercelory</h1>
        <h2 className='text-xl'>React-developer</h2>
        </div>
        </div>
    <div>
        <div className='flex flex-col justify-center items-center h-screen'>
          <div className='containers flex flex-col justify-between w-2/3 flex-wrap h-fit items-center'>
            <div className='container_1 h-fit shadow-lg shadow-zinc-500/50 p-4 rounded-3xl ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3'>
              <p className='break-words'>My name is Dmitry, I am an active reactive developer. 
                I haven't had any commercial experience yet. In my portfolio I have 2 completed projects, 
                and a lot of developments. I continue to develop more and more every day.</p>
            </div>
            <p className='text-center text-2xl mt-4'>Some infromation about me</p>
            <div className='container_2 h-fit shadow-lg shadow-zinc-500/50 p-4 rounded-3xl ease-in-out duration-300 hover:scale-[1.1] hover:-translate-y-3'>
            <p className='break-words'>At the moment I am a 6th year student at KKNAU (now KRFKNAU). 
            At the Faculty of Computer and Software Engineering</p>
            </div>
          </div>
        </div>
        </div>
    <div>
        <div className='flex flex-col justify-center items-center mb-8 h-screen'>
          <p className='text-3xl'>My skills</p>
          <div className='skiils_containers flex mt-4 justify-evenly items-center'>
            <div className='shadow-lg shadow-zinc-500/50 rounded-3xl h-fit p-10 flex  flex-wrap ease-in-out duration-300 hover:scale-[1.1] hover:-translate-y-3'>
              <div className='css flex flex-wrap justify-between'>
              <img className ='w-12' src ={html_ico}/>
                <img className='m-2 w-12' src ={css_ico}/>
                <img className= 'm-2 w-12' src ={tailwind_ico}/>
                <img className='m-2 w-12' src ={sass_ico}/>
                <img className= 'm-2 w-12' src ={js_ico}/>
                <img className='m-2 w-12' src ={react_ico}/>
                <img className='m-2 w-12' src ={firebase_ico}/>
                <img className='m-2 w-12' src ={git_ico}/>
                <img className='m-2 w-12' src ={materialUI_ico}/>
              </div>
            </div>
          </div>
        </div>
        </div>
    <div className='flex flex-col justify-center items-center mb-8 h-screen'>
        <div>
          <h1 className='text-3xl text-center'>My projects</h1>
          <div className='mt-12 flex justify-evenly items-center '>
              <a className='shadow-lg shadow-zinc-500/50 p-5 rounded-3xl mr-3 ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3' href = "mercelory.github.io/weather"><img className='w-24' src={weather_app}></img></a>
              <a className='shadow-lg shadow-zinc-500/50 p-5 rounded-3xl mr-3 ease-in-out duration-300  hover:scale-[1.1] hover:-translate-y-3' href ="mercelory.github.io/to-do" ><img className='w-24' src={todo}></img></a>
          </div>
          </div>
          </div>
    </ParallaxProvider>
    <div className='footer fixed inset-x-0 bottom-0 p-5'>
    <div className='footer-elements flex justify-between'>
      <div className='footer-element'>
        Home
      </div>
      <div className='footer-element'>
        About
      </div>
      <div className='footer-element'>
        Skills
      </div>
      <div className='footer-element'>
        Projects
      </div>
    </div>
  </div>
  </div>
  );
}

export default App;
