
import { useState } from "react"

function Contador() {
    const [cont,setCont] = useState(0)

    return (
    <div>
        <div>
            <button onClick={()=>{setCont(cont -1)}} >-</button>
            <p>{cont}</p>
            <button onClick={()=>{setCont(cont +1 )}} >+
            </button>
        </div>
    </div>
  )
}

export default Contador

https://developers.mercadolibre.com.ar/es_ar/items-y-busquedas
