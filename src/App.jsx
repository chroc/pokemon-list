import { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setPokemonList(response.data.results);
    };
    fetchData();  
  }, []); // The empty array means that the effect will only run on mount
  
  return (
    <div className="App container">
      <h1>Pokemons</h1>
      {pokemonList.map((pokemon) => <Pokemon key={pokemon.name} name={pokemon.name} />)}
    </div>
  )
}

export default App
