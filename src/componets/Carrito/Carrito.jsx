import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {
    const { cartCount } = useContext(CartContext);
    console.log(cartCount)
    return (

        <div className='container'>
            <h1>Carrito</h1>
            {cartCount.map((prod) => {
                <h2>{prod.name}</h2>
            })}


        </div>
    )
}

export default Carrito