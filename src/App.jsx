import { useState } from 'react'
import NavBar from './componets/NavBar/NavBar'




function App() {

const [cartCount] = useState(6)
  return (
    <>
      <NavBar cartCount={cartCount }/>
    </>
  )
}

export default App
