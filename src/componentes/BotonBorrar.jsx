import React from "react";
import "../hojas-de-estilo/BotonBorrar.css"

const BotonBorrar = (props) =>(
    <button className="boton-borrar" onClick={props.manejarBorrar}>
        {props.children}
    </button>
)

export default BotonBorrar;