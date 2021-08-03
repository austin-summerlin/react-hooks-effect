/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const characters = await res.json();
  return characters.map(character => ({
    name: character.name,
    id: character._id,
    image: character.image,
  }));
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  const character = await res.json();
  return character;
};
