
import { useState } from "react"

function Contador({stock, valorInicial=1 ,onAdd}) {
    const [cont, setCont] = useState(valorInicial)
    const sumar = () => {if (stock>cont){ setCont (cont =>cont + 1) }  }
    const restar = () => { if(cont>1){setCont(cont - 1) }}
    return (
        <div>
            <div>

                <button onClick={restar} >-</button>
                <h3>{cont} <br/></h3>
                <button onClick={sumar} >+
                </button>
                <button></button>

            </div>
        </div>
    )
}

export default Contador


