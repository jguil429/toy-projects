import styles from './Button.module.css';
import React from 'react';


function Button({ onClick, buttonText }) {

    return (
        <button onClick={ onClick }
                className={ styles.button }>
                { buttonText }
        </button>
    );
}


export default Button