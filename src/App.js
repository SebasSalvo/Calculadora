import './App.css';
import logo from "./imagenes/logo512.png"
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonBorrar from './componentes/BotonBorrar';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) =>{
    setInput(input + val);
  }

  const calcularResultado = () =>{
    if(input){
    setInput(evaluate(input));
  }else{
    alert('Por favor ingrese un valor')
  }
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
     <img 
     src={logo}
     className='logo'
     alt='logo'/>
     </div>
     <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarCLick={agregarInput}>1</Boton>
        <Boton manejarCLick={agregarInput}>2</Boton>
        <Boton manejarCLick={agregarInput}>3</Boton>
        <Boton manejarCLick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarCLick={agregarInput}>4</Boton>
        <Boton manejarCLick={agregarInput}>5</Boton>
        <Boton manejarCLick={agregarInput}>6</Boton>
        <Boton manejarCLick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarCLick={agregarInput}>7</Boton>
        <Boton manejarCLick={agregarInput}>8</Boton>
        <Boton manejarCLick={agregarInput}>9</Boton>
        <Boton manejarCLick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarCLick={calcularResultado}>=</Boton>
        <Boton manejarCLick={agregarInput}>0</Boton>
        <Boton manejarCLick={agregarInput}>.</Boton>
        <Boton manejarCLick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonBorrar manejarBorrar={() => setInput("")}>
          Borrar
        </BotonBorrar>
      </div>

     </div>
    
    
    </div>
  );
}

export default App;
