import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ id, name, image }) => (
  <Link to={`/${id}`} className="link-display">
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </Link>
);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
