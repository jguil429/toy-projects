import styles from './Button.module.css';
<<<<<<< HEAD
import React from 'react';


function Button({ onClick, buttonText }) {

    return (
        <button onClick={ onClick }
                className={ styles.button }>
                { buttonText }
=======

function Button({ onClick, buttonText }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {buttonText}
>>>>>>> 60dd9bbd688cccd4be56503cbacb3fb9020111e3
        </button>
    );
}

<<<<<<< HEAD

export default Button
=======
export default Button;
>>>>>>> 60dd9bbd688cccd4be56503cbacb3fb9020111e3
