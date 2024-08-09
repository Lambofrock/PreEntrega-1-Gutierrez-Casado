import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ()=>{{
  getProductById (id)
  .then((res)=>{ 
    setProduct(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}
return (
  <div>
    <ItemDetailContainer/>
  </div>
)}


export default ItemDetailContainer


