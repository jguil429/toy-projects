import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import placeHolderImg from '../assets/placeholderimg.jpg';
import Button from '../Button/Button';

function Card({ toyTitle, toyDescription, route }) {
// Card Component
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <img className={styles.cardimg} src={placeHolderImg} alt="placeholder image" />
                <h2 className={styles.cardtitle}>{toyTitle}</h2>
                <p className={styles.cardtext}>{toyDescription}</p>
            </div>
            <Link to={route} className={styles.cardLink}>
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
