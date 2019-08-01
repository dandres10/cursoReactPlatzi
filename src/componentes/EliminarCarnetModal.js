import React from 'react'

import Modal from './Modal'

function EliminarCarnetModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className= "DeleteBadgeModal">
                <h1>Estas Seguro</h1>
                <p>Estas Apunto de borrar este carnet</p>

                <div>
                    <button onClick={props.onDeleteBadge} className='btn btn-danger mr-4'>Eliminar</button>
                    <button onClick={props.onClose} className='btn btn-primary'>Cancelar</button>
                </div>
        </div>

    </Modal>
}

export default EliminarCarnetModal