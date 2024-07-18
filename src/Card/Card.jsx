import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
// import DigitalClockImg from '../assets/digitalclock.png';
// import ToDoListImg from '../assets/todolist.png';
// import ColorPaletteImg from '../assets/colorpalette.png';
// import TriviaGameImg from '../assets/triviagame.png';
import Button from '../Button/Button';

function Card({ toyTitle, toyDescription, route, image }) {
// Card Component
    return (
        <div className={styles.card}>
            <div className={ styles.cardContent }>
                <div className={styles.cardImgContainer}>
                    <img className={ styles.cardimg } src={ image } alt="placeholder image" />
                </div>
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

