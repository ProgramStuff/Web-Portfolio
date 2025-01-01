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
      <Container id='card-container'>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </Container>
      <Footer/>
    </>
  )
}

export default App
