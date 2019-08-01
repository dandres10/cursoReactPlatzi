import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CarnetNuevo from '../paginas/CarnetNuevo'
import Carnets from '../paginas/Carnets'
import CarnetDetalles from '../paginas/CarnetDetallesContenedor'
import CarnetEditar from '../paginas/CarnetEditar'
import Layout from './Layout';
import NotFount from '../paginas/NotFount'
import Home from '../paginas/Home'
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                <Route exact path="/" component={Home} />
                    <Route exact path="/carnets" component={Carnets}></Route>
                    <Route exact path="/carnets/nuevo" component={CarnetNuevo}></Route>
                    <Route exact path="/carnets/:carnetId/editar" component={CarnetEditar}></Route>
                    <Route exact path="/carnets/:carnetId" component={CarnetDetalles}></Route>
                    <Route component={NotFount}/>
                </Switch>
            </Layout>

        </BrowserRouter>
    );
}

export default App