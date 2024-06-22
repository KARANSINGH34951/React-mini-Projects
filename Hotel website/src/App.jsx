import './App.css';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import { Provider } from 'react-redux';
import Store from './utili/Store.jsx';

function App() {
  return (
    <Provider store={Store}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
