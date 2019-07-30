import React from 'react'

import './estilos/BadgeEdit.css'
import header from '../imagenes/platziconf-logo.svg'
import Carnet from '../componentes/Carnet'
import CarnetFormulario from '../componentes/CarnetFormulario'
import api from '../api'
import PageLoading from '../componentes/PageLoading'




class CarnetEditar extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            primerNombre: '',
            primerApellido: '',
            correo: '',
            trabajo: '',
            twitter: '',
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.carnetId)
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    manejarCambio = e => {

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }


    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })
        try {
            await api.badges.update(this.props.match.params.carnetId,this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/carnets')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }

    }




    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <React.Fragment>

                <div className='BadgeEdit__hero'>
                    <img className='img-fluid BadgeEdit__hero-image' src={header} alt='logo' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Carnet primerNombre={this.state.form.primerNombre || 'Primer_Nombre'}
                                primerApellido={this.state.form.primerApellido || 'Primer_Apellido'}
                                trabajo={this.state.form.trabajo || 'Trabajo'}
                                correo={this.state.form.correo || 'Correo'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                fotoUrl='https://s.gravatar.com/avatar/ac691ae5e1833271732ca79d0bb7b814?s=80' />
                        </div>
                        <div className='col-6'>
                        <h1>Editar Asistente</h1>
                            <CarnetFormulario
                                onChange={this.manejarCambio}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default CarnetEditar;