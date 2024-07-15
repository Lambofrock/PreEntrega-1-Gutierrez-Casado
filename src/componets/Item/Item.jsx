import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,name,price,category,img}) => {
  return (
    <article>
<h1> {name} </h1>
<img src={img} style={{width:100}} />
<p>categoria: {category} </p>
<h2>{price} </h2>
<Link to={`/detail/${id}`}>ver detalle</Link>
<hr />
    </article>
  )
}

export default Item 