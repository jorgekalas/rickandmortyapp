// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearchChange(localSearchTerm);
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [localSearchTerm, onSearchChange]);

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input-search"
        value={localSearchTerm}
        onChange={e => setLocalSearchTerm(e.target.value)}
        placeholder="Nombre del personaje"
      />
      <button className="button-buscar" onClick={() => onSearchChange(localSearchTerm)}>Buscar</button>
    </div>
  );
};

export default SearchBar;
