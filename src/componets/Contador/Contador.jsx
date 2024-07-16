
import { useState } from "react"

function Contador() {
    const [cont,setCont] = useState(0)

    return (
    <div>
        <div>

            <button onClick={()=>{setCont(cont -1)}} >-</button>
            <p>{cont}<br/>
            </p>
            <button onClick={()=>{setCont(cont +1 )}} >+
            </button>
        </div>
    </div>
  )
}

export default Contador


