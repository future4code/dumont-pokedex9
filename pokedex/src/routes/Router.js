import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../components/home/Home';
import Pokedex from '../components/pokedex/Pokedex'
import Detail from '../components/detail/Detail'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                
                <Route exact path={"/pokedex"}>
                    <Pokedex />
                </Route>

                <Route exact path={"/detalhes"}>
                    <Detail />
                </Route>

                <Route>
                    <p>Erro 404: página não encontrada</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router