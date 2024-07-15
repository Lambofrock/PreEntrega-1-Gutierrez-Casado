import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  console.log(id)
  useEffect(() => {


    getProductById(id)
      .then((res) => {
        setProduct(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [id])
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer


{/*getProductById (id)
.then((res)=>{
  setProduct(res)
})
.catch((err)=>{
  console.log(err)
})*/}