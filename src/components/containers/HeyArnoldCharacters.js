/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/heyArnoldApi';
import CharacterList from '../CharacterList';

function HeyArnoldContainer() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  //useEffect replaces component did mount
  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading ? (<img src="https://i.imgur.com/B8SSY5p.gif" alt="loading" />) : <CharacterList characters={characters} />}
    </div>
  );
}

export default HeyArnoldContainer;





