import React, { useState } from 'react';
import axios from 'axios';

import Router from './routes/Router';

import { BASE_URL } from './constants/constants'


export const GlobalStateContext = React.createContext();

const App = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokedexList, setPokedexList] = useState([])

  const getPokemonList = () => {
    axios.get(BASE_URL)
      .then(response => {
        setPokemonList(response.data.results)
        console.log("dentro do then")
      })
      .catch(error => {
        console.log("Erro na requisição")
        console.log(error.message)
      })
  }

  const data = {pokemonList, setPokemonList, pokedexList, setPokedexList, getPokemonList}

  return (
    <GlobalStateContext.Provider value={data}>
      <Router />
    </GlobalStateContext.Provider>
  )
}

export default App;