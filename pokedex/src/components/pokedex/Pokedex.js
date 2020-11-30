import React, { useContext, useEffect } from "react";
import './Pokedex.css'
import { goHomePage } from '../../routes/coordinator'
import { useHistory } from "react-router-dom";
import {GlobalStateContext} from '../../App'
import PokeCard from "../home/PokeCard";

const Pokedex = () => {
    const history = useHistory()
    const receivedData = useContext(GlobalStateContext)    

    return (
        <div>
            <header>
                <button onClick={() => goHomePage(history)}>Voltar para lista de pokemons</button>
                <h1>POKEDEX</h1>
            </header>
            <main className="CardContainer">
                {receivedData.pokedex.map((pokemon) => {
                    return (
                        <PokeCard
                            key={pokemon.url}
                            pokeName={pokemon.name}
                            pokeUrl={pokemon.url}
                        />
                    )
                })

                }
            </main>
        </div>
    )
}

export default Pokedex