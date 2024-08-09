import React from 'react'
import { useState, useEffect } from 'react'
//import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase';
import { collection, getDoc, getDocs, query, QuerySnapshot } from 'firebase/firestore';

useEffect(()=>{
  getDoc(doc(db,"productos",productId))
  .then((QuerySnapshot)=>{
    const product = {id:QuerySnapshot.id, ...QuerySnapshot.data () }
    setProduct(product); +
  
  })
  .catch ((error)=>console.log(error))
  .finally(()=>{
    setLoading(false);
  
  })
},[productId])

export default ItemDetailContainer


{/*getProductById (id)
.then((res)=>{ 
  setProduct(res)
})
.catch((err)=>{
  console.log(err)
})*/}