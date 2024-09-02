import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { db } from "../../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()


  useEffect(() => {
 
    const collectionRef = categoryId
      ? query(collection(db, "ropaHeyPulga"), where("category", "==", categoryId)) : collection(db, "ropaHeyPulga"); console.log("reading db")
    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setProducts(products)
      })
   
  },[])


  return (
    <div>
      <h1> {greetings} </h1>

      <ItemList products={products} />


    </div>
  )
}

export default ItemListContainer












