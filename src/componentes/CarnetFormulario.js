import React from 'react'

class CarnetFormulario extends React.Component {


    manejarClick = e => {
        console.log('se dio click')
    }

    // manejarEnvio = e => {
    //     e.preventDefault();
    //     console.log(this.state)

    // }

    render() {
        return (
            <div>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className='form-group'>
                        <label>Primer Nombre</label>
                        <input onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='primerNombre'
                            value={this.props.formValues.primerNombre} />
                    </div>

                    <div className='form-group'>
                        <label>Primer Apellido</label>
                        <input onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='primerApellido'
                            value={this.props.formValues.primerApellido} />
                    </div>

                    <div className='form-group'>
                        <label>Correo</label>
                        <input onChange={this.props.onChange}
                            className='form-control'
                            type='email'
                            name='correo'
                            value={this.props.formValues.correo} />
                    </div>

                    <div className='form-group'>
                        <label>Trabajo</label>
                        <input onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='trabajo'
                            value={this.props.formValues.trabajo} />
                    </div>

                    <div className='form-group'>
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='twitter'
                            value={this.props.formValues.twitter} />
                    </div>

                    <button onClick={this.manejarClick} className='btn btn-primary'>Guardar</button>
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        )
    }
}



export default CarnetFormulario