import './App.css'
import Header from './components/Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import  {Provider} from 'react-redux'
import Store from './utili/Store.jsx'

function App() {
  

  return (
   <Provider store={Store}>
      <div className='app'>
        <Header />
          <Outlet />
          <Footer />
      </div>
    </Provider>
  )

}


export default App
