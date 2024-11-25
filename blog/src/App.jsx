import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Admin from './Components/Admin'
import Charity from './Components/Charity'
import Doner from './Components/Doner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <Admin/>
     <Charity/>
     <Doner/>
    </>
    
  )
}

export default App
