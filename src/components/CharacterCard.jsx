import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-details">
        <h2>{character.name}</h2>
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Localización:</strong> {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
