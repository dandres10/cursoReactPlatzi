import React from 'react'

import './estilos/Badges.css'
import confLogo from '../imagenes/badge-header.svg'
import CarnetLista from '../componentes/CarnetsLista'
import PageLoading from '../componentes/PageLoading'
import { Link } from 'react-router-dom'
import api from '../api';
import PageError from '../componentes/PageError';
import MiniLoader from '../componentes/MiniLoader'

class Carnets extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };


    componentDidMount() {
        this.fetchData()
        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    


    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading/>
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }
        //console.log('2/4. Render')
        return (
            <React.Fragment>

                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges_conf-logo' src={confLogo} alt='Conf Logo' />
                        </div>
                    </div>
                </div>

                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <Link to='/carnets/nuevo' className='btn btn-primary'>Nuevo Carnet</Link>
                    </div>
                </div>

                <div className='Badges__list'>
                    <div className='Badges__container' onKe>
                        <CarnetLista carnets={this.state.data} />
                        {this.state.loading && <MiniLoader/>}
                    </div>
                </div>
            </React.Fragment>


        )


    }
}


export default Carnets;


/* estados de un componente ejemplo

constructor(props) {
        super(props)
        console.log('1. constructor')
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log('3. componentDidMount')
         this.timeoutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                        primerNombre: 'Freda',
                        primerApellido: 'Grady',
                        correo: 'Leann_Berge@gmail.com',
                        trabajo: 'Legacy Brand Director',
                        twitter: 'FredaGrady22221-7573',
                        fotoUrl:
                            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                    },
                    {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                        primerNombre: 'Major',
                        primerApellido: 'Rodriguez',
                        correo: 'Ilene66@hotmail.com',
                        trabajo: 'Human Research Architect',
                        twitter: 'MajorRodriguez61545',
                        fotoUrl:
                            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                    },
                    {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                        primerNombre: 'Daphney',
                        primerApellido: 'Torphy',
                        correo: 'Ron61@hotmail.com',
                        trabajo: 'National Markets Officer',
                        twitter: 'DaphneyTorphy96105',
                        fotoUrl:
                            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
                    },
                ],
            })
        }, 3000)

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate')
        console.log({ prevProps: prevProps, prevState: prevState })
        console.log({props: this.props, state: this.state})
    }


    componentWillUnmount(){
        console.log('6. componentWillUnmount')
        clearTimeout(this.timeoutId)
    }*/