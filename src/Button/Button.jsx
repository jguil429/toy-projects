import styles from './Button.module.css';

function Button({ onClick, buttonText }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default Button;