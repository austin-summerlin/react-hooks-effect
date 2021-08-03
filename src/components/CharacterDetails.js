import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetails = ({ image, name }) => (
  <figure aria-label="individual" role="individual">
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </figure>
);

CharacterDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharacterDetails;
