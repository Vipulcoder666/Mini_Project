import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NGOs from './Components/NGOs'
import Doners from './Components/Doners'
import Admins from './Components/Admins'
import Campagins from './Components/Campagins'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <NGOs/>
     <Doners/>
     <Admins/>
     <Campagins/>     
    </>
    
  )
}

export default App
