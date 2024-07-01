import { useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'




function App() {

  const [cartCount] = useState(10)
  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer greetings="bienvenido a Hey Pulga!" />
    </>
  )
}
 
export default App
