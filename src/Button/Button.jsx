import styles from './Button.module.css';

function Button({ onClick, buttonText, className }) {
    return (
        <button className={ `${styles.button} ${className}` } onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default Button;
