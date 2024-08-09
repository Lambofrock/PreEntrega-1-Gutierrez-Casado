import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory,  } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

function ItemDetailContainer ({greetings}) {
  const [products,setProduct] = useState ([])
  const   [loading,setLoading ] = useState(true)
  const {categoryId} = useParams ()

  useEffect (()=>{
    setLoading(true)

    const collectionRef = categoryId
    ? query (collection(db), "productos"  ), where ("category","==", categoryId) : collection ( db,"productos")

    getDocs(collectionRef)
    .then ( (querySnapshot)=>{console.log(response)})
const productos = querySnapshot.docs.map((doc)=> {return {id:doc.id,...doc.data()}})
    .catch ( error => {
      console.log(error)
      .finally(()=>{
        setLoading(false)
      })
    })})}













    
{

  /*const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const {category} = useParams ()
    console.log(category)

    useEffect(() => {
      if(!category) {

        getProducts().
        then((res) => {
          setProducts(res)
        }).catch(() => console.log(err))
      }else{
        getProductsByCategory(category)
        .then((res)=>{
          setProducts (res)
        })
        .catch((err)=>console.log(err))
      }
    
    }, [category])


    return (
      <div>
      <h1> {greetings} </h1>

        <ItemList  products={products} />
    

      </div>
    )}*/}

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