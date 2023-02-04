import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Slide from './components/slide/Slide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Slide/>
    </div>
  )
}

export default App
