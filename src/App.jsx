import { useContext, useEffect, useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { createContext } from 'react'
import { CartContext } from './context/CartContext'
export const Contexto = createContext()




function App() {
  document.body.style = 'background: black';


  const [cartCount,setCartCount] = useState([])

  return (
    <BrowserRouter>
   <CartContext.Provider value= {{cartCount,setCartCount}}>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer greetings={"Lista de productos"} />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />

        </Routes>
   
        </CartContext.Provider>
    </BrowserRouter>
  )

}

export default App
