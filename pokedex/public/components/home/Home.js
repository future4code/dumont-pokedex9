import React from "react";

import {PokeCard} from './PokeCard';
import image1 from './img/charmander.png';

export default class Home extends React.Component{
    render () {
        return(
            <div>
                <header>
                    <button>Ver minha POKEDEX</button>
                    <h1>Lista de Pokemons</h1>
                </header>

                <main className="CardContainer">
                    <PokeCard
                        image={image1}
                    />
                    
                </main>
            </div>
        )
    }
}