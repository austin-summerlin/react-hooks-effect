/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import CharacterDetails from '../CharacterDetails';
import { fetchCharacterById } from '../../services/heyArnoldApi';
import { useParams } from 'react-router-dom';

function DetailContainer() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchCharacterById(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>Character Details</h1>
      {loading ? (<h1>Loading...</h1>) : (<CharacterDetails character={character} />)}
    </div>
  );
}

export default DetailContainer;
