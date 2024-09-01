import { useState } from "react"
import { db} from "../../services/firebase" 
import { WriteBatch, collection, documentId, getDocs, query, where } from "firebase/firestore"


const checkOut = () => {
  const [loading, setLoading] = useState(false)
  const [orderCreated, setOrderCreated] = useState(false)
  const { cart, totalQuantity, getTotal } = useCart()
  const total = getTotal()

  const createOrder = async () => {
    setLoading(true)
    try {
      const objOrder = {
        buyer: {
          firstName: "seba",
          lastName: "guty",
          phone: 99999, address: "mi casa"
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date()

      }
      const ids = cart.map((item) => item.id)
      const productRef = collection(db, "ropaHeyPulga")
      const productAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids)))
      const { docs } = productAddedFromFirestore;

      const outOfStock = []
      const batch = WriteBatch(db)
      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;
        if (stockDB >= productQuantity) { batch.update(doc.ref, { stock: stockDB - productQuantity }) }
        else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      }); if (outOfStock.length === 0) {
        await batch.commit()
        const orderRef = collection(db, "orders")
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`el id de su orden es ${orderAdded.id}`)
        setOrderCreated(true)
        //agregar wea para limpiar el carrito
      } else {
        console.log("hay productos q estan fuera de stock") //agregar alarma en ui
      }


    } catch (error) { console.log("error") }
    finally {
      setLoading(false)
    }
    if (loading) {
      return <h1>generando orden</h1>
    }
    if (orderCreated) {
      <h1>la orden fue generada correctamente</h1>
    }
  }
  return (
    <div>
      <h1>checkOut</h1>
      {/* formulario nombre apellido, direccion,etc */}
      <button onClick={createOrder}>generar ordern</button>
    </div>
  )
}

export default checkOut 