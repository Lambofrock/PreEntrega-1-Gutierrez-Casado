import React from 'react'
import Item from '../Item/Item'
import './ItemList.css' 

const ItemList = ({ products }) => {

  return (
    <div>
      <div className='fondo2'>
      {products.map(prod => {
        return <Item key={prod.id} {...prod} />
      })}
      </div>
    
    </div>
  )
}

export default ItemList 