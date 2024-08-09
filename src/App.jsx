import { useEffect, useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'
import Contador from './componets/Contador/Contador'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'



function App() {
  document.body.style = 'background: black';



  const [cartCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de productos"} />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />}/> 
        <Route path='/carrito' />
        <Route path='/checkout' />
      </Routes>


      <Contador />

    </BrowserRouter>
  )

}

export default App
