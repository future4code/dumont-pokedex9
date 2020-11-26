import React, { useContext, useEffect } from "react";
import './Pokedex.css'
import { goHomePage } from '../../routes/coordinator'
import { useHistory } from "react-router-dom";
import {GlobalStateContext} from '../../App'

const Pokedex = () => {
    const history = useHistory()
    const receivedData = useContext(GlobalStateContext)

    useEffect(() => {
        receivedData.getPokemonList()
        console.log(receivedData)
    }, [receivedData])

    return (
        <div>
            <header>
                <button onClick={() => goHomePage(history)}>Voltar para lista de pokemons</button>
                <h1>POKEDEX</h1>
            </header>
        </div>
    )
}

export default Pokedex