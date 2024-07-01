import { useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'




function App() {
  document.body.style = 'background: black';
  const element = <h1 style={{ color: 'red' }}>Hello world</h1>

  const [cartCount] = useState(10)
  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer greetings="Bienvenido a Hey Pulga!" />
    </>
  )
 
}
 
export default App
