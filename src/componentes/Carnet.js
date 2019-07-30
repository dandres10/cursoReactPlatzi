import React from 'react'
import confLogo from '../imagenes/badge-header.svg'
import './estilos/carnet.css'
import Gravatar from '../componentes/Gravatar'
class Carnet extends React.Component {
    render() {




        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia "></img>
            </div>

            <div className="Badge__section-name">
                <Gravatar
                className='Badge__avatar'
                correo={this.props.correo}
                alt='Avatar'/>
                <h1>{this.props.primerNombre} <br /> {this.props.primerApellido}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.trabajo}</h3>
                <div>@{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">
                #platzi
            </div>

        </div>;

    }
}


export default Carnet;
