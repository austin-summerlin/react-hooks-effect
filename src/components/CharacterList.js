import React from 'react';
import PropTypes from 'prop-types';
import Character from '../components/Character';
import style from '../components/CharacterList.css';

const CharacterList = ({ characters }) => (
  <ul aria-label="character-list" className={style.ul}>
    {characters.map(character => (
      <li key={character.id} className={style.li}>
        <Character
          id={character.id}
          name={character.name}
          image={character.image}
        />
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })).isRequired
};

export default CharacterList;
