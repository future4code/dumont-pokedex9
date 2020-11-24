import React from "react";

import { DetailPokemon } from './DetailPokemon';
import image1 from './img/charmander.png';
import './Detail.css';
import { useHistory } from "react-router-dom";
import { goBack } from "../../routes/coordinator";

const Detail = () => {
    const history = useHistory()

    return (
        <div>
            <header>
                <button
                    onClick={() => goBack(history)}
                    className='button1'>Voltar</button>
                <h1>Nome do Pokemon</h1>
                <button className='button2'>Adicionar/Remover da Pokedex</button>
            </header>

            <main className='detailContainer'>
                <DetailPokemon
                    frontImage={image1}
                    backImage={image1}

                    hp={'hp:46'}
                    attack={'attack:39'}
                    defense={'defense:52'}
                    specialAttack={'special-attack:43'}
                    specialDefense={'special-defense:54'}
                    speed={'speed:54'}

                    type1={'type1'}
                    type2={'type2'}
                    moveName1={'moveName1'}
                    moveName2={'moveName2'}
                    moveName3={'moveName3'}

                />
            </main>
        </div>
    )
}

export default Detail