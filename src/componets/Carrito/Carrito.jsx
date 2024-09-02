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
        <div >
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))} 
            <div>
          
            <div  className='pagar'>
            <h3>total: $ {total}</h3>
           
                <Link to="/CheckOut" type="button" className="btn boton-pagar btn-primary">
                   checkout
                </Link>
                <hr />
                <button>limpiar carrito</button>
            </div>
            </div>
         


        </div>
    )
}

export default Carrito