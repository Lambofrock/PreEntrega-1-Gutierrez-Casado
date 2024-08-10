import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"



const ItemDetail = ({ name, img, category, description, price, stock, id }) => {
  const { cartCount, setCartCount, cart } = useContext(CartContext)
  console.log(cartCount)
  const [cont, setCont] = useState(1)
  const sumar = () => { if (stock > cont) { setCont(cont => cont + 1) } }
  const restar = () => { if (cont > 1) { setCont(cont - 1) } }
  const cantidad = cont;
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


  return (
    <div>
      <article>
        <div style={{ paddingInline: 100, paddingTop: 20 }}>
          <div className="card" style={{ width: 300 }}>

            <img src={img} className="card-img-top" alt="img producto" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>${price}</p>
              <p>categoria: <strong>{category} </strong></p>
              <p className="card-text">descripcion del producto: {description}</p>
              <p>productos en stock : <strong>{stock}</strong></p>
              <div>

                <div>

                  <button onClick={restar} >-</button>
                  <h3>{cont} <br /></h3>
                  <button onClick={sumar} >+
                  </button>
                  <button onClick={handleAgregar}>agregar al carrito</button>

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
