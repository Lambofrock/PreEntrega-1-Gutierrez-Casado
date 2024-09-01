import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({ id, name, price, category, img }) => {
  return (
    <article >

      <div className='card-background' >
        <div className="fondo" style={{paddingTop:20}}>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 tarjeta-madre ">
   
            </div>

            <div className="card col tarjeta-producto" style={{ width: 300 }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>${price}</p>
                <Link className="btn color-boton" to={`/detail/${id}`}>Detalle</Link>
              </div>
            </div>
          </div>

        </div>

    </article>
  )
}


export default Item 