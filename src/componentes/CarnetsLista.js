import React from 'react'
import './estilos/BadgesList.css'
import { Link } from 'react-router-dom';
import Gravatar from '../componentes/Gravatar'


class CarnetLista extends React.Component {
  render() {

    return (
      <div className="BadgesListItem">

        <Gravatar
          className="Badge__avatar-list"
          correo={this.props.carnet.correo}
          alt="Avatar"
        />
        <div>
          <strong>
            {this.props.carnet.primerNombre} {this.props.carnet.primerApellido}
          </strong>
          <br />@{this.props.carnet.twitter}
          <br />
          {this.props.carnet.trabajo}
        </div>
      </div>
    );
  }
}

class CarnetDatosCompletos extends React.Component {
  render() {
    if (this.props.carnets.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun carnet</h3>
          <Link className='btn btn-primary' to='/carnets/nuevo'>Crea un nuevo carnet</Link>
        </div>

      )
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.carnets.map(carnet => {
            return (
              <li key={carnet.id}>
                <Link className='text-reset text-decoration-none' to={`/carnets/${carnet.id}`} >
                  <CarnetLista carnet={carnet} />
                </Link>

              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CarnetDatosCompletos;