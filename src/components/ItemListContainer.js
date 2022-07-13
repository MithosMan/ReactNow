import React from 'react';
import Conteo from './ItemCount';

let {propName: nombre}={propName: "Futuro listado de criaturas fantasticas"}; 

function ListContainer (){

  const onAdd = (valor) => {
    console.log("Compraste "+valor+" unidades")
  }

  return (
    <p>Listado provisional:
      <div>{nombre}</div> 
      <Conteo initial={1} stock={5} onAdd={onAdd}/>
    </p>
    );
  }

  export default ListContainer