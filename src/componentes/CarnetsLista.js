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



function useBuscarCarnets(carnets){
  const [query, setQuery] = React.useState('');

  const [filtroCarnets, setFiltroCarnets] = React.useState(carnets)

  React.useMemo(() => {
    const result = carnets.filter(carnett => {
      return `${carnett.primerNombre} ${carnett.primerApellido}`.toLowerCase().includes(query.toLowerCase());
    });
    setFiltroCarnets(result)
  }, [carnets, query]);
  return {query,setQuery,filtroCarnets}
}

function CarnetDatosCompletos(props) {
  const carnets = props.carnets;

  const {query,setQuery, filtroCarnets} = useBuscarCarnets(carnets)


  if (filtroCarnets.length === 0) {
    return (
      <div>
        <div className='form-group'>
          <label>Filtro Carnets</label>
          <input type='text' className='form-control'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No encontramos ningun carnet</h3>
        <Link className='btn btn-primary' to='/carnets/nuevo'>Crea un nuevo carnet</Link>
      </div>

    )
  }
  return (

    <div className="BadgesList">
      <div className='form-group'>
        <label>Filtro Carnets</label>
        <input type='text' className='form-control'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filtroCarnets.map(carnet => {
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

export default CarnetDatosCompletos;