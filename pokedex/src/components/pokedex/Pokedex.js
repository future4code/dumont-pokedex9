import React from "react";
import './Pokedex.css'

export default class Pokedex extends React.Component{
    render () {
        return(
            <div>
                <header>
                    <button>Voltar para lista de pokenons</button>
                    <h1>POKEDEX</h1>
                </header>
            </div>
        )
    }
}