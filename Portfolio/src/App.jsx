import { useState } from 'react'
import './App.css'

import ResponsiveAppBar from './components/ResponsiveAppBar'
import ActionCard from './components/ActionCard'
import { Container } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <Footer/>
    </>
  )
}

export default App
