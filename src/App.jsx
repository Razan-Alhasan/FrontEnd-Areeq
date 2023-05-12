import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProduct from './components/Product/AddProduct/AddProduct';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      < AddProduct/>
      </div>
  )
}

export default App
