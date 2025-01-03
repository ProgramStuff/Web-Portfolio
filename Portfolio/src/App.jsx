import { useState } from 'react'
import './App.css'

import ResponsiveAppBar from './components/ResponsiveAppBar'

import Body from './Body'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  )
}

export default App
