import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../components/Character.css';

const Character = ({ id, name, image }) => (
  <Link to={`/${id}`} className="link-display">
    <img className={style.img} src={image} alt={name} />
    <p className={style.name}>{name}</p>
  </Link>
);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
