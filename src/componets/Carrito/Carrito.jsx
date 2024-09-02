import React from 'react'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'


const Carrito = () => {
    const { cart, getTotal, totalQuantity } = useCart()
    const total = getTotal()
    if (totalQuantity === 0) {
        return <h1>Carrito vacio</h1>
    }

    return (
        <div className='pagar'>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))} console.log(item )
            <div className='holanda'>
            <h3>total: $ {total}</h3>
            <div className='pagar'>
                <button>limpiar carrito</button>
                <Link to="/CheckOut" type="button" className="btn boton-pagar btn-primary">
                    Pagar
                </Link>
            </div>
            </div>
         


        </div>
    )
}

export default Carrito