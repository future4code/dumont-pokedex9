import React from "react";
import './Pokedex.css'
import { goHomePage } from '../../routes/coordinator'
import { useHistory } from "react-router-dom";

const Pokedex = () => {
    const history = useHistory()

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