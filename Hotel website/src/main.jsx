import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from './components/Error.jsx' 
import Body from './components/Body.jsx'
import Restaurantmenu from './components/Restaurantmenu.jsx'
import Cart from './components/Cart.jsx'
import ShimmerCards from './components/Shimmercards.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/restaurant/:id',
        element:<Restaurantmenu/>
      
      }
    ],
    errorElement:<Error/>
  },
  // {
  //   path: '/login',
  //   element: <Login/>
  // },
  {
    path: '/shimmer',
    element: <ShimmerCards />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


