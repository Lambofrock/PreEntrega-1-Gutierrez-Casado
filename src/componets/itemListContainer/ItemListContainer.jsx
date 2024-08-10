import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { db } from "../../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    const collectionRef = category
      ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products")
    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setProducts(products)
      })
  })



  return (
    <div>
      <h1> {greetings} </h1>

      <ItemList products={products} />


    </div>
  )
}

export default ItemListContainer














{/*import { useEffect,useState } from "react"
import { getProducts} from "../../asyncMock"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"

xonar ItemListContainer({greetings}) {
  const [products,setProducts] = useState ([])
useEffect (()=>{
 getProducts ().then ((res)=> {
  setProducts(res)
 })}, []) 

  return (
    <>
    <ItemList products={products}/>

    <Item/>
    </> 
  )
}

export default ItemListContainer*/}