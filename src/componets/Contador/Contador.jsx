
import { useState } from "react"

function Contador() {
    const [cont,setCont] = useState(0)

    return (
    <div>
        <div>
            <hr />
            <button onClick={()=>{setCont(cont -1)}} >-</button>
            <p>{cont}<br/>
            https://developers.mercadolibre.com.ar/es_ar/items-y-busquedas
            </p>
            <button onClick={()=>{setCont(cont +1 )}} >+
            </button>
        </div>
    </div>
  )
}

export default Contador


