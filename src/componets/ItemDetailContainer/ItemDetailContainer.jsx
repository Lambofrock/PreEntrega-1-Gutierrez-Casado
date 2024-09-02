import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase';
import { doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();



  useEffect(() => {
    getDoc(doc(db, "ropaHeyPulga", id))
      .then((QuerySnapshot) => {
        const product = { id: QuerySnapshot.id, ...QuerySnapshot.data() }
        setProduct(product)
      })
  }, []);



  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
