import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ShopBySeller from './components/ShopBySeller/ShopBySeller'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <ShopBySeller/>
      </div>
  )
}

export default App
