import React from 'react';
import './App.css';
import Navegacion from './components/NavBar';
import ListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
    <Navegacion />
    <ListContainer texto={"Gorgona"}/>
    </div>
  );
}

export default App;
