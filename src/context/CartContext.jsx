import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cont, setCartCount] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
       
    } 
    const addItem = (productoAgregar) => {
        if (!isInCart(productoAgregar.id)) { setCart(prev => [...prev, productoAgregar]) }
        else { console.error("ya esta en el carro") }

    }
    const getTotalQuantity = ()=>{
        let num = 0; cart.forEach(prod =>  { num += prod.quantity}); return num;
    }
    const totalQuantity = getTotalQuantity()
    const obj= { totalQuantity} 
console.log(totalQuantity)
    return (
        <CartContext.Provider value = {totalQuantity}>
            {children}
        </CartContext.Provider>
    )
}