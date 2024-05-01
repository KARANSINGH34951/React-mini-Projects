import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'

function App() {
  

  return (
    <div className='app'>
      <Header />
      <Outlet />
    
    </div>
  )

}


export default App
