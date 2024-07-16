

const ItemDetail = ({ name, img, category, description, price }) => {
  return (
    <div>
      <article>
      <div className="card" style={{width: 300}}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>${price}</p>
            <p>categoria: <strong>{category} </strong></p>
            <p className="card-text">{description}</p>

          </div>
        </div>

      </article>
    </div>
  )
}

export default ItemDetail


{/*

             <h1><strong> {name}</strong> </h1>
            <p>${price}</p>
            <img src={img} style={{width:100}} />
            <p>category: <strong>{category} </strong></p>
            <p><strong>{description}</strong></p>
         
    <div>
        <article>
            <h1><strong> {name}</strong> </h1>
            <p>${price}</p>
            <img src={img} style={{width:100}} />
            <p>category:{category}</p>
            <p>{description}</p>
            <p>{stock}</p>
        </article>
    </div>
*/  }