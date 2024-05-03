import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer.jsx'

function App() {
  

  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    
    </div>
  )

}


export default App
