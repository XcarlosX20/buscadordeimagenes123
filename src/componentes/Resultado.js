import React, { Component } from 'react';
import Imagen from './Imagen';

class Resultado extends Component{
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0){
        return null;
        }
        console.log(imagenes);  

        
        return (
            <React.Fragment>
                <div className= "col-12 p-5 row">
                {imagenes.map(imagen => (
                    <Imagen
                    imagen={imagen}
                    key={imagen.id} />
                ))}
                </div>
                
            </React.Fragment>
        
        )
    }
    render() {
        return (
        <React.Fragment>
                <div>
                {this.mostrarImagenes()}
                </div>
                
            </React.Fragment>
            );
    }


}
export default Resultado;