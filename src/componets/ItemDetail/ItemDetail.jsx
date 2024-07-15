

const ItemDetail = ({name,img,category,description,stock,price}) => {
  return (
    <div>
        <article>
            <h1> {name} </h1>
            <p>{price}</p>
            <p src={img}></p>
            <p>category:{category}</p>
            <p>{description}</p>
            <p>{stock}</p>
        </article>
    </div>
  )
}

export default ItemDetail