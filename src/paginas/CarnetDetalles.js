import React from 'react'
import confLogo from '../imagenes/platziconf-logo.svg'
import api from '../api'
import './estilos/BadgeDetails.css'
import PageError from '../componentes/PageError'
import PageLoading from '../componentes/PageLoading'
import { Link } from 'react-router-dom'
import Carnet from '../componentes/Carnet'
class CarnetDetalles extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(this.props.match.params.carnetId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };




    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        const carnet = this.state.data
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
                                    <button className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarnetDetalles