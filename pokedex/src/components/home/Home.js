import React, { useContext} from "react";

import PokeCard from './PokeCard';
import './Home.css';
import { useHistory } from "react-router-dom";
import { goPokedexPage } from "../../routes/coordinator";
import { GlobalStateContext } from '../../App'

const Home = () => {
    const history = useHistory()
    const receivedData = useContext(GlobalStateContext)
    
    return (
        <div>
            <header>
                <button onClick={() => goPokedexPage(history)}
                >Ver minha POKEDEX</button>
                <h1>Lista de Pokemons</h1>
            </header>
            <main className="CardContainer">
                {receivedData.pokemonList.map((pokemon) => {
                    return (
                        <PokeCard
                            key={pokemon.url}
                            pokeName={pokemon.name}
                            pokeUrl={pokemon.url}
                        />
                    )
                })}
            </main>
        </div>
    )

}

export default Home