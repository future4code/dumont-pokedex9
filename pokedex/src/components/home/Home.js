import React, { useContext, useEffect } from "react";

import PokeCard from './PokeCard';
import image1 from './img/charmander.png';
import './Home.css';
import { useHistory } from "react-router-dom";
import { goPokedexPage } from "../../routes/coordinator";
import { GlobalStateContext } from '../../App'

const Home = () => {
    const history = useHistory()

    const receivedData = useContext(GlobalStateContext)

    useEffect(() => {
        receivedData.getPokemonList()
    }, [])

    return (
        <div>
            <header>
                <button onClick={() => goPokedexPage(history)}>Ver minha POKEDEX</button>
                <h1>Lista de Pokemons</h1>
            </header>
            {console.log(receivedData)}
            <main className="CardContainer">
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
                <PokeCard
                    image={image1}
                />
            </main>
        </div>
    )

}

export default Home