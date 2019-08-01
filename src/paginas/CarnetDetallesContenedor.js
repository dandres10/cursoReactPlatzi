import React from 'react'

import api from '../api'

import PageError from '../componentes/PageError'
import PageLoading from '../componentes/PageLoading'
import CarnetDetalles from './CarnetDetalles'

class CarnetDetallesContenedor extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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

    manejarAberturaModal = e => {
        this.setState({ modalIsOpen: true })
    }; 

    manejarCierreModal = e => {
        this.setState({ modalIsOpen: false })
    }; 
    
    
    manejarEliminacionCarnet = async e => {
        this.setState ({loading: true, error: null})

        try {
            await api.badges.remove(
                this.props.match.params.carnetId
            )
            this.setState ({loading: false})
            this.props.history.push('/carnets')
        } catch (error) {
            this.setState ({loading: false, error: error})
        }
    }

    



    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <CarnetDetalles onCloseModal={this.manejarCierreModal}
                onOpenModal={this.manejarAberturaModal}
                carnet={this.state.data}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.manejarEliminacionCarnet} />
        )
    }
}

export default CarnetDetallesContenedor