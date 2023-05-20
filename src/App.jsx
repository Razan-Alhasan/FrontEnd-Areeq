import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Mynav from './components/DefaultLayout/Navbar/Navbar';
import Footer from './components/DefaultLayout/Footer/Footer';

function App() {
  return (
    <div className="App">
      < Mynav />
      <p>"</p>
      <Footer/>

      </div>
  )
};
export default App