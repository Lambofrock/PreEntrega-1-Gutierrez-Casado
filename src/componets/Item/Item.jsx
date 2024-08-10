import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({ id, name, price, category, img }) => {
  return (
    <article >

      <div >
        <div style={{paddingTop:20}} className="container text-center">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
   
            </div>

            <div className="card col" style={{ width: 300 }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>${price}</p>
                <p>Categoria: <strong>{category} </strong></p>
                <Link className="btn btn-primary" to={`/detail/${id}`}>Detalle</Link>
              </div>
            </div>
          </div>

        </div>

    </article>
  )
}


export default Item 