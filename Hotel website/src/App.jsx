import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.3581441&lng=77.7135612&restaurantId=105439&isMenuUx4=true&submitAction=ENTER



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Outlet />
    
    </div>
  )

}


export default App
