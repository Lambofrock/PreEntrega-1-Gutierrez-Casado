import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {getProductById} from "../../asyncMock"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();


  useEffect(() => {
getProductById (id)
.then ((res)=>{
  setProduct(res)})
  
  }, [id]);



  return (
    <div>
<ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
