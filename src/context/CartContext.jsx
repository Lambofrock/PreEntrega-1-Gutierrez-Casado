import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = () => {
    const [cont, setCartCount] = useState([])

    return (
        <div></div>
    )
}