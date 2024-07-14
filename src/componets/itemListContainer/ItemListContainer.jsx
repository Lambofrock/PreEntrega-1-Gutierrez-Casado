import { useEffect,useState } from "react"
import { getProducts  } from "../../asyncMock"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"

function ItemListContainer({greetings}) {
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

export default ItemListContainer