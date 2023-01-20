import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import { ReactDOM } from 'react';
import App from '@/Components/App';




export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <App/>
  )
}