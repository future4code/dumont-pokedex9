import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { DetailPokemon } from './DetailPokemon';
import './Detail.css';
import { useHistory, useParams } from "react-router-dom";
import { goBack } from "../../routes/coordinator";

import { BASE_URL } from '../../constants/constants';
import { GlobalStateContext } from '../../App';

const Detail = () => {
    const history = useHistory()
    const pokeName = useParams().pokeName
    const [pokeDetail, setPokeDetail] = useState({})

    const [onPokedex, setOnPokedex] = useState(null)
    const receivedData = useContext(GlobalStateContext)

    const getPokemonDetail = (name) => {
        axios.get(`${BASE_URL}/${name}`)
            .then(response => {
                setPokeDetail(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getPokemonDetail(pokeName)
    }, [])

    const addToPokedex = () => {
        const indexPokedex = receivedData.pokedex.findIndex(
            (pokemon) => pokemon.name === pokeName
        )

        const indexPokemonList = receivedData.pokemonList.findIndex(
            (pokemon) => pokemon.name === pokeName
        )

        if (indexPokedex === -1) {
            const newPokedex = [...receivedData.pokedex, {
                name: pokeName,
                url: `${BASE_URL}/${pokeName}`
            }]
            receivedData.setPokedex(newPokedex)

            const newPokemonList = receivedData.pokemonList
            newPokemonList.splice(indexPokemonList, 1)

            receivedData.setPokemonList(newPokemonList)
        }
    }

    const removeFromPokedex = () => {
        const indexPokedex = receivedData.pokedex.findIndex(
            (pokemon) => pokemon.name === pokeName
        )

        if (indexPokedex !== -1) {
            const newPokemonList = [...receivedData.pokemonList, {
                name: pokeName,
                url: `${BASE_URL}/${pokeName}`
            }]
            receivedData.setPokemonList(newPokemonList)

            const newPokedex = receivedData.pokedex
            newPokedex.splice(indexPokedex, 1)

            receivedData.setPokedex(newPokedex)
        }
    }

    useEffect(() => {
        const index = receivedData.pokedex.findIndex((pokemon) => pokemon.name === pokeName)

        if (index === -1) {
            setOnPokedex(false)
        } else {
            setOnPokedex(true)
        }
    }, [addToPokedex, removeFromPokedex])

    return (
        <div>
            <header>
                <button
                    onClick={() => goBack(history)}
                    className='button1'>Voltar</button>
                <h1>{pokeName}</h1>
                {onPokedex ?
                    <button
                        onClick={removeFromPokedex}
                    >Remover</button>
                    :
                    <button className="add" type="submit"
                        onClick={addToPokedex}
                    >Adicionar</button>
                }
            </header>

            <main className='detailContainer'>
                {pokeDetail.name &&
                    <DetailPokemon
                        frontImage={pokeDetail.sprites.front_default}
                        backImage={pokeDetail.sprites.back_default}

                        hp={pokeDetail.stats[0].base_stat}
                        attack={pokeDetail.stats[1].base_stat}
                        defense={pokeDetail.stats[2].base_stat}
                        specialAttack={pokeDetail.stats[3].base_stat}
                        specialDefense={pokeDetail.stats[4].base_stat}
                        speed={pokeDetail.stats[5].base_stat}

                        type1={pokeDetail.types[0].type.name}
                        type2={pokeDetail.types.length > 1 && pokeDetail.types[1].type.name}

                        moveName1={pokeDetail.moves[0].move.name}
                        moveName3={pokeDetail.moves[1].move.name}
                        moveName2={pokeDetail.moves[2].move.name}
                    />
                }
            </main>
        </div>
    )
}

export default Detail