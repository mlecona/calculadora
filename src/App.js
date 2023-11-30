import './App.css';
import logo from './imagenes/logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState("");

  const agregaInput = val => {
    setInput(input + val);
  };

  const calculaResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor agrega valores para realizar los cálculos.')
    }
  };
  
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo-imagen" src={logo} alt="logo" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla valor={input} />
        <div className="fila">
          <Boton manejarClic={agregaInput}>1</Boton>
          <Boton manejarClic={agregaInput}>2</Boton>
          <Boton manejarClic={agregaInput}>3</Boton>
          <Boton manejarClic={agregaInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregaInput}>4</Boton>
          <Boton manejarClic={agregaInput}>5</Boton>
          <Boton manejarClic={agregaInput}>6</Boton>
          <Boton manejarClic={agregaInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregaInput}>7</Boton>
          <Boton manejarClic={agregaInput}>8</Boton>
          <Boton manejarClic={agregaInput}>9</Boton>
          <Boton manejarClic={agregaInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calculaResultado}>=</Boton>
          <Boton manejarClic={agregaInput}>0</Boton>
          <Boton manejarClic={agregaInput}>.</Boton>
          <Boton manejarClic={agregaInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
