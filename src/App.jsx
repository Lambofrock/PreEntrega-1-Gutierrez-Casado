import { useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'
import Contador from './componets/Contador/Contador';





function App() {
  document.body.style = 'background: black';
  const element = <h1 style={{ color: 'red' }}>Hello world</h1>
 
  const [cartCount] = useState (0)
const [cont] = useState()

  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer greetings="Bienvenido a Hey Pulga!" />
<Contador/>
    </>
  )
 
}
 
export default App
