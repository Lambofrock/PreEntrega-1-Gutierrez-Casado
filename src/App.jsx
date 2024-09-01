//import {  useState } from 'react'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/itemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { createContext } from 'react'
import { CartContext } from './context/CartContext'
import Carrito from './componets/Carrito/Carrito'
import CheckOut from './componets/CheckOut/CheckOut'
export const Contexto = createContext()
import { CartProvider } from './context/CartContext'



function App() {
  document.body.style = 'background: black';

  /*   const [cartCount, setCartCount] = useState([])
    const cantidadEnCarrito = () => {
      return cartCount.reduce((acc, prod) => acc + prod.cantidad, 0);  }*/

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer greetings={"Lista de productos"} />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/CheckOut' element={<CheckOut />} />


        </Routes>
      </CartProvider>

    </BrowserRouter>
  )

}

export default App
