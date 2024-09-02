import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import './itemDetail.css'
import { Link } from "react-router-dom"



const ItemDetail = ({ name, img, description, price, stock, id }) => {
  const { addItem, isInCart } = useContext(CartContext)
  const [cont, setCont] = useState(1)

  const sumar = () => { if (stock > cont) { setCont(cont => cont + 1) } }
  const restar = () => { if (cont > 1) { setCont(cont - 1) } }

  const handleAgregar = () => {
 
    const productObj = {
      id, name, img , price,quantity: cont
    }

    addItem(productObj)
  }


  return (
    <div>

      <article>
        <div style={{ paddingInline: 100, paddingTop: 20 }}>
          <div className="card card-background" style={{ width: 300 }}>

            <img src={img} className="card-img-top" alt="img producto" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>${price}</p>

              <p className="card-text"> {description}</p>
              <p>stock : <strong>{stock}</strong></p>
              <div>

                <div className="stock">

                  <button className="boton-stock" onClick={restar} >-</button> <h3 className="num-stock"> {cont}  </h3><button className="boton-stock" onClick={sumar} >+
                  </button>

                  {
                    isInCart(id) ? ( <Link className="boton-stock-final" to="/Carrito">Finalizar Compra</Link> ) :
                     (<button className="boton-stock" onClick={handleAgregar}> Añadir al Carro</button>)
                  }
                </div>

              </div>

            </div>

          </div>
        </div>

      </article>
    </div>
  )
}


export default ItemDetail



/* const cantidad = cont;
const handleAgregar = () => {
  const productoAgregado = { name, img, category, description, price, cantidad, id };
  if (cartCount.find((products) => products.id === productoAgregado.id)) { console.log("esta en el carrito") } else { console.log("no esta") } setCartCount([cantidad, ...cartCount, productoAgregado])

const nuevoCarrito = [...cartCount];
const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);
if (estaEnElCarrito) { 
  estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad ; setCartCount(nuevoCarrito)
} else {
  setCartCount([...cartCount, productoAgregado]);
}  }
 */