import React from 'react'
const categorias= ["poleron","swater","polera","niños"]
console.log(categorias)
function ItemListContainer({greetings}) {
  return (
    <>
     <h2 className=" text-light d-flex justify-content-center">{greetings}</h2>
     <ul className='list-group '>
     {categorias.map(category => (
        <li className='list-group-item w-25 p-3 d-flex justify-content-center'>{category}</li>
     ))}
     </ul>
    
    </> 
  )
}

export default ItemListContainer