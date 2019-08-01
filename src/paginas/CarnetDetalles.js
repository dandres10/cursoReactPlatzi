import React from 'react'
import './estilos/BadgeDetails.css'
import confLogo from '../imagenes/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import Carnet from '../componentes/Carnet'

import EliminarCarnetModal from '../componentes/EliminarCarnetModal'
function CarnetDetalles(props) {
    const carnet = props.carnet;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la Conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {carnet.primerNombre} {carnet.primerApellido}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Carnet
                            primerNombre={carnet.primerNombre}
                            primerApellido={carnet.primerApellido}
                            correo={carnet.correo}
                            twitter={carnet.twitter}
                            trabajo={carnet.trabajo}
                        />
                    </div>
                    <div className="col">
                        <h2>Acciones</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4"
                                    to={`/carnets/${carnet.id}/editar`}
                                >
                                    Editar
                                      </Link>
                            </div>

                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Eliminar</button>
                                <EliminarCarnetModal isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarnetDetalles