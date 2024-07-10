import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setAllCharacters(response.data.results);
        setCharacters(response.data.results);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    const fetchSearchedCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
          params: { name: searchTerm }
        });
        setCharacters(response.data.results);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    if (searchTerm) {
      fetchSearchedCharacters();
    } else {
      setCharacters(allCharacters);
    }
  }, [searchTerm, allCharacters]);

  return (
    <div className="app">
      <h1>RICK AND MORTY API</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {loading && <p>Cargando...</p>}
      {error && <p>Error al cargar los personajes.</p>}
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
