import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import { darkMode, setDarkMode } from "../pages/index.js"
import { useTheme } from 'next-themes';
import Portfolio from '@/Components/Portfolio';
import About from '@/Components/About';
import Footer from '@/Components/Footer';
import Certifications from './Certifications.jsx';
import Education from './Education.jsx';


const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''} >
      <main className=' bg-back  dark:bg-gray-800 '  >
        <nav className=' h-0 py-10  flex justify-between   bg-back px-5 dark:bg-gray-800'>
          <ul className='flex items-center'>
            <h1 className='text-xl font-burtons dark:text-slate-300 '> NaSH </h1>
          </ul>
          <ul className='flex items-center ' >
            <li>
              < BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl dark:fill-slate-300 hover:scale-125 hover:text-slate-500 transition transform' />
            </li>
            <li>
              <a className=' shadow-xl border-2 border-gray-500 text-black px-2 py-2 rounded-2xl ml-3 md:ml-8 hover:bg-slate-500 hover:text-slate-50 transition transform
              dark:text-slate-100' href="#footer" >
                Contact Me </a>
            </li>
            <li>
              <a className=' shadow-xl border-2 border-gray-500 text-black px-2 py-2 rounded-2xl ml-3 md:ml-8 hover:bg-slate-500 hover:text-slate-50 transition transform
              dark:text-slate-100' href="resume.pdf" download="Himash_CV" target="_blank" >
                RESUME </a>
            </li>
          </ul>
        </nav>
        <section className='min-h-screen px-10'>
          <About />

        </section>
        <section className='min-h-screen px-10'>
          <Education />
          <Certifications />
          <Portfolio />

        </section>
        <section id='footer'>
          <Footer />
        </section>

      </main>

    </div>
  )
}

export default App
