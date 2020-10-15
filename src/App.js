import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import './index.css';
import './normalize.css';
import './skeleton.css';

class App extends Component{
  
  state = {
    termino : '',
    imagenes : []
  }
  consultarAPI = () => {
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}`;

    fetch(url)
    .then(res => res.json())
    .then(resultado => this.setState({
      imagenes : resultado.hits
    }))
  }
  
  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {this.consultarAPI();})
     }
 render() { 
  return (
    <div className="app container">
      <div className="jumbotron">
        <h1 className="lead text-center">Buscador de Imagenes</h1>
        <Buscador datosBusqueda={this.datosBusqueda}/> 
      </div>
      <Resultado imagenes={this.state.imagenes}/>

    </div>
    
  );
}
}
export default App;
