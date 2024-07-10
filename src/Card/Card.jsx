import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import placeHolderImg from '../assets/placeholderimg.jpg';
import Button from '../Button/Button';

function Card({ toyTitle, toyDescription, route }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardimg} src={placeHolderImg} alt="placeholder image" />
      <h2 className={styles.cardtitle}>{toyTitle}</h2>
      <p className={styles.cardtext}>{toyDescription}</p>
      <Link to={route}>
        <Button className={styles.cardButton} buttonText='Play with toy' />
      </Link>
    </div>
  );
}

Card.propTypes = {
  toyTitle: PropTypes.string.isRequired,
  toyDescription: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default Card;
