import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  if (!characters || characters.length === 0) {
    return <p>No se encontraron personajes.</p>;
  }

  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
