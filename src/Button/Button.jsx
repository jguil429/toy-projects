import styles from './Button.module.css'

function Button(props) {
    const buttonText = props.buttonText

    const handleClick = (e) => e.target.textContent = "Ouch!";
    return (
        <button className={ styles.button }>{ buttonText }</button>
    );
}

export default Button