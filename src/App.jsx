import { useEffect, useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'
import Contador from './componets/Contador/Contador'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
 


function App() {
  document.body.style = 'background: black';
 


  const [cartCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
  

      <Contador />
   
    </BrowserRouter>
  )

}

export default App
