import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'

const Footer=()=>{
  return (
    <div className='footer'>
      <h1>Footer</h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Body/>
      <Footer/>
    </div>
  )

}

export default App
