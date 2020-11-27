import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../App';
import { BASE_URL } from '../../constants/constants';
import { goDetailPage } from '../../routes/coordinator';

const PokeCard = (props) => {
    const history = useHistory()
    const [pokeDetail, setPokeDetail] = useState({})
    const [onPokedex, setOnPokedex] = useState(null)

    const receivedData = useContext(GlobalStateContext)

    useEffect(() => {
        getPokemonDetail(props.pokeName)
    }, [props.pokeName])
    
    const getPokemonDetail = (name) => {
        axios.get(`${BASE_URL}/${name}`)
            .then(response => {
                setPokeDetail(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const addToPokedex = () => {
        const indexPokedex = receivedData.pokedex.findIndex(
            (pokemon) => pokemon.name === props.pokeName
        )

        const indexPokemonList = receivedData.pokemonList.findIndex(
            (pokemon) => pokemon.name === props.pokeName
        )

        if (indexPokedex === -1) {
            const newPokedex = [...receivedData.pokedex, {
                name: props.pokeName,
                url: props.pokeUrl
            }]
            receivedData.setPokedex(newPokedex)

            const newPokemonList = receivedData.pokemonList
            newPokemonList.splice(indexPokemonList, 1)
            
            receivedData.setPokemonList(newPokemonList)
        }
    }    

    const removeFromPokedex = () => {
        const indexPokedex = receivedData.pokedex.findIndex(
            (pokemon) => pokemon.name === props.pokeName
        )

        if (indexPokedex !== -1) {
            const newPokemonList = [...receivedData.pokemonList, {
                name: props.pokeName,
                url: props.pokeUrl
            }]
            receivedData.setPokemonList(newPokemonList)

            const newPokedex = receivedData.pokedex
            newPokedex.splice(indexPokedex, 1)
            
            receivedData.setPokedex(newPokedex)
        }
    }

    useEffect(() => {
        const index = receivedData.pokedex.findIndex((pokemon) => pokemon.name === props.pokeName)

        if (index === -1) {
            setOnPokedex(false)
        } else {
            setOnPokedex(true)
        }
    }, [addToPokedex, removeFromPokedex])

    return (
        <div className="CardBox">
            <img
                src={pokeDetail.sprites && pokeDetail.sprites.front_default}
                alt={props.pokeName}
            />

            {onPokedex ?
                <button
                    onClick={removeFromPokedex}
                >Remover</button>
                :
                <button className="add" type="submit"
                    onClick={addToPokedex}
                >Adicionar</button>
            }

            <button
                onClick={() => goDetailPage(history, props.pokeName)}
                className="detail" type="submit"
            >Ver Detal.</button>
        </div>
    );
}

export default PokeCard;