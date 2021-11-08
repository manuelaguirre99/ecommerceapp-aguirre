import React, { useState } from "react";

const Contador = () =>{

    const [numero, setNumero] = useState(1)
    const aumentar = () => {
        setNumero(numero + 1)
    }
    const disminuir = () => {
        setNumero(numero - 1)
    }


    return(
        <div>
            <h2>Cantidad del numero: {numero}</h2>
            <button onClick={aumentar} className="Contador">aumentar</button>
            <button onClick={disminuir} className="Contador">disminuir</button>

        </div>
    )
}

export default Contador